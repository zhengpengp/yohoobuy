/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yohoobuy

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-14 08:50:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner-top`
-- ----------------------------
DROP TABLE IF EXISTS `banner-top`;
CREATE TABLE `banner-top` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner-top
-- ----------------------------
INSERT INTO `banner-top` VALUES ('1', 'https://img11.static.yhbimg.com/yhb-img01/2020/11/12/09/015b1adc66d57b3749cd44b692ee5a701f.jpg?imageView2/2/w/1125/h/420');
INSERT INTO `banner-top` VALUES ('2', 'https://img10.static.yhbimg.com/yhb-img01/2020/10/09/09/01ae3219ce90218a4811b5571ed685c862.jpg?imageView2/2/w/1125/h/420');
INSERT INTO `banner-top` VALUES ('3', 'https://img11.static.yhbimg.com/yhb-img01/2020/10/09/09/01ad0219c3ade5829d225eb49d396fab6f.jpg?imageView2/2/w/1125/h/420');
INSERT INTO `banner-top` VALUES ('4', 'https://img11.static.yhbimg.com/yhb-img01/2020/08/13/15/010ffcfcabefff7a8cfda21ca090cb1cb2.jpg?imageView2/2/w/1125/h/420');
