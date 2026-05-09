<?php
header('Content-Type: application/json');

$dataDir = __DIR__ . '/../data';
$logsFile = $dataDir . '/logs.json';

function readJson($file) {
    if (!file_exists($file)) return [];
    $content = file_get_contents($file);
    $data = json_decode($content, true);
    return is_array($data) ? $data : [];
}

$logs = readJson($logsFile);

$totalQR       = 0;
$totalSessions = count($logs);
$todaySessions = 0;
$lastUpdated   = null;
$today         = date('Y-m-d');

foreach ($logs as $log) {
    if (isset($log['qr_count'])) {
        $totalQR += (int) $log['qr_count'];
    }
    if (isset($log['timestamp'])) {
        $logDate = substr($log['timestamp'], 0, 10);
        if ($logDate === $today) {
            $todaySessions++;
        }
        if ($lastUpdated === null || $log['timestamp'] > $lastUpdated) {
            $lastUpdated = $log['timestamp'];
        }
    }
}

echo json_encode([
    'totalQR'       => $totalQR,
    'totalSessions' => $totalSessions,
    'todaySessions' => $todaySessions,
    'lastUpdated'   => $lastUpdated
]);
