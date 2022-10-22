import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'
// import permissionApi from './mockServeData/permission'


//mock请求拦截
Mock.mock('/home/getData',homeApi.getStatisticalData)


Mock.mock(/user\/add/, 'post', user.createUser)
Mock.mock(/user\/edit/, 'post', user.updateUser)
Mock.mock(/user\/getUser/, 'get', user.getUserList)
Mock.mock(/user\/del/, 'post', user.deleteUser)
// Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)