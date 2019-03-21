const getWidth = (params) => {
  return params.webView.parentNode.offsetWidth
}

const getHeight = (params) => {
  return params.webView.parentNode.offsetHeight
}

const rotate = () => {

}

export default {
  getWidth,
  getHeight,
  rotate
}