//index.js
// 0 引用 用来发送请求的 方法
import { request } from "../../request/index.js"
Page({
  data:{
    // 轮播图数组
    swiperList:[],
    //导航数组
    catesList:[],
    //楼层数据
    floorList:[]
  },
  // //页面开始加载， 就会触发
  onLoad:function(options){
    //.1 发送异步请求获取轮播数据
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success:(result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });


      this.getSwiperList();
      this.getCateList();
      this.getFloorList();
  },

  //获取轮播图数据
  getSwiperList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result=>{
         this.setData({
          swiperList:result.data.message
        })
    });
  },
  
  //获取导航分类数据
  getCateList(){
    request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result=>{
         this.setData({
          catesList:result.data.message
        })
    });
  },

    //获取导航分类数据
    getFloorList(){
      request({ url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
      .then(result=>{
           this.setData({
            floorList:result.data.message
          })
      });
    }
})