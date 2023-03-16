<?php
session_start();
require_once("pdo.php");

$sql = "SELECT * FROM users";

$use = $_POST['use']; // 獲取用戶的選擇

// 根據用戶的選擇進行排序
if ($use == 'up') {
  $sql .= " ORDER BY user_id ASC";
} else {
  $sql .= " ORDER BY user_id DESC";
}

$stmt = $pdo->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// 以下代碼與原代碼相同，用於過濾搜索結果並生成 HTML
if (isset($_POST['search'])) {
  $keyword = $_POST['search'];
  $filtered_result = array();
  if (!empty($keyword)) {
    foreach ($result as $row) {
      if (strpos($row['user'], $keyword) !== false) {
        array_push($filtered_result, $row);
      } else if (strpos($row['user_id'], $keyword) !== false) {
        array_push($filtered_result, $row);
      } else if (strpos($row['user_name'], $keyword) !== false) {
        array_push($filtered_result, $row);
      }
    }
    $html = "";
    foreach ($filtered_result as $row) {
      // ...
    }
    echo $html;
  }
}
?>