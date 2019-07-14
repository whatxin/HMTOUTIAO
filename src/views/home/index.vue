<template>
    <el-container class="home-content">
        <el-aside :width="isok?'64px':'200px'" class="home-aside">

            <div class="logo" :class="{xlogo:isok}"></div>

            <el-menu
            router
            style="border-right:none"
                default-active="/"
                class="el-menu-vertical-demo"
                background-color="#002033"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="isok"
                :collapse-transition='false'
                >

                <el-menu-item index="/">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/article">
                    <i class="el-icon-document"></i>
                    <span slot="title">内容管理</span>
                </el-menu-item>
                <el-menu-item index="/image">
                    <i class="el-icon-picture"></i>
                    <span slot="title">素材管理</span>
                </el-menu-item>
                <el-menu-item index="/publish">
                    <i class="el-icon-s-promotion"></i>
                    <span slot="title">发布文章</span>
                </el-menu-item>
                <el-menu-item index="/comment">
                    <i class="el-icon-chat-dot-round"></i>
                    <span slot="title">评论管理</span>
                </el-menu-item>
                <el-menu-item index="/fans">
                    <i class="el-icon-present"></i>
                    <span slot="title">粉丝管理</span>
                </el-menu-item>
                <el-menu-item index="/setting">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人设置</span>
                </el-menu-item>
            </el-menu>

        </el-aside>
        <el-container>
            <el-header class="home-header">
                <span class='el-icon-s-fold' @click="togg()"></span>
                <span class="txt">江苏传智播客科技教育有限公司</span>

                <el-dropdown style="float:right">
                    <span class="el-dropdown-link">
                        <img src="../../assets/images/avatar.jpg" alt="" width="30px" height="30px" style="vertical-align: middle;">
                        <b style="padding-left:10px">俊哥哥</b>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人设置</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
      isok: false
    }
  },
  methods: {
    togg () {
      this.isok = !this.isok
    }
  }
}
</script>

<style lang="less" scoped>
.home-content{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    .home-aside{
        background: #002033;
        .logo{
            width: 100%;
            height: 60px;
            background: #024 url(../../assets/images/logo_admin.png) no-repeat center / 140px auto;
        }
        .xlogo{
            background-image: url(../../assets/images/logo_admin_01.png);
            background-size: 36px auto;
        }
    }
    .home-header{
        border-bottom: 1px solid #ddd;
        line-height: 60px;
        .el-icon-s-fold{
            font-size: 26px;
            vertical-align: middle;
        }
        .txt{
            vertical-align: middle;
            padding-left: 10px;
        }
    }
}
</style>
