
Page({
  data:{
    videoU:'',
    video:[
      {'id':'1','vurl':'https://vd2.bdstatic.com/mda-ncrjzztj6ehxugyf/sc/cae_h264_delogo/1648304400248358871/mda-ncrjzztj6ehxugyf.mp4?v_from_s=hkapp-haokan-hna&auth_key=1648439686-0-0-8ab69457f989fde3b15dca472c4d1d0d&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=1485924315&vid=3872505185508521476&abtest=100815_2-101130_2-17451_2-3000185_1&klogid=1485924315'},
      {'id':'2','vurl':'https://vd2.bdstatic.com/mda-mkep2juscazauqj8/sc/cae_h264_nowatermark/1636964509073132897/mda-mkep2juscazauqj8.mp4?v_from_s=hkapp-haokan-hna&auth_key=1648439793-0-0-4bc04ee63bb36ed2411c99e7677ddd16&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=1593785953&vid=2686583205086490773&abtest=100815_2-101130_2-17451_2-3000185_1&klogid=1593785953'},
      {'id':'3','vurl':'https://vd4.bdstatic.com/mda-mkkdq4ir0imf1x7x/sc/cae_h264/1637487779876611846/mda-mkkdq4ir0imf1x7x.mp4?v_from_s=hkapp-haokan-hnb&auth_key=1648439735-0-0-7bb0ddd3b3e55bd2f68d65d7e9ca4485&bcevod_channel=searchbox_feed&cd=0&pd=1&pt=3&logid=1535050318&vid=10384829188138328318&abtest=100815_2-101130_2-17451_2-3000185_1&klogid=1535050318'}
    ]
  },
  onLoad: function (option) {
    let aaa = option.url
    this.setData({
      videoU : this.data.video[aaa-1].vurl
    })
    console.log("jieshoudaoel",this.data.videoU)
    var _this = this;
    //获取屏幕宽高  
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        //video标签认宽度300px、高度225px，设置宽高需要通过wxss设置width和height。
        var videoHeight = (225 / 300) * windowWidth//屏幕高宽比  
        console.log('videoWidth: ' + windowWidth)
        console.log('videoHeight: ' + videoHeight)
        _this.setData({
          videoWidth: windowWidth,
          videoHeight: videoHeight
        })
      }
    })
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onShow: function () {
  },
  inputValue: '',
    danmuList: [
      {
        text: '第 1s 出现的红色弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 2s 出现的绿色弹幕',
        color: '#00ff00',
        time: 2
      }
    ]
})




// blob:https://player.bilibili.com/8b0b42a1-2814-4cf1-84a9-10f80007d4b1