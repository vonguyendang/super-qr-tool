<?php
date_default_timezone_set('Asia/Ho_Chi_Minh'); // Đảm bảo thời gian luôn là GMT+7
header('Content-Type: application/json');

$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!isset($input['qr_count']) || !is_numeric($input['qr_count'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

// Migration logic
$logsFile = $dataDir . '/logs.json';
$statsFile = $dataDir . '/stats.json';

if (!file_exists($statsFile)) {
    $initialStats = [
        'totalQR' => 0,
        'totalSessions' => 0,
        'todayDate' => date('Y-m-d'),
        'todaySessions' => 0,
        'lastUpdated' => date('c')
    ];

    if (file_exists($logsFile)) {
        $content = file_get_contents($logsFile);
        $logs = json_decode($content, true);
        if (is_array($logs)) {
            $today = date('Y-m-d');
            foreach ($logs as $log) {
                if (isset($log['qr_count'])) {
                    $initialStats['totalQR'] += (int) $log['qr_count'];
                }
                if (isset($log['timestamp'])) {
                    $logDate = substr($log['timestamp'], 0, 10);
                    if ($logDate === $today) {
                        $initialStats['todaySessions']++;
                    }
                    if ($initialStats['lastUpdated'] === null || $log['timestamp'] > $initialStats['lastUpdated']) {
                        $initialStats['lastUpdated'] = $log['timestamp'];
                    }
                }
                $initialStats['totalSessions']++;
            }
        }
        rename($logsFile, $logsFile . '.backup');
    }
    file_put_contents($statsFile, json_encode($initialStats));
}

// Update stats with file lock
$fp = fopen($statsFile, 'c+');
if (flock($fp, LOCK_EX)) {
    $size = filesize($statsFile);
    $content = $size > 0 ? fread($fp, $size) : '';
    $stats = json_decode($content, true);

    if (!is_array($stats)) {
        $stats = [
            'totalQR' => 0,
            'totalSessions' => 0,
            'todayDate' => date('Y-m-d'),
            'todaySessions' => 0,
            'lastUpdated' => date('c')
        ];
    }

    $today = date('Y-m-d');
    if (!isset($stats['todayDate']) || $stats['todayDate'] !== $today) {
        $stats['todayDate'] = $today;
        $stats['todaySessions'] = 0;
    }

    $stats['totalQR'] += (int) $input['qr_count'];
    $stats['totalSessions'] += 1;
    $stats['todaySessions'] += 1;
    $stats['lastUpdated'] = date('c');

    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($stats, JSON_PRETTY_PRINT));
    flock($fp, LOCK_UN);
}
fclose($fp);

echo json_encode(['success' => true]);
