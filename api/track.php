<?php
header('Content-Type: application/json');

$dataDir = __DIR__ . '/../data';
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0777, true);
}

$logsFile = $dataDir . '/logs.json';
if (!file_exists($logsFile)) {
    file_put_contents($logsFile, json_encode([]));
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

$content = file_get_contents($logsFile);
$logs = json_decode($content, true);
if (!is_array($logs)) $logs = [];

$logs[] = [
    'event'     => 'generate',
    'qr_count'  => (int) $input['qr_count'],
    'timestamp' => date('c')
];

file_put_contents($logsFile, json_encode($logs, JSON_PRETTY_PRINT));
echo json_encode(['success' => true]);
