<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu" plain icon=" el-icon-menu" size="mini" type=""></el-button>
      <!-- <h3 style="color: #fff;">首页</h3> -->
      <el-breadcrumb separator=">">
        <el-breadcrumb-item v-for="item in tags" :key="item.path"  :to="{ path:item.path}" >{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img class="user" :src="userImg" alt="头像">
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
            
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'CommonHeader',
  data() {
    return {
      userImg:require('../assets/images/LOGO.png')
    }
  },
  methods: {
    handleMenu(){
      this.$store.commit('isCollapseMenu')
    }
  },
  computed:{
    ...mapState({
      tags:state => state.tab.tabsList
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
  .l-content{
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item{
      .el-breadcrumb__inner{
        font-weight: normal;
        &.is-link{
          color: #666;
        }
      }
      &:last-child{
        .el-breadcrumb__inner{
          color: #ffffff;
        }
      }
    }
    .el-button{
      margin-right: 20px;
    }
  }
  .r-content{
    .user{
      width:40px;
      height: 40px;
      border-radius: 50%;
    }
  }
</style>
