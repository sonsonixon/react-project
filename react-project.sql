-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2019 at 01:18 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `completed` enum('0','1','','') NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `userid`, `title`, `completed`, `created_at`, `updated_at`, `deleted_at`) VALUES
(8, 30, 'Learn React', '0', '2019-01-19 06:06:48', '2019-01-19 06:06:48', '0000-00-00 00:00:00'),
(9, 31, 'Implement Redux to Project', '0', '2019-01-19 06:07:47', '2019-01-19 06:07:47', '0000-00-00 00:00:00'),
(10, 32, 'Implement THUNK middleware', '0', '2019-01-19 06:30:00', '2019-01-19 06:30:00', '0000-00-00 00:00:00'),
(11, 33, 'Make the world a better place', '0', '2019-01-20 11:06:58', '2019-01-20 11:06:58', '0000-00-00 00:00:00'),
(12, 34, 'Cook some food', '0', '2019-01-20 11:09:47', '2019-01-20 11:09:47', '0000-00-00 00:00:00'),
(13, 36, 'Create something that matters', '0', '2019-01-20 11:31:02', '2019-01-20 11:31:02', '0000-00-00 00:00:00'),
(14, 37, 'Read a book', '0', '2019-01-20 11:39:43', '2019-01-20 11:39:43', '0000-00-00 00:00:00'),
(15, 1, 'Learn how to drive', '0', '2019-01-20 14:14:29', '2019-01-20 14:14:29', '0000-00-00 00:00:00'),
(16, 2, 'Get a masters degree', '0', '2019-01-20 14:14:59', '2019-01-20 14:14:59', '0000-00-00 00:00:00'),
(17, 3, 'Watch a movie', '0', '2019-01-20 14:16:47', '2019-01-20 14:16:47', '0000-00-00 00:00:00'),
(18, 55, 'Buy own card', '0', '2019-01-21 12:08:17', '2019-01-21 12:08:17', '0000-00-00 00:00:00'),
(19, 44, 'Go to fucking sleep', '0', '2019-01-22 00:17:56', '2019-01-22 00:17:56', '0000-00-00 00:00:00'),
(20, 69, 'Get a fucking girlfriend', '0', '2019-01-22 18:40:11', '2019-01-22 18:40:11', '0000-00-00 00:00:00'),
(21, 70, 'Sample Task', '0', '2019-01-22 19:29:05', '2019-01-22 19:29:05', '0000-00-00 00:00:00'),
(22, 71, 'Sample Task 2', '0', '2019-01-22 19:29:44', '2019-01-22 19:29:44', '0000-00-00 00:00:00'),
(23, 72, 'Clean my room', '0', '2019-01-22 19:36:13', '2019-01-22 19:36:13', '0000-00-00 00:00:00'),
(24, 77, 'Bake some cookies', '0', '2019-01-22 21:26:01', '2019-01-22 21:26:01', '0000-00-00 00:00:00'),
(25, 88, 'Save some money', '0', '2019-01-22 21:26:34', '2019-01-22 21:26:34', '0000-00-00 00:00:00'),
(26, 66, 'Browse the internet', '0', '2019-01-22 21:29:56', '2019-01-22 21:29:56', '0000-00-00 00:00:00'),
(27, 102, 'Play games', '0', '2019-01-26 09:00:54', '2019-01-26 09:00:54', '0000-00-00 00:00:00'),
(28, 111, 'Listen to music', '0', '2019-01-26 09:01:38', '2019-01-26 09:01:38', '0000-00-00 00:00:00'),
(29, 123, 'Wash clothes', '0', '2019-01-26 09:09:41', '2019-01-26 09:09:41', '0000-00-00 00:00:00'),
(30, 0, 's', '0', '2019-01-31 07:48:13', '2019-01-31 07:48:13', '0000-00-00 00:00:00'),
(31, 0, 'awe', '0', '2019-01-31 07:51:22', '2019-01-31 07:51:22', '0000-00-00 00:00:00'),
(32, 500, 'Eat cake', '0', '2019-01-31 07:52:03', '2019-01-31 07:52:03', '0000-00-00 00:00:00'),
(33, 666, 'Evil', '0', '2019-02-03 13:44:36', '2019-02-03 13:44:36', '0000-00-00 00:00:00'),
(34, 777, 'Angel', '0', '2019-02-03 13:45:24', '2019-02-03 13:45:24', '0000-00-00 00:00:00'),
(35, 555, 'Tuna', '0', '2019-02-03 13:46:17', '2019-02-03 13:46:17', '0000-00-00 00:00:00'),
(36, 69, 'S', '0', '2019-02-03 13:47:23', '2019-02-03 13:47:23', '0000-00-00 00:00:00'),
(37, 7, 'Up', '0', '2019-02-03 13:50:44', '2019-02-03 13:50:44', '0000-00-00 00:00:00'),
(38, 87000, 'Jollibee', '0', '2019-02-03 13:54:53', '2019-02-03 13:54:53', '0000-00-00 00:00:00'),
(39, 1, 'awe', '0', '2019-02-03 13:57:16', '2019-02-03 13:57:16', '0000-00-00 00:00:00'),
(40, 122, 'Sample', '0', '2019-02-04 05:34:19', '2019-02-04 05:34:19', '0000-00-00 00:00:00'),
(41, 1, 'www', '0', '2019-02-04 05:46:14', '2019-02-04 05:46:14', '0000-00-00 00:00:00'),
(42, 333, 'ex', '0', '2019-02-04 05:46:59', '2019-02-04 05:46:59', '0000-00-00 00:00:00'),
(43, 1, 'awe', '0', '2019-02-04 05:47:43', '2019-02-04 05:47:43', '0000-00-00 00:00:00'),
(44, 1, 'Jollibee', '0', '2019-02-04 05:48:03', '2019-02-04 05:48:03', '0000-00-00 00:00:00'),
(45, 1, 'Sample', '0', '2019-02-04 05:49:38', '2019-02-04 05:49:38', '0000-00-00 00:00:00'),
(46, 30, 'Sonsonixon', '0', '2019-02-04 05:52:24', '2019-02-04 05:52:24', '0000-00-00 00:00:00'),
(47, 31, 'Buktuypul', '0', '2019-02-04 05:53:02', '2019-02-04 05:53:02', '0000-00-00 00:00:00'),
(48, 166, 'test', '0', '2019-02-04 06:48:03', '2019-02-04 06:48:03', '0000-00-00 00:00:00'),
(49, 1666, 'Test', '0', '2019-02-04 06:52:48', '2019-02-04 06:52:48', '0000-00-00 00:00:00'),
(50, 177, 'SampleTest', '0', '2019-02-04 06:54:38', '2019-02-04 06:54:38', '0000-00-00 00:00:00'),
(51, 188, 'Testing', '0', '2019-02-04 06:56:14', '2019-02-04 06:56:14', '0000-00-00 00:00:00'),
(52, 199, 'Pass', '0', '2019-02-04 06:57:35', '2019-02-04 06:57:35', '0000-00-00 00:00:00'),
(53, 200, 'Shaw', '0', '2019-02-04 06:58:10', '2019-02-04 06:58:10', '0000-00-00 00:00:00'),
(54, 1000, 'Work', '0', '2019-02-04 13:57:06', '2019-02-04 13:57:06', '0000-00-00 00:00:00'),
(55, 1300, 'Rap', '0', '2019-02-04 13:57:29', '2019-02-04 13:57:29', '0000-00-00 00:00:00'),
(56, 4000, 'Yehey', '0', '2019-02-04 13:58:15', '2019-02-04 13:58:15', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) UNSIGNED ZEROFILL NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(250) NOT NULL,
  `status` enum('active','inactive','','') NOT NULL,
  `role` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `middle_name`, `last_name`, `username`, `password`, `status`, `role`, `created_at`, `updated_at`, `deleted_at`) VALUES
