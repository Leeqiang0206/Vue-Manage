// import Cookie from "js-cookie"
export default{
    state:{
        isCollapse:false,
        tabsList:[
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu:null,
        menu:[]

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
        },
        // setMenu(state, val) {
        //     state.menu = val
        //     Cookie.set('menu', JSON.stringify(val))
        // },
        // clearMenu(state) {
        //     state.menu = []
        //     Cookie.remove('menu')
        // },
        // addMenu(state, router) {
        //     if (!Cookie.get('menu')) {
        //         return
        //     }
        //     const menu = JSON.parse(Cookie.get('menu'))
        //     state.menu = menu
        //     const menuArray = []
        //     menu.forEach(item => {
        //         if (item.children) {
        //             item.children = item.children.map(item => {
        //                 item.component = () => import(`../views/${item.url}`)
        //                 return item
        //             })
        //             menuArray.push(...item.children)
        //         } else {
        //             item.component = () => import(`../views/${item.url}`)
        //             menuArray.push(item)
        //         }
        //     });
        //     // 路由的动态添加
        //     menuArray.forEach(item => {
        //         router.addRoute('Main', item)
        //     })
        // }
    }
}