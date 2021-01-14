<template>
  <van-doc
    :config="config"
    :github="github"
    :versions="versions"
  >
    <router-view />
  </van-doc>
</template>

<script>
import pkgJson from '../../package.json';
import docConfig, { github, versions } from './doc.config';
const UNSHARED = ['common', 'quickstart', 'changelog', 'intro', 'transition'];
export default {
  data() {
    return {
      github,
      versions,
    };
  },
  computed: {
    config() {
      return docConfig;
    },
    simulator() {
      let prefix = '';
      const { path } = this.$route.meta;
      if (
        location.hostname === '0.0.0.0' ||
        location.hostname === 'localhost'
      ) {
        prefix = 'https://youzan.github.io';
      }
      if (!UNSHARED.includes(path)) {
        return `${prefix}/vant/mobile.html?hide_nav=1&weapp=1#/zh-CN/${path}`;
      }
      return `./preview.html#${path}`;
    },
  },
  methods: {
    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = `https://youzan.github.io/vant-weapp/${version}`;
      }
    },
  },
};
</script>

<style lang="less">
.van-doc-nav__item a.active, .van-doc-nav__subitem a.active {
    font-weight: normal!important;
    font-size: 14px!important;
    position: relative;
    &::before{
      content: "";
      display: block;
      width: 4px;
      background-color: #50bfff;
      /* height: 0px; */
      position: absolute;
      height: 54%;
      left: 0;
    }
}
.van-doc-nav__item > a {
    font-weight: 500;
    background-color: #53575dfa !important;
    color: #fff!important;
    text-indent: -10px;
}
.van-doc-intro {
  padding-top: 20px;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  &__logo {
    width: 120px;
    height: 120px;
  }
  h2 {
    font-weight: normal;
    font-size: 32px;
    line-height: 60px;
  }
  p {
    margin-bottom: 20px;
    color: #455a64;
    font-size: 15px;
  }
}
</style>