// pages/swiper/swiper.js
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    modul:[
      { button: "呵呵", 
      content:"拉拉链款发热回复日为缓解热福接对象底单号活动会会儿电话婚期奇偶等级低阶急哦我饿哦"},
      {
        button: "呵呵",
        content: "拉拉链款发热回复日为缓解热福接对象底单号活动会会儿电话婚期奇偶等级低阶急哦我饿哦"
      },
    ]
  },
  call(){
    wx.makePhoneCall({
      phoneNumber: '1340000' // 电话号码
    })
  }
})