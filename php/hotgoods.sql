/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yohoobuy

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-14 08:50:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `hotgoods`
-- ----------------------------
DROP TABLE IF EXISTS `hotgoods`;
CREATE TABLE `hotgoods` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotgoods
-- ----------------------------
INSERT INTO `hotgoods` VALUES ('1', 'https://img10.static.yhbimg.com/yhb-img01/2020/09/17/15/013ec6ba6c4f1859b7a35b94db32288d89.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('2', 'https://img11.static.yhbimg.com/yhb-img01/2020/10/09/14/01cc173da1cd66e96aa9c49d54384517f4.jpg?imageView2/2/w/378/h/248');
INSERT INTO `hotgoods` VALUES ('3', 'https://img10.static.yhbimg.com/yhb-img01/2020/09/17/15/0187e6bff0589d47be8927297861b5b06e.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('4', 'https://img11.static.yhbimg.com/yhb-img01/2020/09/17/15/01ba129add4fce6ed7d55b2ae9de660891.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('5', 'https://img11.static.yhbimg.com/yhb-img01/2020/11/19/09/01f8c70f1e0134c84c7a729f4a818c6628.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('6', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/23/10/01916a3885be241dee330f5e813b15a421.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('7', 'https://img11.static.yhbimg.com/yhb-img01/2020/11/19/09/0143ffc6e9b063cc41d46d906baa1c4ab3.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('8', 'https://img10.static.yhbimg.com/yhb-img01/2020/07/23/10/012eaa1ceb8772d28e214330dfb5e041b0.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('9', 'https://img10.static.yhbimg.com/yhb-img01/2020/06/01/14/01f50572bf142d5f4b29d728f353a95b76.jpg?imageView2/2/w/185/h/248');
INSERT INTO `hotgoods` VALUES ('10', 'https://img10.static.yhbimg.com/yhb-img01/2020/08/13/15/0169431db00fc5d117778b977d136e4dde.jpg?imageView2/2/w/378/h/248');
