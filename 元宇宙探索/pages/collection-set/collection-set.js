
Page({
    // onLoad: function() {
    //     this.loadCollections()
    // },
    onReady:function(){
        this.setData({
            filtercollections : this.data.collections
        })
    },
    onShow: function() {
    },
    startvedio:function(e){
        let index = e.currentTarget.id
        wx.navigateTo({
            url: '../../pages/videoplayer/videoplayer?url=' + this.data.players[index].Vurl,
        })
    },
    startessay:function(e){
        let idex = e.currentTarget.id
        wx.navigateTo({
            url: '../../pages/essay/essay?eid='+idex
        })
    },
    getInputValue:function(e){
        this.value = e.detail
    },
    filter:function(){
        this.setData({
            filtercollections : ''
        })
        for(let id = 0,index = 0; id<this.data.collections.length;id++){
            // let aa = this.data.collections[id].title
            // let bb = this.value.value
            // let cc = aa.indexOf(bb)
            // let cc = this.data.collections[id].title.indexOf(this.value.value)
            // let arr = 'filtercollections[' + index +']'
            if(this.data.collections[id].title.indexOf(this.value.value) !== -1){
                this.setData({
                    ['filtercollections[' + index +']'] : this.data.collections[id]
                })
                index++
            }
        }
        console.log(this.data.filtercollections)
    },
    startSearch:function(e){
        // console.log(this.data.value)
        // let aa = this.collections.filter((collection)=>{
        //     return collection.title.indexOf(this.data.value) !== -1
        // })
        // console.log(aa)
        this.filter()

    //    this.setData({
    //        filtercollections : 
    //    })
    },
    onLoad: function (options) {
        var that = this
        wx.request({
          url: 'http://127.0.0.1:3000/players',
          success: function (res) {
            that.setData(res.data)
            console.log(res)
          }
        })
      },
    data: {
        imgUrls: [
        '../../image/yuzhou1.jpeg',
        '../../image/yuzhou2.jpeg',
        '../../image/yuzhou3.jpeg',
        ],
        indicatorDots: true,  //是否显示面板指示点
        autoplay: true,      //是否自动切换
        interval: 3000,       //自动切换时间间隔
        duration: 1000,       //滑动动画时长
        inputShowed: false,
        inputVal: "",
        value:" ",
        filtercollections:[],
        collections: [
            {
                'title':"元宇宙与哲学论",
                'bgImgurl':'../../image/univers1.jpeg',
                'entryCount':1,
                'followCount':1000
            },
            {
                'title':"本体论：元宇宙是不是0",
                'bgImgurl':'../../image/univeres.jpeg',
                'entryCount':2,
                'followCount':1000
            },
            {
                'title':"宇宙论：元宇宙是不是1？",
                'bgImgurl':'../../image/univers2.jpeg',
                'entryCount':3,
                'followCount':1000
            },
            {
                'title':"认识论：元宇宙是不是单机游戏？",
                'bgImgurl':'../../image/univer4.jpeg',
                'entryCount':4,
                'followCount':1000
            },
            {
                'title':"最终论？",
                'bgImgurl':'../../image/univers6.jpg',
                'entryCount':5,
                'followCount':1000
            },
        ],
    },
})