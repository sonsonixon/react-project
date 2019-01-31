-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2019 at 11:33 AM
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
(32, 500, 'Eat cake', '0', '2019-01-31 07:52:03', '2019-01-31 07:52:03', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) UNSIGNED ZEROFILL NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `username`, `created_at`, `updated_at`, `deleted_at`) VALUES
(00000000008, 'Jason', 'Nares', 'sonsonixon', '2019-01-14 19:33:03', '2019-01-14 19:33:03', '0000-00-00 00:00:00'),
(00000000009, 'Mary', 'Batilong', 'maryrose', '2019-01-14 19:34:04', '2019-01-14 19:34:04', '0000-00-00 00:00:00'),
(00000000010, 'Ryan', 'Coros', 'ryancoros', '2019-01-14 19:34:22', '2019-01-14 19:34:22', '0000-00-00 00:00:00'),
(00000000011, 'Glen', 'Echon', 'gechon', '2019-01-14 19:34:34', '2019-01-14 19:34:34', '0000-00-00 00:00:00'),
(00000000012, 'Dindo', 'Gatmaitan', 'dindogatmaitan', '2019-01-14 19:35:15', '2019-01-14 19:35:15', '0000-00-00 00:00:00'),
(00000000013, 'Edcel', 'Celiz', 'edcelceliz', '2019-01-14 19:35:29', '2019-01-14 19:35:29', '0000-00-00 00:00:00'),
(00000000014, 'Jack', 'Malasa', 'jackmalasa', '2019-01-14 19:35:39', '2019-01-14 19:35:39', '0000-00-00 00:00:00'),
(00000000015, 'Jerome', 'Francisco', 'jjfrancisco', '2019-01-14 19:36:17', '2019-01-14 19:36:17', '0000-00-00 00:00:00'),
(00000000016, 'Rn', 'Aquino', 'rnaquino', '2019-01-14 19:36:27', '2019-01-14 19:36:27', '0000-00-00 00:00:00'),
(00000000017, 'Rhea', 'Reyes', 'rheareyes', '2019-01-14 19:36:55', '2019-01-14 19:36:55', '0000-00-00 00:00:00'),
(00000000018, 'Lyka', 'Rufo', 'lykarufo', '2019-01-14 19:37:36', '2019-01-14 19:37:36', '0000-00-00 00:00:00'),
(00000000019, 'Hiroko', 'Kobayashi', 'hirokokobayashi', '2019-01-14 19:38:01', '2019-01-14 19:38:01', '0000-00-00 00:00:00'),
(00000000020, 'Red', 'Cotas', 'redcotas', '2019-01-14 19:38:11', '2019-01-14 19:38:11', '0000-00-00 00:00:00'),
(00000000021, 'Alex', 'Zubeldia', 'alexzubeldia', '2019-01-14 19:38:25', '2019-01-14 19:38:25', '0000-00-00 00:00:00'),
(00000000022, 'Keejay', 'Evangelista', 'kenken', '2019-01-14 19:38:38', '2019-01-14 19:38:38', '0000-00-00 00:00:00'),
(00000000023, 'Markiss', 'Venzon', 'makmak', '2019-01-14 19:39:47', '2019-01-14 19:39:47', '0000-00-00 00:00:00'),
(00000000024, 'Marc', 'Montilla', 'marcmontilla', '2019-01-14 19:40:06', '2019-01-14 19:40:06', '0000-00-00 00:00:00'),
(00000000025, 'Eirielle', 'Martinez', 'ejmatinez', '2019-01-14 19:40:27', '2019-01-14 19:40:27', '0000-00-00 00:00:00'),
(00000000026, 'Pea', 'Vargas', 'peydaph', '2019-01-14 19:40:39', '2019-01-14 19:40:39', '0000-00-00 00:00:00'),
(00000000027, 'Israel', 'Carino', 'carinobrutal', '2019-01-14 19:41:08', '2019-01-14 19:41:08', '0000-00-00 00:00:00'),
(00000000042, 'Mina', 'Myou', 'minari', '2019-01-17 00:23:55', '2019-01-17 00:23:55', '0000-00-00 00:00:00'),
(00000000044, 'Sakura', 'Miyawaki', 'sakurachan', '2019-01-17 23:17:35', '2019-01-17 23:17:35', '0000-00-00 00:00:00'),
(00000000045, 'Nayeon', 'Im', 'nabongs', '2019-01-22 21:31:00', '2019-01-22 21:31:00', '0000-00-00 00:00:00');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
