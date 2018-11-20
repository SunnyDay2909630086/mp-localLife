const BASE_URL ="https://locally.uieee.com/"

export default (url,data)=>{
  //返回一个promise对象
  return new Promise((reslove,reject)=>{
    wx.request({
      url: `${BASE_URL}${url}`, 
      success: function (res) {
        reslove(res)
      },
      fail: function (err) {
        reject(err)
      },
      complete: function () {
        // console.log("---complete----")
        // wx.hideLoading()
      }
    })
  })
}