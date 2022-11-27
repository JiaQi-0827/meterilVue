<template>
  <div>
    <div class="page-header">
      <div class="page-search page-publi">
        <!-- <div class="logo"></div> -->
        <!-- <div class="page-city">北京市</div> -->
        <div class="page-s-box">
          <div class="page-s-select">
            市场价<el-icon><ArrowDownBold /></el-icon>
          </div>
          <el-input
            v-model="FormSearch.searchValue"
            placeholder="请输入材料名称"
          />
          <div @click="handleClickSearch" class="btn-search">搜索</div>
        </div>
      </div>
      <!-- <div class="page-h-menu page-publi">
          <div class="page-menu-box">
            <div class="page-menu-cate">
              <el-icon><Menu /></el-icon>材料分类
            </div>
            <div class="page-menu-br"></div>
          </div>
        </div> -->
    </div>
    <el-main class="page-main">
      <div class="page-seaDate">

        <el-date-picker
          v-model="FormSearch.createTime"
          type="date"
          format="yyyy-MM-DD"
          value-format="yyyy-MM-DD"
          placeholder="选择日期"
        />
      </div>
      <mentTable :tableTreeList="tableTreeList"></mentTable>
    </el-main>
  </div>
</template>

<script>
import { maktingsTreeList } from "@/api/index";
import mentTable from "./menuTable.vue";
export default {
  components: { mentTable },
  created() {
    this.initTreeList();
  },
  data() {
    return {
      FormSearch: {
        createTime: "",
        searchValue: "",
      },
      tableTreeList: [],
    };
  },
  methods: {
    handleClickSearch() {},
    async initTreeList() {
      const { rows } = await maktingsTreeList(this.FormSearch);
      this.tableTreeList = rows;
    },
  },
};
</script>
<style lang="scss" scoped>
.page-main {
  min-width: 1200px;
  padding: 0 20%;
  background: #f6f6f6;
  background-color: #f6f6f6;
}
.page-seaDate {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin: 112px auto 10px;
  height: 52px;
  padding: 10px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
}
.page-publi {
  width: 1200px;

  margin: auto;
  display: flex;
  align-items: center;
}
.page-header {
  width: 100%;
  min-width: 1200px;
  position: fixed;
  z-index: 11;
  box-shadow: 0 4px 5px 0 rgb(0 0 0 / 10%);
  background: #fff;
  .logo {
    position: relative;
    height: 43px;
    width: 158px;
    line-height: normal;
    cursor: pointer;
    z-index: 12;
  }
  .page-city {
    margin-left: 20px;
  }
  .page-search {
    height: 72px;
    line-height: 72px;
    justify-content: center;
    .page-s-box {
      display: flex;
      align-items: center;
      border: 1px solid #ff840d;
      border-radius: 5px;
      background: #ebebeb;
    }
    .page-s-select {
      width: 95px;
      display: inline-block;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      padding: 0 10px;
      line-height: 22px;
      border-right: 1px solid rgba(0, 0, 0, 0.1);

      .el-icon {
        margin-left: 3px;
        margin-top: 2px;
      }
    }
    ::v-deep {
      .el-input {
        box-shadow: none;
        background: #ebebeb;
        height: 35px;
        line-height: 29px;
      }
      .el-input__inner {
        width: 490px;
        background: #ebebeb;
        border: none;
      }
    }

    .btn-search {
      display: inline-block;
      position: relative;
      height: 46px;
      line-height: 44px;
      width: 78px;
      padding-right: 12px;
      background-color: #ff840d;
      vertical-align: top;
      text-align: center;
      font-size: 18px;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
    }
    .btn-search:after {
      content: "";
      position: absolute;
      left: -22px;
      top: 0px;
      height: 40px;
      width: 22px;
      border-left: 22px solid transparent;
      border-bottom: 46px solid #ff840d;
    }
  }
  .page-h-menu {
    .page-menu-box {
      height: 40px;
      display: flex;
      align-items: center;
      .page-menu-cate {
        width: 170px;
        color: #000;
        font-size: 14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        .el-icon {
          margin-right: 5px;
        }
      }
      .page-menu-br {
        display: inline-block;
        width: 1px;
        height: 20px;
        background: rgba(0, 0, 0, 0.1);
        vertical-align: middle;
      }
    }
  }
}
</style>
