<template>
  <div class="index">
    <div class="swiper-box">
      <div class="nav-menu">
        <ul class="menu-wrap">
          <li>
            <span class="menu-name">手机 电话卡</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(1)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">电视&nbsp;盒子</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(2)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">笔记本&nbsp;平板</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(3)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">家电&nbsp;插线板</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(4)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">出行&nbsp;穿戴</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(5)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">耳机&nbsp;音箱</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(6)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">电源&nbsp;配件</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(7)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span class="menu-name">生活&nbsp;箱包</span>
            <span class="icon-go"></span>
            <div class="children">
              <ul v-for="(item, i) in menuList" :key="i">
                <li v-for="(sub, j) in item" :key="j">
                  <a :href="'/#/product/'+sub.id">
                    <img :src="sub.img" />
                    <span>{{sub.name+"(8)"}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in slideList" :key="index">
          <a :href="'/#/product/'+item.id">
            <img :src="item.img" />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="advert-box">
      <a v-for="(item, index) in advertList" :key="index" :href="'/#/product/'+item.id">
        <img :src="item.img" />
      </a>
    </div>
    <div class="banner">
      <a href="/#/product/30">
        <img src="/imgs/banner-1.png" />
      </a>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product">
              <img src="/imgs/mix-alpha.jpg" class="product-banner" />
            </a>
          </div>
          <div class="product-list">
            <div v-for="(item, i) in productList" :key="i" class="list">
              <div v-for="(sub, j) in item" :key="j" class="item">
                <a :href="'/#/product/'+sub.id">
                  <span v-if="j%2==0" :class="['tag', {'new-pro': j%2==0}, {'kill-pro': j%2!=0}]">新品</span>
                  <span
                    v-else-if="j%2!=0"
                    :class="['tag', {'new-pro': j%2==0}, {'kill-pro': j%2!=0}]"
                  >秒杀</span>
                  <img :src="sub.mainImage" class="poster" />
                  <h3>{{sub.name}}</h3>
                  <p class="desc">{{sub.subtitle}}</p>
                </a>
                <p class="price">
                  {{sub.price | currency}}
                  <img @click.stop="addCart(sub.id)" src="/imgs/icon-cart-hover.png" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal title="提示" sureText="查看购物车" btnType="3" modalType="middle" :showModal="showModal">
      <template v-slot:modal-body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ServiceBar from "../components/ServiceBar";
import Modal from "../components/Modal";
export default {
  name: "index",
  data() {
    return {
      swiperOption: {
        // swiper配置项
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "cube"
      },
      slideList: [
        // swiper推荐位配置
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        // 菜单商品
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G专区"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "移动4G专区"
          }
        ]
      ],
      advertList: [
        // 广告列表
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.png"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.png"
        }
      ],
      productList: [], // 产品列表
      showModal: false
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
  },
  methods: {
    // 获取产品列表
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.productList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    // 添加到购物车
    addCart(id) {
      this.axios
        .post("/carts", {
          productId: id,
          selected: true
        })
        .then(() => {})
        .catch(() => {
          alert(123);
        });
    }
  },
  components: {
    ServiceBar,
    swiper,
    swiperSlide,
    Modal
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.index {
  .swiper-box {
    @include box($min-width, 451px);
    position: relative;
    margin: 0 auto;
    .nav-menu {
      @include box(264px, 100%, rgba(0, 0, 0, 0.4));
      position: absolute;
      z-index: 9;
      .menu-wrap {
        @include square(100%);
        padding: 26px 0;
        & > li {
          @include box-h(50px);
          @include font-set($fontI, $colorG, 500);
          @include flex-row(space-between, center);
          text-align: left;
          padding: 0 30px;
          &:hover {
            background: $colorA;
            .children {
              @include box(964px, 100%, $colorG);
            }
          }
          .icon-go {
            @include box(
              10px,
              15px,
              url("/imgs/icon-arrow.png") no-repeat center/100%
            );
          }
          .children {
            @include box(964px, 100%, $colorG, none);
            position: absolute;
            top: 0;
            left: 264px;
            border-top: 1px solid $colorH;
            box-shadow: 0 7px 6px 0 rgba(0, 0, 0, 0.11);
            & > ul {
              @include box(100%, 75px);
              @include flex-row();
              & > li {
                @include box(25%, 100%);
                & > a {
                  @include square(100%);
                  @include flex-row(flex-start, center);
                  @include font-set($fontJ, $colorB, 500);
                  padding-left: 23px;
                  &:hover {
                    color: $colorA;
                  }
                  & > img {
                    @include box(35px, 42px);
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      @include box-h(451px);
      img {
        @include square(100%);
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
  }
  .advert-box {
    @include box($min-width, 167px);
    @include flex-row(space-between, center);
    margin: 14px auto 31px;
    & > a {
      @include box(296px, 100%);
      &:hover {
        box-shadow: 0 16px 16px -2px rgba(0, 0, 0, 0.11);
      }
      & > img {
        @include square(100%);
      }
    }
  }
  .banner {
    @include box($min-width, 130px);
    margin: 0 auto 50px;
    & > a {
      @include square(100%);
      & > img {
        @include square(100%);
      }
    }
  }
  .product-box {
    background: $colorJ;
    .container {
      @include box-w($min-width);
      margin: 0 auto;
      padding: 30px 0 50px;
      & > h2 {
        @include font-set(22px, $colorB);
        text-align: left;
      }
      .wrapper {
        @include flex-row();
        margin-top: 20px;
        height: 619px;
        .banner-left {
          @include box(224px, 100%);
          img {
            @include square(100%);
          }
        }
        .product-list {
          @include box(1002px, 100%);
          .list {
            @include box(100%, 302px);
            @include flex-row();
            & ~ .list {
              margin-top: 16px;
            }
            .item {
              @include box(236px, 302px, $colorG);
              margin-left: 14px;
              & > a {
                @include flex-col(flex-start, center);
                .tag {
                  @include box(67px, 24px, pink);
                  @include font-set(14px, $colorG, bold);
                  line-height: 24px;
                  margin: 0 auto;
                  &.new-pro {
                    background: #7ecf68;
                  }
                  &.kill-pro {
                    background: #e82626;
                  }
                }
                .poster {
                  @include box(190px, 154px);
                  margin-top: 20px;
                }
                & > h3 {
                  @include font-set(14px, $colorB, bold);
                  margin-top: 20px;
                }
                .desc {
                  @include font-set(12px, $colorD, bold);
                }
              }
              .price {
                @include font-set(14px, #f20a0a, bold);
                @include flex-row();
                margin-top: 10px;
                & > img {
                  @include box(24px, 18px);
                  margin-left: 4px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>