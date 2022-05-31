// 图表
<template>
  <div>
    <div class="title">
      <div
        @click="select=true"
        :class="{active:select,unactive:!select}"
      >
        等值图
      </div>
      <div 
        :class="{active:!select,unactive:select}"
        @click="select=false"
      >
        统计图
      </div>
    </div>
    <div>
      <el-row>
        <el-col :span="8">
          <div class="tree">
            <el-tree
              class="filter-tree"
              :data="treedata"
              :props="defaultProps"
              default-expand-all
              ref="tree"
            />
          </div>
          <div class="datepicker">
            <span>日期：</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
            />
            <el-button type="primary">
              刷新
            </el-button>
          </div>
          <div class="table">
            <el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                prop="date"
                label="井号"
              />
              <el-table-column
                prop="name"
                label="坐标一"
              />
              <el-table-column
                prop="address"
                label="坐标2"
              />
            </el-table>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="charttype">
            <span
              class="chartTitle"
            >
              参数选择
            </span>
            <el-radio
              v-model="radio"
              label="液量"
            >
              液量
            </el-radio>
            <el-radio
              v-model="radio"
              label="含水"
            >
              含水
            </el-radio>
            <el-radio
              v-model="radio"
              label="压力"
            >
              压力
            </el-radio>
            <el-radio
              v-model="radio"
              label="温度"
            >
              温度
            </el-radio>
            <span>日期：</span>
            <el-date-picker
              v-model="date1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
            <el-button type="primary">
              连动
            </el-button>
          </div>
          <el-row>
            <el-col
              :span="20"
              style="height:100%"
            >
              <div
                v-show="threeD"
                id="container1"
              />
              <div
                v-show="!threeD"
                id="twoD"
              />
            </el-col>
            <el-col :span="4">
              <div class="control">
                <el-button
                  type="primary"
                  @click="echarts2D(true)"
                >
                  标注
                </el-button>
                <el-button type="primary">
                  填充
                </el-button>
                <el-button
                  type="primary"
                  @click="threeD=!threeD"
                >
                  {{ threeD?'二维':'三维' }}
                </el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import kriging from '../utils/kriging.js'
