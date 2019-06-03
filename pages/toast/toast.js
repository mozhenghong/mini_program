// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toast() {
    wx.showToast({
      title: '弹窗哈哈哈哈',
      image: './avator.png',
      // icon: 'success',
      duration: 2000
    })
  },
  modal() {
    wx.showModal({
      title: '提示',
      content: '模态弹窗略略略',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  sheet() {
    wx.showActionSheet({
      itemList: ['啦啦啦', '哼', '再见'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showNavigationBarLoading({
      success(res) {
        console.log(1)
      },
      fail(res) {
        console.log(2)
      }
    })
    setTimeout(function(){
      wx.hideNavigationBarLoading({
        success(res) {
          console.log(3)
        },
        fail(res) {
          console.log(4)
        }
      })
    },3000)
    wx.setNavigationBarTitle({
      title: '当前页面'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ddd',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})