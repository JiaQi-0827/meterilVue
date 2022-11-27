import request from '@/utils/request'

/**
 *
 * @树形列表数据
 */
export const maktingsTreeList = (params) => {
  return request({
    url: '/system/makings/tree', params
  })
}
/**
 *
 * @树形列表 登录
 */
export const matingLogin = (data) => {
  return request({
    url: '/login',
    data: data
  })
}
