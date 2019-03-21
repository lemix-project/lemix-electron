const setNavigationBarHidden = (params) => {
  let isHidden = params.isHidden
  let navigationBar = __getNavigationBar(params.webView)
  navigationBar.style.display = isHidden
    ? 'none'
    : 'block'
}

const setNavigationBackgroundColor = (params) => {
  let color = params.color
  let navigationBar = __getNavigationBar(params.webView)
  navigationBar.style.backgroundColor = color
}

const setNavigationTitle = (params) => {
  let title = params.title
  let navigationBar = __getNavigationBar(params.webView)
  console.log(navigationBar.childNodes);
  navigationBar.childNodes[1].innerText = title
}

const setStatusBarHidden = () => {

}

const setNavigationItemColor = (params) => {
  let color = params.color
  let navigationBar = __getNavigationBar(params.webView)
  navigationBar.style.color = color
}

const setStatusBarStyle = () => {

}

const getNavigationBarHeight = () => {

}

const __getNavigationBar = (webView)=>{
  return webView.parentNode.childNodes[0]
}

export default {
  setNavigationBarHidden,
  setNavigationBackgroundColor,
  setNavigationTitle,
  setStatusBarHidden,
  setNavigationItemColor,
  setStatusBarStyle,
  getNavigationBarHeight
}