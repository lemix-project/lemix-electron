import image from '../image'
import ui from '../ui'
import net from '../net'
import io from '../io'
import map from '../map'
import call from '../call'
import data from '../data'
import biometrics from '../biometrics'

const __privateUtils = {
  image,
  ui,
  net,
  io,
  map,
  call,
  data,
  biometrics
}

/**
 * 根据前端请求数据，返回要调用方法
 * @param type
 * @returns {*}
 */
const getFn = (type) => {
  if (typeof type !== 'string') {
    throw new Error('参数类型错误！')
  }
  const types = type.split('.')
  if (types.length < 3) {
    return undefined
  }
  return __privateUtils[types[0]][types[1]][types[2]]
}

export default {
  getFn
}