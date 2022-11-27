<template>
  <div class="page-content">
    <div class="page-table">
      <div class="page-menu">
        <div
          :class="isClass == index ? 'ment-text menu-name' : 'menu-name'"
          @click="handleClickTree(im, index)"
          v-for="(im, index) in tableTreeList"
          :key="im.id"
        >
          {{ im.name }}
        </div>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column align="center" type="index" width="50" />
        <el-table-column align="center" prop="name" label="名称" width="180" />
        <!-- <el-table-column align="center" prop="" label="材料" width="180" /> -->
        <el-table-column align="center" prop="address" label="材料" />
        <el-table-column align="center" prop="address" label="厂家" />
        <el-table-column align="center" prop="address" label="元" />
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tableTreeList: {
      type: Array,
    },
  },
  watch: {
    tableTreeList(val) {
      if (val) {
        this.tableData = val[0].children;
      }
    },
  },
  data() {
    return {
      tableData: [],
      isClass: 0,
    };
  },
  methods: {
    handleClickTree(im, index) {
      this.isClass = index;
      this.tableData = im.children;
    },
  },
};
</script>
<style scoped lang="scss">
.page-content {
  height: auto;
  overflow: hidden;
  min-height: calc(100vh - 72px);

  .page-table {
    display: flex;
  }
  .page-menu {
    width: 180px;
    background: #e6eefe;
    padding: 40px 10px 0 20px;
    .menu-name {
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #000;
    }
    .menu-name:hover {
      color: #005fff;
    }
    .ment-text {
      color: #005fff;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
