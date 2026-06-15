<?php
date_default_timezone_set('Asia/Ho_Chi_Minh'); // Đảm bảo thời gian luôn là GMT+7
header('Content-Type: application/json');

$dataDir = __DIR__ . '/../data';
$logsFile = $dataDir . '/logs.json';

function readJson(string $file): array {
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

// --- FAKE DATA LOGIC START ---
// Đoạn code này tự động tăng ngẫu nhiên 0-50 lượt truy cập mỗi giờ.
// Có thể xoá đoạn này khi lượng truy cập thực tế đã đủ lớn.
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
