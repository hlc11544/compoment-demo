/*
 * @FilePath: index.js
 * @Author: hualc
 * @Date: 2023-06-01 11:52:44
 * @LastEditors: hualc
 * @LastEditTime: 2023-06-01 11:52:52
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 * @Descripttion:
 */
// 配置路径

const getBasePath = () => {
	return '我是测试js库文件';
};

let common = {};

common.install = function(Vue, options) {
	Vue.prototype.$getBasePath = getBasePath;
};

export default common;
