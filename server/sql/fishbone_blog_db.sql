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
  `likes` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL DEFAULT '',
  `intro` varchar(255) NOT NULL,
  `uniqueMark` varchar(50) NOT NULL,
  `thumbUrl` varchar(255) DEFAULT NULL,
  `tags` varchar(255) NOT NULL DEFAULT '',
  `content` longtext NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `isRecommend` tinyint(1) NOT NULL,
  `createTime` datetime NOT NULL,
  `publishTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ARTICLE`
--

LOCK TABLES `ARTICLE` WRITE;
/*!40000 ALTER TABLE `ARTICLE` DISABLE KEYS */;
INSERT INTO `ARTICLE` VALUES (17,6,0,0,'h5','','545865cca3f38f9a1102146a632cf3f6','','HTML5,CSS3','h5',1,1,'2018-09-16 22:35:20','2018-09-18 00:16:36'),(18,13,333,33,'移动端适配问题汇总','','45365f705fce873bb383aa1100489b61','','HTML5','<img id=\"slt\" src=\"http://img.zcool.cn/community/01155b5657f9086ac7251c941289cb.png\" width=\"723\" />\n# 移动端适配问题汇总\n\n修改\n```lang=javascript\nsubmit() {\n	if (this.comment.nickname === \'\') {\n					this.$toasted.error(\'昵称不能为空！\')\n					return\n	}\n	if (this.comment.email === \'\') {\n					this.$toasted.error(\'邮箱不能为空！\')\n					return\n	}\n	if (!/^[\\w.\\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\\.)+[a-z]{2,3}$/.test(this.comment.email)) {\n					this.$toasted.error(\'邮箱格式不正确！\')\n					return\n	}\n	if (this.comment.comment === \'\') {\n					this.$toasted.error(\'评论不能为空不能为空！\')\n					return\n	}\n	if (this.comment.comment.length > 1000) {\n					this.$toasted.error(\'评论不能大于1000字符！\')\n					return\n	}\n	const { quoter, blockquote, articleId, articleTitle, comment, nickname, email, personalSite, isPass } = this.comment;\n	axios.post(\'/api/v1/comments\', { quoter, blockquote, articleId, articleTitle, comment, nickname, email, personalSite, isPass })\n	.then((res) => {\n					this.$toasted.success(\'评论成功，待管理员审核以后才可显示评论！\')\n	})\n	}\n```\n\n```lang=css\n.footer{\n				text-align: right;\n				padding: 5px 0;\n				font-size: 14px;\n				color: #8f969c;\n				.quote{\n								color: #007fff;\n				}\n}\n```\n\n## 移动端适配问题汇总\n\n### 移动端适配问题汇总',1,1,'2018-09-19 00:13:47','2018-10-17 23:44:11');
/*!40000 ALTER TABLE `ARTICLE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `COMMENTS`
--

DROP TABLE IF EXISTS `COMMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `COMMENTS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` int(11) NOT NULL,
  `articleTitle` varchar(255) CHARACTER SET utf8 NOT NULL,
  `comment` longtext CHARACTER SET utf8 NOT NULL,
  `quoter` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `blockquote` longtext CHARACTER SET utf8,
  `nickname` varchar(45) CHARACTER SET utf8 NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 NOT NULL,
  `personalSite` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `createTime` datetime NOT NULL,
  `isPass` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `COMMENTS`
--

LOCK TABLES `COMMENTS` WRITE;
/*!40000 ALTER TABLE `COMMENTS` DISABLE KEYS */;
INSERT INTO `COMMENTS` VALUES (3,18,'移动端适配问题汇总','fff','','','mini','ff','ff','2018-10-16 19:38:14',1),(4,18,'移动端适配问题汇总','4234234','','','mike','42342','3423','2018-10-16 19:52:29',1),(5,18,'移动端适配问题汇总','123','','','tom','12312@qq.com','123','2018-10-16 20:01:49',1),(6,18,'移动端适配问题汇总','123','','','jack','12312@qq.com','123','2018-10-16 20:01:53',1),(7,18,'移动端适配问题汇总','```\nconsole.log(\"ok\")\n```','','','ak47','ddd@qq.com','','2018-10-17 22:03:35',1),(8,18,'移动端适配问题汇总','这里是ttttt的留言','jack','123','ttttt','ttt@qq.com','','2018-10-17 22:06:09',1),(9,18,'移动端适配问题汇总','这里是yzf的留言\n```\nfunction fn(){\n	console.log(\'js is easy to learn\')\n}\n```','mike','4234234','yzf','yzf@msn.com','','2018-10-17 22:19:46',1),(10,18,'移动端适配问题汇总','	这里是uuuu的评论\n	```lang=javascript\n	function fn(){\n		console.log(\"hello world\")\n	}\n	```','','','uuuu','uuu@qq.com','','2018-10-17 22:35:34',0),(11,18,'移动端适配问题汇总','ccccc','','','ccc','cc@qq.com','','2018-10-17 22:37:23',0),(12,17,'h5','这是pi的评论','','','pi','pi@pi.com','','2018-10-17 22:38:13',0);
/*!40000 ALTER TABLE `COMMENTS` ENABLE KEYS */;
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
-- Table structure for table `REPLIES`
--

DROP TABLE IF EXISTS `REPLIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REPLIES` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `replyId` int(11) NOT NULL,
  `replyname` varchar(45) CHARACTER SET utf8 NOT NULL,
  `replyComment` varchar(500) CHARACTER SET utf8 NOT NULL,
  `createTime` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REPLIES`
--

LOCK TABLES `REPLIES` WRITE;
/*!40000 ALTER TABLE `REPLIES` DISABLE KEYS */;
INSERT INTO `REPLIES` VALUES (2,8,'FISHBONE','评论id为18的回复','2018-10-17 22:17:46'),(3,9,'FISHBONE','评论id为9的回复','2018-10-17 22:20:42');
/*!40000 ALTER TABLE `REPLIES` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TAGS`
--

LOCK TABLES `TAGS` WRITE;
/*!40000 ALTER TABLE `TAGS` DISABLE KEYS */;
INSERT INTO `TAGS` VALUES (46,'HTML5','#2d8cf0'),(47,'JAVASCRIPT','#b300e6'),(48,'CSS3','#b300e6'),(49,'NODEJS','#ff9900'),(50,'LINUX','#ed4014'),(51,'chi','#ed4014'),(52,'cheng','#ff9900'),(53,'huang','#e6ba00'),(54,'lv','#19be6b'),(55,'qing','#00d6e6'),(56,'lan','#2d8cf0'),(57,'zhi','#b300e6');
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TYPES`
--

LOCK TABLES `TYPES` WRITE;
/*!40000 ALTER TABLE `TYPES` DISABLE KEYS */;
INSERT INTO `TYPES` VALUES (13,'前端'),(12,'后端'),(11,'算法'),(10,'计算机基础');
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

-- Dump completed on 2018-10-18 19:59:18
