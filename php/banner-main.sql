/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yohoobuy

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-14 08:50:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner-main`
-- ----------------------------
DROP TABLE IF EXISTS `banner-main`;
CREATE TABLE `banner-main` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner-main
-- ----------------------------
INSERT INTO `banner-main` VALUES ('1', 'https://img10.static.yhbimg.com/yhb-img01/2020/07/07/10/01ae3e7bccba709ad3e06c4cfc7ab7ef5f.jpg?imageView2/2/w/378/h/175');
INSERT INTO `banner-main` VALUES ('2', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/23/10/01a9a9b84e46555c5344d1503dad60ab07.jpg?imageView2/2/w/378/h/175');
INSERT INTO `banner-main` VALUES ('3', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/02/18/019716657763c7d01a45f6208ca52329a7.jpg?imageView2/2/w/378/h/175');
INSERT INTO `banner-main` VALUES ('4', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/02/18/01c38b68bd717ee7cd3448ba909c45c48e.jpg?imageView2/2/w/378/h/175');
INSERT INTO `banner-main` VALUES ('5', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/02/18/01848a3e86061e9a1fa45ca1387ff639a9.jpg?imageView2/2/w/378/h/175');
INSERT INTO `banner-main` VALUES ('6', 'https://img10.static.yhbimg.com/yhb-img01/2020/07/23/10/01f79a88e1226204d97d92a81676ca3b6a.jpg?imageView2/2/w/378/h/175');
