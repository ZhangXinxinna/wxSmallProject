// pages/stest/stest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  openDetail:function(e){
    let selectedValue = e.currentTarget.dataset.url 
    let id = e.currentTarget.id -1
    let arr = 'test[' + id + '].selected'
    let arr1 = selectedValue.split(".")
    this.setData({
      [arr]:arr1[0]
    })
    if(arr1[0]==this.data.test[id].rightSelect){
      this.data.sum ++
    }
  },
  showWindows: function() {
    let a=this.data.test.length
    let b=this.data.sum*100
    this.setData(
      {
        score : Math.round(b/a)
      }
    )
    let aaa = this.data.score
    wx.showModal({
      title: '提示',
      content: '您共答对'+ this.data.sum +'道题',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: "../../pages/score/score?score="+aaa
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    this.setData({
      sum:0
    })
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://127.0.0.1:3000/test',
      success: function (res) {
        that.setData(res.data)
        console.log(res)
      }
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
