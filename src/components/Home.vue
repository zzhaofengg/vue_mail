<template>
    <el-container class="home-container">
        <el-header>
            <img src="../assets/heima.png" alt="">
            <span>电商管理后台</span>
            <el-button type='info' @click="logout">退出</el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">
              <!-- 侧边栏菜单区 -->
              <el-menu background-color="#343743" text-color="#fff"
              active-text-color="#409eff">
                <!-- 一级菜单 -->
                <el-submenu :index="item.id + '' " v-for="item in menulist" :key="item.id">
                  <!-- 一级菜单模板区域 -->
                  <template slot="title">
                    <!-- 图标 -->
                    <i :class="iconObj[item.id]"></i>
                    <!-- 文本 -->
                    <span>{{item.authName}}</span>
                  </template>
                  <!-- 二级菜单 -->
                  <el-menu-item :index="subItem.id + ''" v-for="subItem in item.children" :key="subItem.id">
                    <template slot="title">
                    <!-- 图标 -->
                    <i class="el-icon-menu"></i>
                    <!-- 文本 -->
                    <span>{{subItem.authName}}</span>
                  </template>
                  </el-menu-item>

                </el-submenu>
            </el-menu>
            <!-- 内容主题 -->
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
export default {
  data () {
    return {
      // 左侧菜单数据
      menulist: [],
      iconObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      }
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 获取所有的菜单
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    }
  }
}
</script>
<style lang="less" scoped>
    .home-container{
      height: 100%;
    }
    .el-header{
      background-color: #383d41;
      display: flex;
      justify-content: space-between;
      padding-left: 0;
      align-items: center;
      color: #fff;
      font-size: 20px;
      > div{
        display: flex;
        align-items: center;
        span{
          margin-left: 15px;
        }
      }
    }

    .el-aside{
        background-color: #343743;
    }

    .el-main{
        background-color: #eaedf1;
    }
    .iconfont{
      margin-right: 10px;
    }

</style>
