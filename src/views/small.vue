<template>
    <div ref="map" style="height:1200px;width:1200px;" ></div>
</template>
<script>
import echarts from "echarts";
import 'echarts/map/js/china.js'; //引入广东地图
// import option from "./map-option.js";

export default {
  name: "Small",
  data() {
    return {
      myChart: '',
      option: {
        title : {
            text: '订阅我博客的人群分布',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['iphoneX']
        },
        dataRange: {
            min: 0,
            max: 3000,
            x: 'left',
            y: 'bottom',
            text: ['High', 'Low'],
            realtime: false,
            calculable : true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: 'iphoneX',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                {name: '北京',value:3000},
                {name: '广州市',value: 500},
                {name: '中山市',value:3010},
                {name: '佛山市',value: 550},
                {name: '清远市',value:900},
                {name: '梅州市',value: 1000},
                {name: '汕头市',value:700},
                {name: '东莞市',value: 500},
                {name: '惠州市',value:3000},
                {name: '深圳市',value: 500}
                ]
            }
        ]
      }
    };
  },
  mounted() {
      this.mapEchartsInit();
  },
  methods:{
      mapEchartsInit(){
        this.myChart=echarts.init(this.$refs.map);
        this.myChart.setOption(this.option, true);
        this.chinaConfigure();
      },
      chinaConfigure() {
        var _this = this;
        window.onresize = _this.myChart.resize;
        this.myChart.on('click', function(params){
            if(params.name == '重庆') {
                _this.$router.push({
                    path:'/test',
                })
            }
            
            console.log(params);
        });
      },
  }
}
</script>