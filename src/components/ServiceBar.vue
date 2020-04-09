<!--
 * @version: 0.0.1
 * @Author: 董正阳
 * @Date: 2020-03-18 16:33:26
 * @LastEditors: 董正阳
 * @LastEditTime: 2020-03-19 16:09:57
 * @Description: 
 -->
<template>
  <div class="service-bar">
    <ul>
      <li>
        <a href='https://www.mi.com/static/fast'>
          <span class="icon-setting"></span>预约维修服务
        </a>
      </li>
      <li>
        <a href='https://www.mi.com/service/exchange#back'>
          <span class="icon-7day"></span>7天无理由退货
        </a>
      </li>
      <li>
        <a href='https://www.mi.com/service/exchange#back'>
          <span class="icon-15day"></span>15天免费换货
        </a>
      </li>
      <li>
        <a href='https://www.mi.com/service/buy/Postal%20policy'>
          <span class="icon-post"></span>满150元包邮
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.service-bar {
  @include box-h(80px, $colorG);
  & > ul {
    @include box($min-width, 100%);
    @include flex-row();
    margin: 0 auto;
    & > li {
      @include box(25%, 100%);
      @include flex-row();
      @include relative();
      & ~ li:before {
        content:'';
        @include absolute();
        @include position1(0, 50%);
        @include box(1px, 34px, $colorH);
        transform: translateY(-50%);
        border-left:1px
      }
      a {
        @include flex-row();
        @include font-set(16px, $colorC, 500);
        &:hover{
          color: $colorA;
        }
        & > span {
          margin-right: 8px;
          &.icon-setting {
            @include square(
              22px,
              url("/imgs/icon-setting.png") no-repeat center/contain
            );
          }
          &.icon-7day {
            @include square(
              22px,
              url("/imgs/icon-7day.png") no-repeat center/contain
            );
          }
          &.icon-15day {
            @include square(
              22px,
              url("/imgs/icon-15day.png") no-repeat center/contain
            );
          }
          &.icon-post {
            @include square(
              22px,
              url("/imgs/icon-post.png") no-repeat center/contain
            );
          }
        }
      }
    }
  }
}
</style>