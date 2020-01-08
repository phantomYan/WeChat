// miniprogram/test/pages/sth/sth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: 1,
    title: "N/O",
    lenth: 2,
    arr: [],
    imagesurl: "/cloud://hycydyx.6879-hycydyx-1301055280/images/1-1.jpg",
  },
  pim: function(e) {
    // console.log(e);
    // let url=e.currentTarget.dataset.url;
    // let arrs=this.
    let arr = this.data.arr;
    // arr.push(this.data.imagesurl)


    wx.previewImage({
      // current: imagesurl,
      // urls: this.data.arr,
      urls:arr,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      key: options.id
    })
    this.setData({
      title: options.title
    })
    this.setData({
      lenth: options.lenth
    })
    console.log(this.data.lenth)
    len: options.lenth
    //云端下载
     var arri=[]
     for (var i = 0; i < options.lenth; i++) {
      // console.log("xuanhuan")
      
      wx.cloud.downloadFile({ 
        fileID: "cloud://hycydyx.6879-hycydyx-1301055280/images/" + this.data.key+"-"+i+".jpg", // 文件 ID
        // fileID: 'cloud://hycydyx.6879-hycydyx-1301055280/images/1-1.jpg',
        success: res => {
          // 返回临时文件路径
          console.log(res.tempFilePath)
          // this.setData({'this.data.arr[i]':res.tempFilePath})
          arri.push(res.tempFilePath)
          console.log(arri)
        },
        fail: console.error
      })

    }
    this.setData({arr:arri})
  },

  sentlog:function(){
    console.log(this.data.arr)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log(this.data.arr)
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