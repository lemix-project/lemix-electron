import ui from '../ui'
import {ipcRenderer} from 'electron'

const create = ({ele, src, preload}) => {
  window.__pathStorage = [src]
  const webView = document.createElement('webview')
  const navigation = document.createElement('div')
  const goBack = document.createElement('div')
  const title = document.createElement('span')
  navigation.setAttribute('id', 'lemix-navigation')
  navigation.style.cssText =
    `display: none;
    height: 40px;
    background-color: #007aff;
    text-align: center;
    line-height: 40px`
  goBack.setAttribute('class', 'el-icon-arrow-left')
  goBack.style.cssText =
    `position: absolute;
    left: 0;
    top: 13px;
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: none;
    color: black;
    cursor:pointer`
  goBack.addEventListener('click', () => {
    ui.navigation.pop({layer: 1, webView: webView})
  })
  navigation.appendChild(goBack)
  navigation.appendChild(title)
  ele.appendChild(navigation)
  webView.style.cssText = `position:absolute;height:${ele.offsetHeight}px;border:1px solid #eee`
  webView.setAttribute('src', src)
  webView.setAttribute('preload', preload)

  ele.appendChild(webView)
  webView.addEventListener('dom-ready', () => {
    webView.openDevTools()
    webView.send('SET_PLATFORM','electron')
    webView.send('ON_LOAD')
  })
  return webView
}

export default {
  create
}