<!-- eslint-disable no-unused-vars -->
<template>
  <div class="tabs">
    <el-tag 
        v-for="(item,index) in tags"
        :key="item.path"
        :closable="item.name !=='home'"
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changeMenu(item)"
        @close="closeTag(item,index)"
        size="small"
        >
        {{item.label}}

    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'CommonTag',
    data(){
        return{}
    },
    methods: {
        ...mapMutations(['closeTags']),
        //tag跳转
        changeMenu(item){
            this.$router.push({ name:item.name})
        },
        //tag删除
        // eslint-disable-next-line no-unused-vars
        closeTag(item,index){
            this.closeTags(item)
            // eslint-disable-next-line no-unused-vars
            const length = this.tags.length
           
            //删除跳转
            if(item.name !== this.$route.name){
                return
            }

            //删除的是最后一项跳转
            // eslint-disable-next-line no-undef
            if(index === length){
                this.$router.push({
                    name:this.tags[index - 1].name
                })
            }else{
                this.$router.push({
                    name:this.tags[index].name
                })
            }

        }
    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
        })
    }
    
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>