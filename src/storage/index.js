/*
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-01-14 17:24:09
 * @LastEditors  : 董正阳
 * @LastEditTime : 2020-01-14 18:04:20
 * @Description: 封装storage
 */
const STORAGE_KEY = 'setting'

export default {

  //  设置某个模块的缓存项
  setItem(key, val, module_name) {
    // 有模块名就获取该模块对象，将键值存入该模块，递归将模块名和该模块传入来达到放入缓存的效果
    if (module_name) {
      let storageItem = this.getItem(module_name)
      storageItem[key] = val;
      this.setItem(module_name, storageItem);
    } else { //无模块名就获取缓存对象，给该对象设置对应的键和值，最后放入缓存
      let storage = this.getStorage()
      storage[key] = val
      window.sessionStorage.setItem(key, JSON.stringify(storage));
    }
  },

  //  获取某个模块的缓存项
  getItem(key, module_name) {
    // 有模块名则将模块名作为key递归求当前模块的object，如果该对象有效，则返回模块下key对应的子对象
    if (module_name) { // 例如user下的userName
      let val = this.getItem(module_name)
      if (val) return val[key]
    }
    // 无模块名则直接返回缓存对象中的key对应的对象
    return this.getStorage()[key]
  },

  //  获取缓存本身
  getStorage() {
    // storage本身只能存字符串，所以去除需要json化，方便我们直接调用
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
  },

  //  清除缓存项
  clear() {

  }
}
