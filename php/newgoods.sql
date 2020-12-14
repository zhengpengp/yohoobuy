/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : yohoobuy

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-12-14 08:51:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `newgoods`
-- ----------------------------
DROP TABLE IF EXISTS `newgoods`;
CREATE TABLE `newgoods` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `price` float(7,2) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of newgoods
-- ----------------------------
INSERT INTO `newgoods` VALUES ('1', 'https://img10.static.yhbimg.com/goodsimg/2020/12/02/10/016abb49cb1a6045b2ebd6f85251db56a5.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '李宁 运动时尚米奇家族短袖文化衫', '119.00');
INSERT INTO `newgoods` VALUES ('2', 'https://img10.static.yhbimg.com/goodsimg/2018/03/20/15/01806454e398f868193679deaaed60ff89.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'EVISU 字母印花T恤', '999.00');
INSERT INTO `newgoods` VALUES ('3', 'https://img10.static.yhbimg.com/goodsimg/2020/05/29/16/0156ba9d26858d0eb0c6c56df4900801ed.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Maison Margiela Heavy Cotton Jersey', '1919.00');
INSERT INTO `newgoods` VALUES ('4', 'https://img11.static.yhbimg.com/goodsimg/2020/05/22/18/0105a46ffbc6063553e47a540ad5a9e9d6.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'GCDS MAXI POCKET COACH MX MIX SS20M040002', '2259.00');
INSERT INTO `newgoods` VALUES ('5', 'https://img10.static.yhbimg.com/goodsimg/2020/12/02/10/017f4a1e0f1ff947bf4cd2b0065f309656.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '中国李宁 BAD FIVE潮酷男子一体织小黑鞋高帮篮球休闲鞋', '189.00');
INSERT INTO `newgoods` VALUES ('6', 'https://img12.static.yhbimg.com/goodsimg/2019/05/29/17/02b6d5d7390c496b1000f93fd11a4ba8ac.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Converse x JWA Grid Chuck 70 Hi 164841C', '899.00');
INSERT INTO `newgoods` VALUES ('7', 'https://img11.static.yhbimg.com/goodsimg/2020/12/02/09/016dd1f7b0bfd76c611a29bfe2827a7641.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '中国李宁 2019纽约时装周系列男子宽松套头连帽卫衣', '539.00');
INSERT INTO `newgoods` VALUES ('8', 'https://img11.static.yhbimg.com/goodsimg/2020/11/20/13/018ca2b7ca72daea6412ee89ae039a9ca2.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'THETHING 多拼接可拆卸包圆领卫衣', '279.00');
INSERT INTO `newgoods` VALUES ('9', 'https://img13.static.yhbimg.com/goodsimg/2019/12/30/12/0250e2b1f77f79f2e20b3c0aee86e8b8d4.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'SMG 插袋休闲圆领卫衣', '219.00');
INSERT INTO `newgoods` VALUES ('10', 'https://img12.static.yhbimg.com/goodsimg/2020/10/27/14/027152f850a388a90665ce2d9218c71ea2.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'CHAMPION CEM604 SMALL SCRIPT HOODED FULL ZIPSWEATSHIRT  Lt.GRAY', '999.00');
INSERT INTO `newgoods` VALUES ('11', 'https://img11.static.yhbimg.com/goodsimg/2020/06/23/18/01b6fbcac9da3ce5860637c71df7f7278d.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '字母印花休闲卫衣', '559.00');
INSERT INTO `newgoods` VALUES ('12', 'https://img11.static.yhbimg.com/goodsimg/2020/12/02/09/01a2553b4b3d2c68ed1768f28e9f192215.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '中国李宁 巴黎时装周中国李宁系列男子九分休闲裤', '359.00');
INSERT INTO `newgoods` VALUES ('13', 'https://img11.static.yhbimg.com/goodsimg/2020/11/20/13/018af21f69249756670ce32b83c8791b9e.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'THETHING 撞色藕节九分裤', '159.00');
INSERT INTO `newgoods` VALUES ('14', 'https://img12.static.yhbimg.com/goodsimg/2020/05/29/16/027ee8890b50d27d8458001bf9c83f4b8c.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Maison Margiela Exclusive Pinstripe Cloth+12 Oz Black', '3419.00');
INSERT INTO `newgoods` VALUES ('15', 'https://img11.static.yhbimg.com/goodsimg/2018/12/11/17/014ccdba0ee877e482700115bd1d5f2f43.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'SMG 可拆卸口袋休闲裤', '399.00');
INSERT INTO `newgoods` VALUES ('16', 'https://img10.static.yhbimg.com/goodsimg/2020/05/29/16/018a4a75de69041dcef4b1256c48c8e7f6.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Maison Margiela S30DL0437 SHIRTS Black', '2459.00');
INSERT INTO `newgoods` VALUES ('17', 'https://img13.static.yhbimg.com/goodsimg/2020/12/02/09/02e0a2bdd5db95092880448e0cc4d60a0f.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '中国李宁 纽约时装周长袖衬衫', '298.00');
INSERT INTO `newgoods` VALUES ('18', 'https://img10.static.yhbimg.com/goodsimg/2020/05/22/13/0176801d4d63b110d30010226744004c43.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Casablanca MS20-SH-003 STRIPED LINEN SHIRT', '1129.00');
INSERT INTO `newgoods` VALUES ('19', 'https://img13.static.yhbimg.com/goodsimg/2020/12/02/10/026f78f73b2cfd124106441b17cd73fb8f.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '李宁 复古系带短裤', '139.00');
INSERT INTO `newgoods` VALUES ('20', 'https://img11.static.yhbimg.com/goodsimg/2020/05/22/13/0176587e3508d5c8c8a7cc9903dd94c8b0.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Casablanca MS20-TR-009 SILK SHORTS', '1069.00');
INSERT INTO `newgoods` VALUES ('21', 'https://img10.static.yhbimg.com/goodsimg/2020/10/27/14/0194dd1e6db5f05ca230286ae5c8d13829.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'songforthemute 201_MST050_LIVISUN ELASTICATED SHORTS', '1599.00');
INSERT INTO `newgoods` VALUES ('22', 'https://img10.static.yhbimg.com/goodsimg/2020/05/22/12/01c34ae76c4cbce51a5815a0751f284182.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'GCDS PEDDLER CARGO MX MIX', '1599.00');
INSERT INTO `newgoods` VALUES ('23', 'https://img12.static.yhbimg.com/goodsimg/2020/12/02/09/02fff1e750f0b547fdfb690ea48f262d52.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', '中国李宁 巴黎时装周中国李宁系列男女同款宽松夹克', '549.00');
INSERT INTO `newgoods` VALUES ('24', 'https://img10.static.yhbimg.com/goodsimg/2019/11/09/21/017072846d5d056690d3dd2a26c7fc9e4b.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'CHAMPION Nylon Warm Up Jacket', '439.00');
INSERT INTO `newgoods` VALUES ('25', 'https://img12.static.yhbimg.com/goodsimg/2020/04/19/15/0263a1af558c4b357794668f7ea2dc8535.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'STAYREAL 摇滚万岁长版连帽外套', '559.00');
INSERT INTO `newgoods` VALUES ('26', 'https://img12.static.yhbimg.com/goodsimg/2019/11/06/16/02ababb78334cc5014fb3d76e225522e66.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'SMG 【林俊杰同款】拼接撞色夹克', '399.00');
INSERT INTO `newgoods` VALUES ('27', 'https://img12.static.yhbimg.com/goodsimg/2020/05/29/16/027883f6cdca46dbe7a68800a3bcc47bac.jpg?imageMogr2/thumbnail/280x373/background/d2hpdGU=/position/center/quality/90', 'Maison Margiela Coat Black', '185.00');
