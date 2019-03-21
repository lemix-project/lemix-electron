import style from './style'

const __relative = 'relative'

const push = (params) => {
  let webView = params.webView
  let path = __getPath(params)
  webView.loadURL(path)
  if (params.config) {
    let config = params.config
    __setNavigationStyle({config, webView})
  }
}

const pop = (params) => {
  let webView = params.webView
  let layer = params.layer
    ? Number(params.layer)
    : 1
  __pathStorage.splice(0 - layer, layer)
  webView.loadURL(__pathStorage[__pathStorage.length - 1])
}

const close = (params) => {
  let webView = params.webView
  let layer = params.layer
    ? Number(params.layer)
    : 1
  __pathStorage.splice(0 - layer, layer)
  webView.loadURL(__pathStorage[__pathStorage.length - 1])
}

const present = (params) => {
  let webView = params.webView
  let path = __getPath(params)
  webView.loadURL(path)
  if (params.config) {
    let config = params.config
    __setNavigationStyle({config, webView})
  }
}

const __getPath = (params) => {
  const src = params.webView.attributes.src.value
  let srcArray = src.split('/')
  srcArray.pop()
  const currentPath = srcArray.join('/')
  const relativePath = params.aim
  const path = params.type === __relative
    ? __getAbsolutePath(currentPath, __pathHandle(relativePath))
    : params.aim
  __pathStorage.push(path)
  return path
}

const __getAbsolutePath = (currentPath, relativePath) => {
  const relativePathReg = /^\.\.\//
  if (relativePathReg.test(relativePath)) {
    let currentPathArray = currentPath.split('/'),
      relativePathArray = relativePath.split('/')
    currentPathArray.pop()
    relativePathArray.shift()
    let newCurrentPath = currentPathArray.join('/'),
      newRelativePath = relativePathArray.join('/')
    __getAbsolutePath(newCurrentPath, newRelativePath)
  } else {
    return `${currentPath}/${relativePath}`
  }
}

/**
 * if the path is beginning with './' or '/',remove it from then path
 * @param path
 * @returns {*}
 * @private
 */
const __pathHandle = (path) => {
  return path.replace(/^\.\//, '').replace(/^\//, '')
}

const __setNavigationStyle = ({config, webView}) => {
  style.setNavigationBarHidden({isHidden: config.navigationHidden, webView})
  if (!config.navigationHidden) {
    /**
     * If navigation is hidden,don't set navigation's style
     */
    style.setNavigationBackgroundColor({color: config.navigationBackgroundColor, webView})
    style.setNavigationTitle({title: config.navigationTitle, webView})
    style.setNavigationItemColor({color: config.navigationItemColor, webView})
  }
  style.setStatusBarHidden({isHidden: config.statusBarHidden, webView})
  if (!config.statusBarHidden) {
    /**
     * If status bar is hidden,don't set status bar's style
     */
    style.setStatusBarStyle({style: config.statusBarStyle, webView})
  }
}

export default {
  push,
  pop,
  close,
  present
}