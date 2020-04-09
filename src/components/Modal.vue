<!--
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-03-25 17:07:43
 * @LastEditors: 董正阳
 * @LastEditTime: 2020-03-27 00:12:26
 * @Description: 
 -->
<template>
  <div class="modal" v-show="showModal">
    <div class="mask">
      <div class="modal-dialog">
        <div class="modal-header">
          <span class="title">{{title}}</span>
          <span class="icon-close"></span>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer btn-group">
          <span v-if="btnType==1 || btnType==3" class="btn bg-primary">{{sureText}}</span>
          <span v-if="btnType==2 || btnType==3" class="btn">{{returnText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalType: {
      // 模态框类型 small  middle  large  form
      type: String,
      default: "form"
    },
    title: String, // 头部标题
    btnType: String, // 按钮类型 1：确定按钮  2：取消按钮  3：确定取消按钮
    sureText: {
      // 确定按钮提示
      type: String,
      default: "确定"
    },
    returnText: {
      // 取消按钮提示
      type: String,
      default: "取消"
    },
    showModal: Boolean // 是否显示模态框
  }
};
</script>

<style lang="scss">
@import "../assets/scss/modal.scss";
</style>