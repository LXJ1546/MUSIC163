import axios from "axios";

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class HYRequest {
  // request实例 => axios的实例
  constructor(config) {
    this.instance = axios.create(config);

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 这里可以加loading、token等逻辑
        // 如果有请求配置成功的回调函数，执行
        return config;
      },
      (err) => {
        // 请求失败的处理
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );

    // 针对特定实例的拦截器
    if (config.interceptors) {
      // 添加请求成功、失败拦截
      if (config.interceptors.requestSuccessFn) {
        this.instance.interceptors.request.use(
          config.interceptors.requestSuccessFn,
          config.interceptors.requestFailureFn
        );
      }
      // 添加响应成功、失败拦截
      if (config.interceptors.responseSuccessFn) {
        this.instance.interceptors.response.use(
          config.interceptors.responseSuccessFn,
          config.interceptors.responseFailureFn
        );
      }
    }
  }

  // 封装网络请求的方法
  request(config) {
    // 单次请求的成功拦截处理
    if (config.interceptors && config.interceptors.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    // 返回Promise
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          // 单词响应的成功拦截处理
          if (config.interceptors && config.interceptors.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.request({ ...config, method: "POST" });
  }
  delete(config) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch(config) {
    return this.request({ ...config, method: "PATCH" });
  }
}

export default HYRequest;
