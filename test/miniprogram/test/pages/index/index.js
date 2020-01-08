// miniprogram/test/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    da: "hello",
    sthList: [{
        title: "BC/BD-200HDB",
        id: 1,
        lenth: 3,
      },
      {
        title: "name2",
        id: 2,
        lenth: 3,
      },
      {
        title: "name3",
        id: 3,
        lenth: 3,
      }
    ]
  },
  // chda:function(){
  //   this.setData({ da: sthList.id });
  //   console.log(sthList.id)
  // },
  gotosth_nob: function(e) {
    var id = e.currentTarget.dataset.nob;
    var title = e.currentTarget.dataset.title;
    var lenth = e.currentTarget.dataset.len;
    console.log(e);

    wx.navigateTo({
      url: '/test/pages/sth/sth?id=' + id + '&title=' + title + '&lenth='+lenth,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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