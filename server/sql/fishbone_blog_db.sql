-- MySQL dump 10.13  Distrib 5.7.22-ndb-7.6.6, for macos10.13 (x86_64)
--
-- Host: localhost    Database: fishbone_blog_db
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
  `likes` int(11) DEFAULT NULL,
  `tags` varchar(255) NOT NULL DEFAULT '',
  `content` longtext NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `createTime` datetime NOT NULL,
  `publishTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ARTICLE`
--

LOCK TABLES `ARTICLE` WRITE;
/*!40000 ALTER TABLE `ARTICLE` DISABLE KEYS */;
INSERT INTO `ARTICLE` VALUES (5,3,NULL,'LINUX文章',NULL,'标签1','LINUX文章LINUX文章LINUX文章LINUX文章LINUX文章LINUX文章',1,'2018-09-03 20:47:31','2018-09-03 20:47:31'),(6,2,NULL,'JAVA文章',NULL,'标签2','java文章内容',1,'2018-09-03 20:48:40','2018-09-03 20:48:40'),(7,1,NULL,'NODEJS文章',NULL,'标签1,标签2','NODEJS文章NODEJS文章NODEJS文章NODEJS文章NODEJS文章NODEJS文章',1,'2018-09-03 20:49:09','2018-09-09 22:23:42'),(8,2,NULL,'VUE',NULL,'标签5','计算属性\n![](http://ask.qcloudimg.com/http-save/yehe-1148782/qfwcb4xrqw.png)\n# 这里是标题\n<h2 id=“title2”>这里是标题2</h2>\n> 1. 在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。\n> 1. 所以，对于任何复杂逻辑，你都应当使用计算属性。\n**加粗操作**\n> 这里是应用\n\n\n\n\n\n\n\n',1,'2018-09-09 21:45:58','2018-09-09 21:52:20');
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TAGS`
--

LOCK TABLES `TAGS` WRITE;
/*!40000 ALTER TABLE `TAGS` DISABLE KEYS */;
INSERT INTO `TAGS` VALUES (37,'标签1','#b300e6'),(38,'标签2','#2d8cf0'),(39,'标签3','#00d6e6'),(40,'标签4','#e6ba00'),(41,'标签5','#ff9900');
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
INSERT INTO `TYPES` VALUES (2,'Java'),(3,'Linux'),(1,'NODEJS');
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

-- Dump completed on 2018-09-09 23:04:06
