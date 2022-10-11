<template>
  <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px;" >
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg">
            <div class="userinfo">
              <P class="name">Admin</P>
              <P class="access">超级管理员</P>
            </div>
          </div>
          <hr>
          <div class="logo-info">
            <p>上次登录时间：<span>2021-7-19</span></p>
            <p>上次登录地点：<span>重庆</span></p>
          </div>
        </el-card>
        <!-- 用户信息 -->
        <el-card style="margin-top: 20px;height: 460px;">
          <el-table :data="tableData">
            <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <el-col style="margin-top: 20px;" :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" class="body-style" :body-style="{ display:'flex',padding:0}">
            <!-- <i class="icon" :class="'el-icon-' + item.icon" :style="{background:item.color}"></i> -->
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
            <div class="detail">
              <p class="num">￥{{item.value}}</p>
              <p class="txt">￥{{item.name}}</p>
            </div>
          </el-card>
        </div>

        <el-card style="height: 280px;">
          <div style="height: 280px;" ref="echarts">
            
          </div>
        </el-card>
        <div class="graph">
          <el-card style="height: 260px;">
            <div style="height: 240px;" ref="userEcharts"></div>
          </el-card>
          <el-card style="height: 260px;">
            <div style="height: 240px;" ref="videoEcharts"></div>
          </el-card>
        </div>
      </el-col>
      <!-- 销售订单 -->


  </el-row>
</template>

<script>
// import { getMenu } from "../../api/data.js";
import { getData } from '../../../api/data.js'
import * as echarts from 'echarts'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'home',
    data() {
        return {
          userImg:require('../../assets/images/LOGO.png'),

          
          tableData:[],
          countData:[
            {
              name:'今日支付订单',
              value:1999,
              icon:'success',
              color:"#2ec7c9",
            },
            {
              name:'今日收藏订单',
              value:3499,
              icon:'star-on',
              color:"#ffb980",
            },
            {
              name:'今日未支付订单',
              value:1299,
              icon:'s-goods',
              color:"#5ab1ef",
            },
            {
              name:'本月支付订单',
              value:1499,
              icon:'success',
              color:"#2ec7c9",
            },
            {
              name:'本月收藏订单',
              value:1199,
              icon:'star-on',
              color:"#ffb980",
            },
            {
              name:'本月未支付订单',
              value:1199,
              icon:'s-goods',
              color:"#5ab1ef",
            },
          ],


          tableLabel:{
            name:'课程',
            todayBuy:'日购买',
            monthBuy:'月购买',
            totalBuy:'总购买'
          }
        }
    },
    mounted() {
      getData().then(res =>{
        const { code, data} = res.data
        if(code ===20000){
          this.tableData = data.tableData
          const order = data.orderData
          const xData = order.date
          const keyArray = Object.keys(order.data[0])
          const series = []
          keyArray.forEach(key => {
            series.push({
              nanm:key,
              data:order.data.map(item => item[key]),
              type:'line'
            })
          })

          const option = {
            xAxis: {
              data:xData
            },
            yAxis:{

            },
            legend:{
              data:keyArray
            },
            series
          }

          const S = echarts.init(this.$refs.echarts)
          S.setOption(option)

          //UserImg
          const userOptoion = {
            legend:{
              textStyle:{
                color:"#333",
              },
            },
            grid:{
              left:"20%",
            },
            tooltip:{
              trigger:"axis",
            },
            xAxis:{
              type:"category",
              data:data.userData.map(item => item.date),
              axisLine:{
                lineStyle:{
                  color:"#14b3a3",
                }
              },
              axisLabel:{
                interval:0,
                color:"#333"
              },
            },

            yAxis:[
                {
                  type:"value",
                  data:[],
                  axisLine:{
                    lineStyle:{
                      color:"#17b3a3",
                      }
                    },
                  },
              ],
                color:["#2ec7c9","#b6a2de"],
                series:[
                  {
                    name:'新增用户',
                    data:data.userData.map(item => item.new),
                    type:'bar'
                  },
                  {
                    name:'活跃用户',
                    data:data.userData.map(item => item.active),
                    type:'bar'
                  }
                ],
          }
          const B = echarts.init(this.$refs.userEcharts)
          B.setOption(userOptoion)

          //circle图
          const videoOption = {
            tooltio:{
              trigger:"item",
            },
            color:[
              "#6a2c70",
              "#b83b5e",
              "#f08a5d",
              "#e23e57",
              "#95e1d3",
              "#f38181",
              "#ff2e63"
            ],
            series:[
                {
                  data:data.videoData,
                  type:'pie'
                }
               ]
          }
          const C = echarts.init(this.$refs.videoEcharts)
          C.setOption(videoOption)

        }
        console.log(res);
      })
    },
}
</script>

<style lang="less" scoped>
.user{
  display: flex;
      align-items: center;
      padding-bottom: 20px;
      margin-bottom: 20px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
      }
}

      .num {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .el-card {
              width: 32%;
              margin-bottom: 20px;
            }
            .icon {
              font-size: 30px;
              width: 80px;
              height: 80px;
              text-align: center;
              line-height: 80px;
              color: #fff;
            }
            .detail {
              margin-left: 15px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: 80px;
              .num {
                font-size: 24px;
                margin-bottom: 15px;
                height: 10px;
              }
              .txt {
                font-size: 12px;
                text-align: center;
                color: #999999;
                line-height: 20px;
                margin-bottom: 30px;

              }
            }
          }
          .graph {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            .el-card {
              width: 48%;
            }
          }
</style>