(00000000008, 'Jason', '', 'Nares', 'sonsonixon', '', 'active', '', '2019-01-14 19:33:03', '2019-01-14 19:33:03', '0000-00-00 00:00:00'),
(00000000009, 'Mary', '', 'Batilong', 'maryrose', '', 'active', '', '2019-01-14 19:34:04', '2019-01-14 19:34:04', '0000-00-00 00:00:00'),
(00000000010, 'Ryan', '', 'Coros', 'ryancoros', '', 'active', '', '2019-01-14 19:34:22', '2019-01-14 19:34:22', '0000-00-00 00:00:00'),
(00000000011, 'Glen', '', 'Echon', 'gechon', '', 'active', '', '2019-01-14 19:34:34', '2019-01-14 19:34:34', '0000-00-00 00:00:00'),
(00000000012, 'Dindo', '', 'Gatmaitan', 'dindogatmaitan', '', 'active', '', '2019-01-14 19:35:15', '2019-01-14 19:35:15', '0000-00-00 00:00:00'),
(00000000013, 'Edcel', '', 'Celiz', 'edcelceliz', '', 'active', '', '2019-01-14 19:35:29', '2019-01-14 19:35:29', '0000-00-00 00:00:00'),
(00000000014, 'Jack', '', 'Malasa', 'jackmalasa', '', 'active', '', '2019-01-14 19:35:39', '2019-01-14 19:35:39', '0000-00-00 00:00:00'),
(00000000015, 'Jerome', '', 'Francisco', 'jjfrancisco', '', 'active', '', '2019-01-14 19:36:17', '2019-01-14 19:36:17', '0000-00-00 00:00:00'),
(00000000016, 'Rn', '', 'Aquino', 'rnaquino', '', 'active', '', '2019-01-14 19:36:27', '2019-01-14 19:36:27', '0000-00-00 00:00:00'),
(00000000017, 'Rhea', '', 'Reyes', 'rheareyes', '', 'active', '', '2019-01-14 19:36:55', '2019-01-14 19:36:55', '0000-00-00 00:00:00'),
(00000000018, 'Lyka', '', 'Rufo', 'lykarufo', '', 'active', '', '2019-01-14 19:37:36', '2019-01-14 19:37:36', '0000-00-00 00:00:00'),
(00000000019, 'Hiroko', '', 'Kobayashi', 'hirokokobayashi', '', 'active', '', '2019-01-14 19:38:01', '2019-01-14 19:38:01', '0000-00-00 00:00:00'),
(00000000020, 'Red', '', 'Cotas', 'redcotas', '', 'active', '', '2019-01-14 19:38:11', '2019-01-14 19:38:11', '0000-00-00 00:00:00'),
(00000000021, 'Alex', '', 'Zubeldia', 'alexzubeldia', '', 'active', '', '2019-01-14 19:38:25', '2019-01-14 19:38:25', '0000-00-00 00:00:00'),
(00000000022, 'Keejay', '', 'Evangelista', 'kenken', '', 'active', '', '2019-01-14 19:38:38', '2019-01-14 19:38:38', '0000-00-00 00:00:00'),
(00000000023, 'Markiss', '', 'Venzon', 'makmak', '', 'active', '', '2019-01-14 19:39:47', '2019-01-14 19:39:47', '0000-00-00 00:00:00'),
(00000000024, 'Marc', '', 'Montilla', 'marcmontilla', '', 'active', '', '2019-01-14 19:40:06', '2019-01-14 19:40:06', '0000-00-00 00:00:00'),
(00000000025, 'Eirielle', '', 'Martinez', 'ejmatinez', '', 'active', '', '2019-01-14 19:40:27', '2019-01-14 19:40:27', '0000-00-00 00:00:00'),
(00000000026, 'Pea', '', 'Vargas', 'peydaph', '', 'active', '', '2019-01-14 19:40:39', '2019-01-14 19:40:39', '0000-00-00 00:00:00'),
(00000000027, 'Israel', '', 'Carino', 'carinobrutal', '', 'active', '', '2019-01-14 19:41:08', '2019-01-14 19:41:08', '0000-00-00 00:00:00'),
(00000000042, 'Mina', '', 'Myou', 'minari', '', 'active', '', '2019-01-17 00:23:55', '2019-01-17 00:23:55', '0000-00-00 00:00:00'),
(00000000044, 'Sakura', '', 'Miyawaki', 'sakurachan', '', 'active', '', '2019-01-17 23:17:35', '2019-01-17 23:17:35', '0000-00-00 00:00:00'),
(00000000045, 'Nayeon', '', 'Im', 'nabongs', '', 'active', '', '2019-01-22 21:31:00', '2019-01-22 21:31:00', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
