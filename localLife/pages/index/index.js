//index.js
import fetch from '../../utils/fetch.js'

Page({
  onLoad(){
    //获取轮播图数据
    this.getSlidesData()
    //获取分类数据
    this.getCategoriesData()
  },
  getSlidesData(){
    fetch('slides').then(res=>{
      // console.log(res.data)
      this.setData({
        slides:res.data
      })
    })
  },
  getCategoriesData(){
    fetch('categories').then(res=>{
      // console.log(res.data)
      this.setData({
        categories:res.data
      })
    })
  }
})
