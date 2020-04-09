import Mock from 'mockjs'

// 获取产品推荐位-电视
Mock.mock('/api/watchtv', {
  "status": 0,
  "data": {
    "list": [
      {
        "pic": "/imgs/nav-img/nav-3-1.jpg",
        "name": "小米壁画电视 65英寸",
        "price": "6999"
      },
      {
        "pic": "/imgs/nav-img/nav-3-2.jpg",
        "name": "小米全面屏电视E65A",
        "price": "6999"
      },
      {
        "pic": "/imgs/nav-img/nav-3-3.png",
        "name": "小米电视4A 32英寸",
        "price": "6999"
      },
      {
        "pic": "/imgs/nav-img/nav-3-4.jpg",
        "name": "小米电视4A 55英寸",
        "price": "6999"
      },
      {
        "pic": "/imgs/nav-img/nav-3-5.jpg",
        "name": "小米电视4A 65英寸",
        "price": "6999"
      },
      {
        "pic": "/imgs/nav-img/nav-3-6.png",
        "name": "查看全部",
        "price": "查看全部"
      }
    ]
  }
})