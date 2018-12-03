-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: db
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dbo.tPermiso`
--

DROP TABLE IF EXISTS `dbo.tPermiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbo.tPermiso` (
  `rolName` varchar(13) DEFAULT NULL,
  `pantalla` varchar(8) DEFAULT NULL,
  `acceso` int(11) DEFAULT NULL,
  `modificacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbo.tPermiso`
--

LOCK TABLES `dbo.tPermiso` WRITE;
/*!40000 ALTER TABLE `dbo.tPermiso` DISABLE KEYS */;
INSERT INTO `dbo.tPermiso` VALUES ('administrador','LIBROS',1,1),('administrador','LOGIN',1,1),('administrador','MATERIAS',1,1),('invitado','LIBROS',0,0),('invitado','LOGIN',1,1),('invitado','MATERIAS',0,0),('usuario','LIBROS',1,0),('usuario','LOGIN',1,1),('usuario','MATERIAS',1,0);
/*!40000 ALTER TABLE `dbo.tPermiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbo.tPiezas`
--

DROP TABLE IF EXISTS `dbo.tPiezas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbo.tPiezas` (
  `ID` int(11) DEFAULT NULL,
  `NOMBRE` varchar(49) DEFAULT NULL,
  `FABRICANTE` varchar(7) DEFAULT NULL,
  `ID_TIPO` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbo.tPiezas`
--

LOCK TABLES `dbo.tPiezas` WRITE;
/*!40000 ALTER TABLE `dbo.tPiezas` DISABLE KEYS */;
INSERT INTO `dbo.tPiezas` VALUES (1,'PARAGOLPES DELANTERO NEGRO-LISO A IMPRIMAR','MAZDA','A'),(2,'PARAGOLPES TRASERO-IMPRIMADO','MAZDA','A'),(3,'REJILLA NEGRA','MAZDA','A'),(4,'ALETA DELANTERA DCH CON AUJERO PARA PILOTO CX3 16','MAZDA','A'),(5,'ALETA DELANTERA IZQ CON AUJERO PARA PILOTO CX3 16','MAZDA','A'),(6,'Bombillas luz delantera','RENAULT','C'),(7,'Bombillas señalización delantera','RENAULT','C'),(8,'Bombillas luz trasera','RENAULT','C'),(9,'Bombillas señalización trasera','RENAULT','C'),(10,'Estuches de bombillas','RENAULT','C'),(11,'Iluminacion LED','RENAULT','C'),(12,'Bombillas interior','RENAULT','C'),(13,'Bombillas Xenon','RENAULT','C'),(14,'Juntas y otras piezas del motor','FORD','B'),(15,'Alimentación','FORD','B'),(16,'Kits de distribución','FORD','B'),(17,'Correas','FORD','B'),(18,'Poleas','FORD','B'),(19,'Kits','FORD','B'),(20,'Válvulas EGR','FORD','B'),(21,'Herramienta específica','FORD','B'),(22,'Turbocompresores','FORD','B'),(23,'Sensores electrónicos y medidores de flujo','FORD','B'),(24,'Cable de acelerador y starter','FORD','B');
/*!40000 ALTER TABLE `dbo.tPiezas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbo.tRol`
--

DROP TABLE IF EXISTS `dbo.tRol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbo.tRol` (
  `rolName` varchar(13) DEFAULT NULL,
  `rolDes` varchar(13) DEFAULT NULL,
  `admin` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbo.tRol`
--

LOCK TABLES `dbo.tRol` WRITE;
/*!40000 ALTER TABLE `dbo.tRol` DISABLE KEYS */;
INSERT INTO `dbo.tRol` VALUES ('administrador','administrador',1),('invitado','invitado',0),('usuario','usuario',0);
/*!40000 ALTER TABLE `dbo.tRol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbo.tTipoPieza`
--

DROP TABLE IF EXISTS `dbo.tTipoPieza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbo.tTipoPieza` (
  `ID_TIPO` varchar(1) DEFAULT NULL,
  `NOMBRE` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbo.tTipoPieza`
--

LOCK TABLES `dbo.tTipoPieza` WRITE;
/*!40000 ALTER TABLE `dbo.tTipoPieza` DISABLE KEYS */;
INSERT INTO `dbo.tTipoPieza` VALUES ('A','Chapa'),('B','Motor'),('C','Iluminacion'),('D','Sensores'),('E','Cristales'),('F','Pintura'),('G','Otros');
/*!40000 ALTER TABLE `dbo.tTipoPieza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dbo.tUsuario`
--

DROP TABLE IF EXISTS `dbo.tUsuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dbo.tUsuario` (
  `nombre` varchar(5) DEFAULT NULL,
  `password` varchar(5) DEFAULT NULL,
  `rolName` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbo.tUsuario`
--

LOCK TABLES `dbo.tUsuario` WRITE;
/*!40000 ALTER TABLE `dbo.tUsuario` DISABLE KEYS */;
INSERT INTO `dbo.tUsuario` VALUES ('admin','admin','administrador'),('inv','inv','invitado'),('user','user','usuario');
/*!40000 ALTER TABLE `dbo.tUsuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-08 22:53:51
