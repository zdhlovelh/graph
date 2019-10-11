import axios from 'axios'

export async function $_ajax(url, obj = {}) {
  return await axios({
    method: 'get',
    url: url,
    params: obj,
    withCredentials: true
  }).then(res => {
    return res.data
  })
}
export async function $_ajax_file(url) {
  return await axios({
    method: 'get',
    url: url,
    responseType:"blob",
    headers: {
      "Content-Type": "application/x-download;charset=utf-8"
    },
  }).then(res => {
    return res.data
  })
}
export async function $_post(url, obj = {}) {
  return await axios.post(url, obj).then(res => {
    return res.data
  })
}
export async function $_post_json(url, obj = {}) {
  /* request payload */
  return await axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json"
    },
    transformRequest: [
      function (data) {
        return data;
      }
    ],
    data: JSON.stringify(obj)
  }).then(res => {
    return res.data
  })
}

export async function $_post_file(url, obj = {}) {
  /* request payload */
  return await axios({
    method: "post",
    url: url,
    headers: {
      "Content-Type": "'multipart/form-data'"
    },
    transformRequest: [
      function (data) {
        return data;
      }
    ],
    data:obj
  }).then(res => {
    return res.data
  })
}

