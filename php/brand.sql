/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yohoobuy

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-14 08:50:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `brand`
-- ----------------------------
DROP TABLE IF EXISTS `brand`;
CREATE TABLE `brand` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brand
-- ----------------------------
INSERT INTO `brand` VALUES ('1', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/23/10/019fd25794d5c567a2f377eee87044b4c4.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('2', 'https://img10.static.yhbimg.com/yhb-img01/2020/07/02/18/0182f674a8dae717f1fde05a1633dc85bf.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('3', 'https://img11.static.yhbimg.com/yhb-img01/2019/11/20/14/01142c35cd3c415c6dd2d443ddb7c36f22.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('4', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/16/10/01619a091bf36f6afeb001ce13cb7713a1.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('5', 'https://img10.static.yhbimg.com/yhb-img01/2020/07/09/18/0157bcfefcaaf62beea22eea266a039821.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('6', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/23/10/01b000e04fd482b828fcf84a14459d4791.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('7', 'https://img11.static.yhbimg.com/yhb-img01/2020/03/03/14/013b7247a2afdf08af2f388d861569fba8.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('8', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/23/10/01bdd6408033ea7a6c8c2c780d11c454ec.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('9', 'https://img11.static.yhbimg.com/yhb-img01/2019/10/23/13/01479c16a1ce7a8bb77cdf581054ad2855.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('10', 'https://img11.static.yhbimg.com/yhb-img01/2020/03/31/14/01d5e422f98fc155916f04b6e00b721d23.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('11', 'https://img10.static.yhbimg.com/yhb-img01/2020/07/28/11/01fc4a27006b7f64e94620787aa74a5a07.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('12', 'https://img10.static.yhbimg.com/yhb-img01/2020/04/29/11/019a2e8718103c4b1bcf97d4bad5f2a1d1.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('13', 'https://img11.static.yhbimg.com/yhb-img01/2020/07/23/10/0197b17f67a2d130a01382fbab1ff95722.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('14', 'https://img10.static.yhbimg.com/yhb-img01/2020/04/29/11/0181fbaf4e74b9a8bb6b20bbd4f9f0c661.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('15', 'https://img10.static.yhbimg.com/yhb-img01/2020/04/29/11/012d2c2119a4a7dac2458a89f219cab498.jpg?imageView2/2/w/185/h/86/q/90');
INSERT INTO `brand` VALUES ('16', 'https://img10.static.yhbimg.com/yhb-img01/2020/11/19/09/01807444b970eeee7283b5deda55480526.jpg?imageView2/2/w/185/h/86/q/90');
