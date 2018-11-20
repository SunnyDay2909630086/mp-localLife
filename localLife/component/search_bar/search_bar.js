// component/search_bar/search_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /** 
   * 组件的初始数据
   */
  data: {
    inputShowed: false, //是否获取焦点
    inputVal: "" //文本框的值
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //让文本框获取焦点
    showInput: function () {
      this.setData({
        inputShowed: true
      });
    },
    //让文本框失去焦点
    hideInput: function () {
      this.setData({
        inputVal: "",
        inputShowed: false
      });
    },
    //让文本框内容清空
    clearInput: function () {
      this.setData({
        inputVal: ""
      });
    }, 
    //监听文本框的输入，实时地获取值，赋值给inputVal[这个就是文本框输入的值]
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
    },
    //当点击了搜索按钮
    search(){
      // console.log(this.data.inputVal)
      this.triggerEvent('onSearchBarConfirm',this.data.inputVal)
    }
  }
})
