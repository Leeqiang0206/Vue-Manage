export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'home',
                url:'Home/Home',
            }],
        currentMenu:null

    },
    mutations:{
        //菜单的展开收起
        isCollapseMenu(state){
            state.isCollapse = !state.isCollapse
        },

        //面包屑更新
        selectMenu(state,val){
            if (val.name !== 'home'){
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if (index === -1){
                    state.tabsList.push(val)
                }
            }
            // console.log(val,'val');
        },
        //删除tags
        closeTags(state,item){
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        }
    }
}