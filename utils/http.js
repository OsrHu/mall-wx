import {promisic} from "../utils/util";
import {config} from "../config/config";

class Http {
    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey: config.appkey
            }
        })
        return res.data
    }
}

// wx.request,再封装一层
// ** promisic(wx.request)
// 动态类型,js,python
// java|lambda, C#|委托
export {
    Http
}