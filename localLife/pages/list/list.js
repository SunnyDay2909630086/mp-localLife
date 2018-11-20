// pages/list/list.js
import fetch from '../../utils/fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:-1,
    pageIndex:0, //页码
    pageSize:10, //页容量
    shops: [],
    hasMore: true,//代表是否还有更多数据
    isLoading:false,
    keyword:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取到name,并且设置给导航栏标题
    // console.log(options)
    wx.setNavigationBarTitle({
      title: options.name
    })
    this.data.id=options.id
    //2.获取第一页的数据
    this.loadMoreData()
  },

  searchShops(e){
    // console.log("父页面",e.detail)
    this.data.keyword=e.detail
    this.data.pageIndex=0
    this.setData({
      shops:[],
      isloading:false,
      hasMore:true
    },()=>{
      this.loadMoreData()
    })
  },
   /**
   * 加载第一页，或是加载更多的时候，都用它
   */
  loadMoreData(){
    if(!this.data.hasMore) return

    //如果正在加载中就直接返回
    if(this.data.isLoading) return

    //要进行数据加载
    this.data.isLoading=true

    this.data.pageIndex++

    let url=null
    if(this.data.keyword){
      url = `categories/${this.data.id}/shops?_page=${this.data.pageIndex}&_limit=${this.data.pageSize}&q=${this.data.keyword}`
    }else{
      url = `categories/${this.data.id}/shops?_page=${this.data.pageIndex}&_limit=${this.data.pageSize}`
    }
    

    fetch(url).then(res=>{
      // console.log(res)

      //停止下拉刷新
      wx.stopPullDownRefresh()
      //获取总条数
      const totalCount=parseInt(res.header["X-Total-Count"])
      console.log(totalCount)
      this.setData({
        shops:this.data.shops.concat(res.data),
        hasMore: this.data.shops.length < totalCount //判断是否还有更多数据
      })
      // console.log(this.data.shops.length)

      this.data.isLoading = false
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
    // console.log("下拉刷新")
    this.data.pageIndex=0
    this.setData({
      hasMore:true,
      shops:[]
    }, () => { //设置值完毕之后的回调函数
      this.loadMoreData()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("上拉加载更多")

    this.loadMoreData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})