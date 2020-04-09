<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="/#/index">小米商城</a>
      <span>|</span>
      <a href="https://www.miui.com/">MIUI</a>
      <span>|</span>
      <a href="https://home.mi.com/index.html">米家</a>
      <span>|</span>
      <a href="http://www.miliao.com/">米聊</a>
      <span>|</span>
      <a href="https://www.duokan.com/">多看</a>
      <span>|</span>
      <a href="https://game.xiaomi.com/">游戏</a>
      <span>|</span>
      <a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358">政企服务</a>
    </div>
    <div class="copyright">
      Copyright&nbsp;&copy;&nbsp;2020&nbsp;
      <a href="https://www.mi.com/">mi.com</a>&nbsp;All&nbsp;Rights&nbsp;Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.footer {
  @include box-h(238px, $colorB);
  @include font-set($fontI, $colorD);
  border-top: 4px solid $colorA;
  .footer-logo {
    @include flex-col();
    & > img {
      @include box(53px, 36px);
      margin-top: 46px;
    }
    & > p {
      margin-top: 13px;
    }
  }
  .footer-link {
    margin-top: 30px;
    & > a {
      @include font-set($fontI, $colorD);
      transition: all .2s;
      &:hover {
        color: $colorA;
      }
    }
    & > span {
      margin: 0 8px;
    }
  }
  .copyright {
    margin-top: 10px;
    a {
      color: $colorA;
    }
  }
}
</style>