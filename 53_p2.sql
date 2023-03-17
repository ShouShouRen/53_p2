-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-03-17 02:58:28
-- 伺服器版本： 10.4.27-MariaDB
-- PHP 版本： 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `53_p2`
--

-- --------------------------------------------------------

--
-- 資料表結構 `login_log`
--

CREATE TABLE `login_log` (
  `user` varchar(100) NOT NULL,
  `login_time` datetime NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `login_log`
--

INSERT INTO `login_log` (`user`, `login_time`, `status`) VALUES
('admin', '2023-03-17 09:54:45', '登出成功'),
('admin', '2023-03-17 09:54:57', '登入成功'),
('admin', '2023-03-17 09:55:13', '登出成功'),
('user02', '2023-03-17 09:55:23', '登入失敗'),
('user02', '2023-03-17 09:55:33', '登入成功'),
('user02', '2023-03-17 09:57:19', '登出成功'),
('admin', '2023-03-17 09:57:28', '登入成功');

-- --------------------------------------------------------

--
-- 資料表結構 `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_des` text NOT NULL,
  `price` varchar(30) NOT NULL,
  `links` varchar(100) NOT NULL,
  `time` datetime NOT NULL,
  `images` varchar(100) NOT NULL,
  `template` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_des`, `price`, `links`, `time`, `images`, `template`) VALUES
(1, '咖啡商品', '好喝的咖啡', '90', 'coffee.com', '2023-03-17 08:36:40', 'a6f6eeffc6a631b5db0477a6ec154408.jpg', '2'),
(2, '美式炭培', '用美國的咖啡豆烘製', '80', 'coffee.com', '2023-03-17 08:50:24', 'ccbab79e250bf5e8b09a251d21257e22.jpg', '1'),
(3, 'camacoffee', '最平價的咖啡', '40', 'cama.com', '2023-03-17 09:46:52', 'd0a70042815ec2ffb2d96e069bf8a5f2.jpg', '4'),
(4, '路易莎咖啡', '評價好喝的咖啡', '60', 'louiscoffee.com', '2023-03-17 09:49:40', '5afe232c8fd26d4d2079ab252f3a62c8.jpg', '3');

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `user` varchar(100) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `pw` varchar(100) NOT NULL,
  `role` int(1) NOT NULL DEFAULT 1,
  `user_id` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`id`, `user`, `user_name`, `pw`, `role`, `user_id`) VALUES
(1, 'admin', '超級管理員', '1234', 0, '0000'),
(2, 'coffee', '咖啡使用者', '1234', 1, '0001'),
(4, 'user02', '使用者02', '1234', 1, '0003');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
