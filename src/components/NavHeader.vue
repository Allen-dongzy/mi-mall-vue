<template>
  <div class="header">
    <div class="topbar">
      <div class="container">
        <div class="top-menu">
          <a href="javascript:;">松果出行</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="top-user">
          <a v-if="username" href="javascript:;">{{username}}</a>
          <a v-else href="javascript:;" @click="goToLogin">登录</a>
          <a v-if="username" href="javascript:;">我的订单</a>
          <a v-else href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车(0)
          </a>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="container">
        <div class="navbar-logo">
          <a href="/#/index"></a>
        </div>
        <div class="navbar-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul class="list">
                <li class="list-item" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <img :src="item.mainImage" class="product-img" />
                    <span class="product-name">{{item.name}}</span>
                    <span class="product-price">{{item.price | currency}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul class="list">
                <li class="list-item" v-for="(item, index) in watchTVList" :key="index">
                  <a href="javascript:;" target="_blank">
                    <img :src="item.pic" class="product-img" />
                    <span class="product-name">{{item.name}}</span>
                    <span class="product-price">{{item.price + (index==5 ? '' : '元')}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="navbar-search">
          <input type="text" />
          <a class="search-btn" href="javascript:;">
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      watchTVList: [],
      phoneList: [],
      username: ""
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00元";
      return `${val.toFixed(2)}元`;
    }
  },
  mounted() {
    this.getProductList();
    this.getWatchTv();
  },
  methods: {
    // 获取产品推荐位-手机
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6
          }
        })
        .then(res => {
          if (res.list.length > 6) {
            res.list.splice(6);
          }
          this.phoneList = res.list;
        });
    },
    // 获取产品推荐位-电视
    getWatchTv() {
      this.axios.get("/watchtv").then(res => {
        this.watchTVList = res.list;
      });
    },
    // 前往登录
    goToLogin() {
      this.$router.push("/login");
    },
    // 前往购物车
    goToCart() {
      this.$router.push("/cart");
    }
    // 注册
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .topbar {
    @include box-h(39px, $colorB);
    .container {
      @include box-w($min-width);
      margin: 0 auto;
      @include flex-row(space-between);
      a {
        display: inline-block;
        line-height: 39px;
        @include font-set($fontK, $colorL, 500);
        & ~ a {
          margin-left: 17px;
        }
        &.my-cart {
          @include box-i-w(110px, $colorC);
          line-height: 39px;
          color: $colorL;
          .icon-cart {
            @include box-i(
              $fontI,
              12px,
              url("/imgs/icon-cart.png") no-repeat center/100%
            );
            margin-right: 5px;
          }
        }
      }
    }
  }
  .navbar {
    .container {
      @include relative();
      @include box($min-width, 112px);
      @include flex-row(space-between, center);
      margin: 0 auto;
      .navbar-logo {
        @include square(55px, $colorA);
        & > a {
          @include box(110px, 55px);
          transition: margin 0.2s;
          &:hover {
            margin-left: -55px;
          }
          &:before {
            content: "";
            @include square-i(
              55px,
              url("/imgs/mi-logo.png") no-repeat center/100%
            );
          }
          &:after {
            content: "";
            @include square-i(
              55px,
              url("/imgs/mi-home.png") no-repeat center/100%
            );
          }
        }
      }
      .navbar-menu {
        flex-grow: 1;
        padding-left: 264px;
        @include flex-row(flex-start);
        .item-menu {
          @include box-h(112px);
          @include font-set($fontI, $colorB, 500);
          line-height: 112px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              @include box($min-width, 220px, $colorG);
              opacity: 1;
            }
          }
          .children {
            @include absolute();
            z-index: 999;
            @include position1(0, 1$fontK);
            @include box($min-width, 0, $colorG);
            opacity: 0;
            overflow: hidden;
            transition: all 0.5s;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            border-top: 1px solid $colorH;
            ul {
              @include square(100%);
            }
            li {
              @include relative();
              @include box(16.66%, 100%);
              float: left;
              & ~ li:before {
                content: "";
                @include absolute();
                @include position1(0, 26px);
                @include box(1px, 99px, $colorF);
              }
              a {
                @include square(100%);
                @include flex-col(flex-start, center);
                .product-img {
                  margin-top: 22px;
                  @include box(166px, 111px);
                  object-fit: cover;
                }
                .product-name {
                  margin-top: $fontI;
                  @include font-set($fontK, $colorB, 500);
                }
                .product-price {
                  margin-top: 8px;
                  @include font-set($fontK, $colorA, 500);
                }
              }
            }
          }
          & ~ .item-menu {
            margin-left: 20px;
          }
        }
      }
      .navbar-search {
        @include box(318px, 50px);
        @include flex-row(space-between, center);
        border: 1px solid $colorH;
        &:hover {
          border: 1px solid $colorE;
          .search-btn {
            border-left: 1px solid $colorE;
          }
        }
        & > input {
          flex-grow: 1;
          height: 100%;
          padding-left: 14px;
        }
        .search-btn {
          @include box(55px, 50px);
          @include flex-row();
          border-left: 1px solid $colorH;
          & > span {
            @include square(18px);
            background: url("/imgs/icon-search.png") no-repeat center/100%;
          }
        }
      }
    }
  }
}
</style>