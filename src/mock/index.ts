// src/mock/index.js
import Mock from 'mockjs'  //导入mockjs

Mock.setup({
  // 响应时间
  timeout: "300 - 600"
})

Mock.mock('/jan-admin/getList', 'get', {
  status: 200, //请求成功状态码
  dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //模拟的请
})