import * as echarts from 'echarts'
import 'echarts-gl'
export default {
data(){
  return{
    value1:'',
    date1:'',
    radio:'液量',
    tableData: [{
            date: '1',
            name: '126.215562',
            address: '47.56565'
          }, {
            date: '2',
            name: '126.215562',
            address: '47.56565'
          }, {
            date: '3',
            name: '126.215562',
            address: '47.56565'
          }, {
            date: '4',
            name: '126.215562',
            address: '47.56565'
          }],
    treedata: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
    select:true,
    threeD: false,
    data:null,
    res:{
          x:[126.0181466,
    126.0532312,
    126.0443456,
    126.015337372313,
    126.0477395,
    126.0511562,
    126.0462576,
    126.0457961,
    126.0085123,
    126.000776,
    126.0067533,
    126.0310638,
    126.0252499,
    126.0095588,
    126.015343627273, 
    126.034292,
    126.0434607,
    126.0427621,
    126.0396621,
    126.0441395,
    126.0149761,
    126.0065951,
    126.0077741,
    125.9944848,
    125.9998322,
    126.0107151,
    126.0498311,
    126.0381106,
    126.0152318,
    126.0121754,
    126.0248801,
    126.0060489,
    126.0068847,
    126.0371075,
    126.0059481,
    126.0084798,
    126.008515,
    126.0071907,
    126.0453398,
    126.0487321,
    126.0051671,
    126.0159859,
    126.0034693,
    126.011997,
    126.036786,
    126.0403851,
    126.0212595,
    126.002262,
    126.0347698,
    126.0192024,
    126.0120511,
    126.0136717,
    126.0092514,
    126.0124881,
    126.0090193,
    126.0101314,
    126.0124027,
    126.0144962,
    126.0113513,
    126.0098376,
    126.0126855,
    126.0154068,
    126.0083752,
    126.0139952,
    126.0095392,
    126.0156863,
    126.0108004,
    126.0173387,
    126.0128477,
    126.0112175,
    126.0023957,
    126.0060015,
    126.0068674,
    126.0094589,
    126.0111025,
    126.0044193,
            126.0121556],
          y:[47.16370351,
        47.17394866,
        47.17073553,
        47.172801639153,
        47.17412115,
        47.17247028,
        47.17224205,
        47.16241438,
        47.16343846,
        47.18346191,
        47.15348768,
        47.134258,
        47.13504494,
        47.17933314,
        47.1678659363331 ,
        47.16967558,
        47.1426746,
        47.16733292,
        47.17168622,
        47.14339118,
        47.1590521990900, 
        47.18160349,
        47.1646782,
        47.1534083,
        47.18850749,
        47.15677016,
        47.17534794,
        47.1709402,
        47.1613733,
        47.17682744,
        47.14077152,
        47.17947884,
        47.15798906,
        47.16742604,
        47.18499871,
        47.16165681,
        47.14892966,
        47.16248736,
        47.14155329,
        47.17248389,
        47.18029824,
        47.17938817,
        47.14361832,
        47.1614294,
        47.16520854,
        47.16518518,
        47.13664538,
        47.17384109,
        47.16319631,
        47.13347203,
        47.16578818,
        47.1668734,
        47.16826831,
        47.17070159,
        47.17179885,
        47.17280058,
        47.172515,
        47.1713679,
        47.17365358,
        47.17483087,
        47.17458732,
        47.17474088,
        47.17599644,
        47.17583995,
        47.17723279,
        47.17689512,
        47.17818493,
        47.1780607,
        47.17920688,
        47.18234118,
        47.14623589,
        47.14784924,
        47.14975301,
        47.14983459,
        47.14892733,
        47.1487082,
            47.15174298],
          z:[4.74,
        0.47,
        5.27,
        0.57,
        1.07,
        5.85,
        3.71,
        0.3,
        2.65,
        0.31,
        0.38,
        0.19,
        1.87,
        0.94,
        0.22,
        0.06,
        0.18,
        0.51,
        0.04,
        1.27,
        1.66,
        0.97,
        3.18,
        0.24,
        0.37,
        0.58,
        0.13,
        0.19,
        0.78,
        0.53,
        1.73,
        0.55,
        0.2,
        0.07,
        0.28,
        0.47,
        0.36,
        0.27,
        0.16,
        3.69,
        0.7,
        0.11,
        0.75,
        1.16,
        0.1,
        0.07,
        0.27,
        0.02,
        0.17,
        0.4,
        0.82,
        0.12,
        0.3,
        0.52,
        2.85,
        1.17,
        0.3,
        1.04,
        0.23,
        0.85,
        1.02,
        0.28,
        1.35,
        0.63,
        2.61,
        0.14,
        0.55,
        0.2,
        0.66,
        0.56,
        2.06,
        0.38,
        0.16,
        0.32,
        2.1,
        0.64,
            2.58]
    },
    colorArr:[
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ],
    layout:{},
    trainResult:[],
    options:{}
  }
},
mounted(){
  this.trainResult = this.datatrain()
  this.canvas3D()
  this.echarts2D()
},
watch:{
  radio(val){
    if(val){
      this.echarts2D()
    }
  }
},
methods:{
  datatrain(){
    var polygons =[]
    this.res.x.forEach((item,index) => {
        polygons.push([item,this.res.y[index]])
    });
    let paramsK={
        mapCenter:[114.360456, 30.538622],
        maxValue:100,
        krigingModel:'exponential',//model还可选'gaussian','spherical'
        krigingSigma2:0,
        krigingAlpha:100,
        canvasAlpha:0.5,//canvas图层透明度
        colors:["#006837", "#1a9850", "#66bd63", "#a6d96a", "#d9ef8b", "#ffffbf","#fee08b", "#fdae61", "#f46d43", "#d73027", "#a50026"],
    };
    var {x,y,z} = this.res
    let variogram=kriging.train(z,x,y, paramsK.krigingModel,paramsK.krigingSigma2,paramsK.krigingAlpha);
    var grid=kriging.grid([polygons],variogram,0.0002)
    return grid
  },
  canvas3D(){
    let myChart = echarts.init(document.getElementById("container1"));
    let data = []
    var xlim=this.trainResult.xlim
    var ylim=this.trainResult.ylim
    var width = this.trainResult.width
    for(let i=0;i<this.trainResult[0].length-1;i++){ //宽
        for(let j=0;j<this.trainResult.length-1;j++){  //高
            let d = [(xlim[0]+j*width).toFixed(4),(ylim[0]+i*width).toFixed(4),this.trainResult[j][i].toFixed(4)]
            data.push(d);
        }
    }
    var  option = {
    tooltip: {
      formatter: (params)=> {
                return '经度：'+params.data[0]+'<br>' + '维度：' + params.data[1] + ' <br>'+this.radio+':' + params.data[2] ;
            }
    },
    backgroundColor: '#fff',
    visualMap: {
      show: true,
      dimension: 2,
      bottom: 200, // 位置调整
      right: 30, // 位置调整
      min: 0,
      max: 6,
      inRange: {
        color: this.colorArr
      }
    },
    xAxis3D: {
      name:'',
      min:xlim[0],
      max:xlim[1],
      type: 'value'
    },
    yAxis3D: {
      name:'',
      min:ylim[0],
      max:ylim[1],
      type: 'value'
    },
    zAxis3D: {
      name:'',
      type: 'value'
    },
    grid3D: {
      axisLabel:{
        show:false
      },
    viewControl: {
      // projection: 'orthographic'
    }
  },
    series: [
      {
        type: 'surface',
        wireframe: {
          show: false
        },
        data:data
      }
    ]
  };
  myChart.setOption(option)
  },
  canvas2D(){
    var {x,y,z} = this.res
    var trace1 = {
      x: x,
      y: y,
      mode: 'markers',
      name: 'points',
      marker: {
        color: 'rgb(102,0,0)',
        size: 2,
        opacity: 0.4
      },
      type: 'scatter'
    };
    var trace2 = {
      x: x,
      y: y,
      z: z,
      name: 'density',
      ncontours: 20,
      colorscale: 'Hot',
      reversescale: true,
      showscale: true,
      type: 'contour'
      // type:'histogram2dcontour'
    };
    this.data = [trace1, trace2];
    this.layout = {
      showlegend: false,
      autosize: true,
      width: 1000,
      height: 900,
      margin: {t: 50},
      hovermode: 'closest',
      bargap: 0,
      xaxis: {
        domain: [0, 0.85],
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        domain: [0, 0.85],
        showgrid: false,
        zeroline: false
      },
      xaxis2: {
        domain: [0.85, 1],
        showgrid: false,
        zeroline: false
      },
      yaxis2: {
        domain: [0.85, 1],
        showgrid: false,
        zeroline: false
      }
    };

  },
  echarts2D(visualMap,colors){
    this.threeD=false
    let xData = [];
    let yData = [];
    var xlim=this.trainResult.xlim
    var ylim=this.trainResult.ylim
    var width = this.trainResult.width
    let data1 = []
    for(let i=0;i<this.trainResult[0].length-1;i++){ //宽
        yData.push((ylim[0]+i*width ).toFixed(4));
        for(let j=0;j<this.trainResult.length-1;j++){  //高
          if(i==1){
            xData.push((xlim[0]+j*width).toFixed(4));
          }
            let d = [(xlim[0]+j*width).toFixed(4),(ylim[0]+i*width).toFixed(4),this.trainResult[j][i].toFixed(4)]
            data1.push(d);
        }
    }
    var option = {
      tooltip:{
          formatter: (params)=> {
                return '经度：'+params.data[0]+'<br>' + '维度：' + params.data[1] + ' <br>'+this.radio+':' + params.data[2] ;
            }
      },
      grid: {
        right: 140,
        left: 60
      },
      xAxis: {
        type: 'category',
        show:false,
        data: xData
      },
      yAxis: {
        type: 'category',
        show:false,
        nameTextStyle:{
          width:100
        },
        data: yData
      },
      visualMap: {
        show:visualMap?visualMap:false,
        type: 'piecewise',
        min: -1,
        max: 6,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
          color: colors?colors:this.colorArr
        }
      },
      series: [
        {
          name: this.radio,
          type: 'heatmap',
          data: data1,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1
            }
          },
          progressive: 1000,
          animation: false
        }
      ]
    };
    let myChart = echarts.init(document.getElementById("twoD"));
    myChart.setOption(option)     
  }
}
}
</script>

<style scoped lang='css'>
.chartTitle{
  position: absolute;
  left: 10px;
  top: -20px;
  display:inline-block;
  width:100px;
  height:30px;
  line-height: 30px;
  background-color:black;
  color:#fff;
}
.tree{
  height: 300px;
}
.datepicker{
  text-align: left;
}
#container1,#twoD{
  width: 850px;
  height: 650px;
}
.charttype{
  position: relative;
  border: solid 1px;
  margin:10px 20px;
  padding:10px
}
.title{
  text-align: left;
}
  .title>div{
    text-align: center;
    display: inline-block;
    width: 100px;
    height: 50px;
    margin-left: 20px;
    line-height: 50px;
  }
  .control{
    min-height:500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .active{
    background:linear-gradient(-135deg,transparent 10px, rgb(248, 4, 4) 0);
    color: aliceblue;
  }
  .unactive{
    background:linear-gradient(-135deg,transparent 10px, rgb(10, 72, 241) 0);
    color: aliceblue;
  }
</style>