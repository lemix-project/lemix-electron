import axios from 'axios'
// import request from 'sync-request'
// const request = require('sync-request')

const syncRequest = ({url, method, header, body, success, failed}) => {
  return axios({
    method:  method,
    url: 'http://192.168.11.203:8082/lemix/nameSpace',
    data: body,
    headers: header
  })
  // 同步网络请求
  // return request('GET', 'http://192.168.11.203:8082/lemix/nameSpace')
  // const res = await axios({
  //     method: 'GET',
  //     url: 'http://192.168.11.203:8082/lemix/nameSpace',
  //     data: body,
  //     headers: header
  //   })
  // return res.data
  // __ajax({
  //   method: 'GET',
  //   url: 'http://192.168.11.203:8082/lemix/nameSpace',
  //   data: body,
  //   headers: header,
  //   success(res){
  //     console.log(res)
  //   }
  // })
  // const {net} = require('electron')
  // const request = net.request('http://192.168.11.203:8082/lemix/nameSpace')
  // let _chunk
  // request.on('response', (response) => {
  //   console.log(`STATUS: ${response.statusCode}`)
  //   console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
  //   response.on('data', (chunk) => {
  //     console.log(`BODY: ${chunk}`)
  //     _chunk = chunk
  //   })
  //   response.on('end', () => {
  //     console.log('No more data in response.')
  //   })
  // })
  // request.end()
  // return _chunk
}

const asyncRequest = ({url, method, header, body, success, failed}) => {
  return axios({
    method:  'GET',
    url: 'http://192.168.11.203:8082/lemix/nameSpace',
    data: body,
    headers: header
  })
}

const uploadFile = () => {

}

const downloadFile = () => {

}

export default {
  syncRequest,
  asyncRequest,
  uploadFile,
  downloadFile
}