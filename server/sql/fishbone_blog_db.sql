-- MySQL dump 10.13  Distrib 5.7.22-ndb-7.6.6, for macos10.13 (x86_64)
--
-- Host: localhost    Database: fishbone_db
-- ------------------------------------------------------
-- Server version	5.7.22-ndb-7.6.6-cluster-gpl

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ABOUT`
--

DROP TABLE IF EXISTS `ABOUT`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ABOUT` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ABOUT`
--

LOCK TABLES `ABOUT` WRITE;
/*!40000 ALTER TABLE `ABOUT` DISABLE KEYS */;
INSERT INTO `ABOUT` VALUES (1,'这里是自我介绍-修改');
/*!40000 ALTER TABLE `ABOUT` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ARTICLE`
--

DROP TABLE IF EXISTS `ARTICLE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ARTICLE` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `like` int(11) DEFAULT NULL,
  `tags` varchar(255) NOT NULL DEFAULT '',
  `content` longtext NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `createTime` datetime NOT NULL,
  `publishTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ARTICLE`
--

LOCK TABLES `ARTICLE` WRITE;
/*!40000 ALTER TABLE `ARTICLE` DISABLE KEYS */;
INSERT INTO `ARTICLE` VALUES (1,NULL,NULL,'123',NULL,'{\"name\":\"test\",\"color\":\"#ed4014\"}','123',1,'2018-08-18 17:12:50','2018-08-18 17:12:50'),(2,NULL,NULL,'123',NULL,'{\"name\":\"1\",\"color\":\"#ed4014\"}','123123',1,'2018-08-27 22:25:05','2018-08-27 22:25:05'),(3,NULL,NULL,'中文',NULL,'{\"name\":\"黄色标签\",\"color\":\"#e6ba00\"},{\"name\":\"dsdgfdg\",\"color\":\"#ed4014\"},{\"name\":\"ddddd\",\"color\":\"#ed4014\"},{\"name\":\"dfgd\",\"color\":\"#b300e6\"}','文章一',1,'2018-08-28 22:47:06','2018-08-29 00:15:08'),(4,NULL,NULL,'dsfsdf',NULL,'{\"name\":\"sdfsdf\",\"color\":\"#ed4014\"}','sdfsdsdfsdf',1,'2018-08-29 00:16:01','2018-08-29 00:16:01');
/*!40000 ALTER TABLE `ARTICLE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `READING`
--

DROP TABLE IF EXISTS `READING`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `READING` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `author` varchar(255) NOT NULL DEFAULT '',
  `score` float NOT NULL,
  `experience` varchar(600) DEFAULT '',
  `progress` float DEFAULT NULL,
  `startTime` datetime DEFAULT NULL,
  `finishTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `READING`
--

LOCK TABLES `READING` WRITE;
/*!40000 ALTER TABLE `READING` DISABLE KEYS */;
INSERT INTO `READING` VALUES (1,'百年孤独','马尔克斯加西亚[智利]',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `READING` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TAGS`
--

DROP TABLE IF EXISTS `TAGS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TAGS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL DEFAULT '',
  `color` varchar(45) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TAGS`
--

LOCK TABLES `TAGS` WRITE;
/*!40000 ALTER TABLE `TAGS` DISABLE KEYS */;
INSERT INTO `TAGS` VALUES (28,'ddddd','#ed4014'),(29,'黄色标签','#e6ba00'),(30,'dsdgfdg','#ed4014'),(34,'sdfsdf','#ed4014'),(35,'黄色','#ed4014'),(36,'绿色','#ed4014');
/*!40000 ALTER TABLE `TAGS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TYPES`
--

DROP TABLE IF EXISTS `TYPES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TYPES` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TYPES`
--

LOCK TABLES `TYPES` WRITE;
/*!40000 ALTER TABLE `TYPES` DISABLE KEYS */;
INSERT INTO `TYPES` VALUES (2,'JAVA'),(3,'LINUX'),(1,'NodeJS');
/*!40000 ALTER TABLE `TYPES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USER` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `avatar` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'admin','e5d2a815230449badccf00bc67436696',NULL);
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-31 23:58:10
