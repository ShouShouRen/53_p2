<?php
  date_default_timezone_set("Asia/Taipei");
  $now = date("Y-m-d H:i:s");
  $db_name = "53_p2";
  $db_host = "localhost";
  $db_user = "admin";
  $db_pw = "1234";
  $db_charset = "utf8mb4";
  $dsn = "mysql:host={$db_host};dbname={$db_name};charset={$db_charset}";
  $pdo = new PDO($dsn,$db_user,$db_pw);
?>