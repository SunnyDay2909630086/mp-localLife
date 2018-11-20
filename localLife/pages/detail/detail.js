// pages/detail/detail.js
import fetch from '../../utils/fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    //获取该id对应的商品
    this.getDetailData(options.id)
  },
  getDetailData(id){
    fetch(`shops/${id}`).then(res=>{
      this.setData({
        shop:res.data
      })
      // console.log(res.data)
    })
  },
  previewImage(e){
    console.log(e)
    wx.previewImage({
      current: 'e.target.dataset.current', // 当前显示图片的http链接
      urls: this.data.shop.images // 需要预览的图片http链接列表
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})