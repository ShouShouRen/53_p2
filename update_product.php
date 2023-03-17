<?php
require_once("pdo.php");

$id = $_POST["id"];
$product_name = $_POST["product_name"];
$product_des = $_POST["product_des"];
$price = $_POST["price"];
$links = $_POST["links"];
$images = $_FILES["images"]["name"];

if ($images) {
  $target_dir = "./images/";
  $target_file = $target_dir . basename($_FILES["images"]["name"]);
  move_uploaded_file($_FILES["images"]["tmp_name"], $target_file);
  
  $sql = "UPDATE products SET product_name = ?, product_des = ?, price = ?, links = ?, images = ? WHERE id = ?";
  $stmt = $pdo->prepare($sql);
  $stmt->execute([$product_name, $product_des, $price, $links, $images, $id]);
} else {
  $sql = "UPDATE products SET product_name = ?, product_des = ?, price = ?, links = ? WHERE id = ?";
  $stmt = $pdo->prepare($sql);
  $stmt->execute([$product_name, $product_des, $price, $links, $id]);
}
