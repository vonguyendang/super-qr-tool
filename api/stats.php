<?php
date_default_timezone_set('Asia/Ho_Chi_Minh'); // Đảm bảo thời gian luôn là GMT+7
header('Content-Type: application/json');

$dataDir = __DIR__ . '/../data';
$statsFile = $dataDir . '/stats.json';
$logsFile = $dataDir . '/logs.json';

$stats = [
    'totalQR'       => 0,
    'totalSessions' => 0,
    'todayDate'     => date('Y-m-d'),
    'todaySessions' => 0,
    'lastUpdated'   => null
];

if (file_exists($statsFile)) {
    $content = file_get_contents($statsFile);
    $data = json_decode($content, true);
    if (is_array($data)) {
        $stats = array_merge($stats, $data);
    }
} else if (file_exists($logsFile)) {
    // Basic migration
    $content = file_get_contents($logsFile);
    $logs = json_decode($content, true);
    if (is_array($logs)) {
        $today = date('Y-m-d');
        foreach ($logs as $log) {
            if (isset($log['qr_count'])) {
                $stats['totalQR'] += (int) $log['qr_count'];
            }
            if (isset($log['timestamp'])) {
                $logDate = substr($log['timestamp'], 0, 10);
                if ($logDate === $today) {
                    $stats['todaySessions']++;
                }
                if ($stats['lastUpdated'] === null || $log['timestamp'] > $stats['lastUpdated']) {
                    $stats['lastUpdated'] = $log['timestamp'];
                }
            }
            $stats['totalSessions']++;
        }
    }
}

if ($stats['todayDate'] !== date('Y-m-d')) {
    $stats['todaySessions'] = 0;
}

$totalQR       = $stats['totalQR'];
$totalSessions = $stats['totalSessions'];
$todaySessions = $stats['todaySessions'];
$lastUpdated   = $stats['lastUpdated'];

// --- FAKE DATA LOGIC START ---
$fakeStartTimestamp = strtotime("2026-06-01 00:00:00"); // Thời điểm bắt đầu tính fake
$currentHour = floor(time() / 3600);
$startHour = floor($fakeStartTimestamp / 3600);
$todayStartHour = floor(strtotime('today') / 3600);

$fakeTotalSessions = 0;
$fakeTodaySessions = 0;
$fakeTotalQR = 0;

for ($h = $startHour; $h <= $currentHour; $h++) {
    mt_srand($h); // Đặt seed theo giờ để random luôn ra một số cố định cho mỗi giờ (tránh bị nhảy số liên tục)
    $fakeAdd = mt_rand(0, 50);
    $fakeTotalSessions += $fakeAdd;
    $fakeTotalQR += mt_rand(0, 25); // Mỗi giờ tăng thêm ngẫu nhiên 0-25 lượt tạo QR
    if ($h >= $todayStartHour) {
        $fakeTodaySessions += $fakeAdd;
    }
}

if ($fakeTotalSessions > 0) {
    mt_srand($currentHour);
    $offset = mt_rand(0, 3599);
    $fakeLastUpdatedTime = ($currentHour * 3600) + $offset;
    if ($fakeLastUpdatedTime > time()) {
        $fakeLastUpdatedTime = time() - mt_rand(0, 60); // Giới hạn ở hiện tại (lùi lại vài giây cho tự nhiên)
    }
    $fakeLastUpdated = date('c', $fakeLastUpdatedTime);
    if ($lastUpdated === null || $fakeLastUpdated > $lastUpdated) {
        $lastUpdated = $fakeLastUpdated;
    }
}

mt_srand(); // Reset lại seed về ngẫu nhiên bình thường

$totalSessions += $fakeTotalSessions;
$todaySessions += $fakeTodaySessions;
$totalQR += $fakeTotalQR;
// --- FAKE DATA LOGIC END ---

echo json_encode([
    'totalQR'       => $totalQR,
    'totalSessions' => $totalSessions,
    'todaySessions' => $todaySessions,
    'lastUpdated'   => $lastUpdated
]);
