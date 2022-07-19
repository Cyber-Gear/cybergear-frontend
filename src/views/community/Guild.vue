<template>
  <div class="box">
    <div class="box_title3">
      <span class="border"></span>
      <span>我的公会</span>
    </div>
    <div class="list">
      <el-table :data="tableData" height="30vh" ref="myGuildList">
        <el-table-column prop="name" label="公会名称" align="center"> </el-table-column>
        <el-table-column prop="date" label="创建时间" align="center"> </el-table-column>
        <el-table-column prop="number" label="公会成员数" align="center">
          <template slot-scope="scope">
            <div class="table_td_btn">
              <span>{{ scope.row.number }}</span>
              <el-button type="primary">邀请加入</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="bili" label="碎片收益" align="center">
          <template slot-scope="scope">
            <div class="table_td_btn">
              <span>{{ scope.row.number }}</span>
              <el-button type="primary">claim</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="shouyi" label="CT收益" align="center">
          <template slot-scope="scope">
            <div class="table_td_btn">
              <span>${{ scope.row.number }}</span>
              <el-button type="primary">claim</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="box_title3">
      <span class="border"></span>
      <span>公会排行榜</span>
    </div>
    <div class="list">
      <el-table :data="tableData" height="30vh" ref="guildList">
        <el-table-column prop="name" label="公会名称" align="center"> </el-table-column>
        <el-table-column prop="date" label="创建时间" align="center"> </el-table-column>
        <el-table-column prop="number" label="公会成员数" align="center"> </el-table-column>
        <el-table-column prop="bili" label="比例" align="center">
          <template slot-scope="scope">{{ scope.row.bili }}%</template>
        </el-table-column>
        <el-table-column prop="shouyi" label="累积收益" align="center">
          <template slot-scope="scope">${{ scope.row.shouyi }}</template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityGuild",
  data() {
    return {
      tableData: [
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
        { name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 },
      ],
    };
  },
  mounted() {
    this.myGuildListLoad();
    this.guildListLoad();
  },
  methods: {
    myGuildListLoad() {
      let that = this;
      this.$refs.myGuildList.bodyWrapper.addEventListener(
        "scroll",
        function () {
          let clientHeight = this.clientHeight;
          let scrollTop = this.scrollTop;
          let scrollHeight = this.scrollHeight;
          if (clientHeight + scrollTop === scrollHeight) {
            console.log("我的公会，加载下一页", "因为按钮高度，这个加载不生效");
            // if (that.total <= that.index && !this.popover) return
            // that.index += 1
            // 滚动条回滚至顶部
            // this.$refs.screenTable.bodyWrapper.scrollTop = 0
          }
        },
        true,
      );
    },
    guildListLoad() {
      let that = this;
      this.$refs.guildList.bodyWrapper.addEventListener(
        "scroll",
        function () {
          let clientHeight = this.clientHeight;
          let scrollTop = this.scrollTop;
          let scrollHeight = this.scrollHeight;
          if (clientHeight + scrollTop === scrollHeight) {
            console.log("公会排行榜，加载下一页", that);
            // if (that.total <= that.index && !this.popover) return
            // that.index += 1
            // 滚动条回滚至顶部
            // this.$refs.screenTable.bodyWrapper.scrollTop = 0
          }
        },
        true,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  .box_title3 {
    margin-bottom: 0.2rem;
    border-bottom: 1px solid;
    border-image: linear-gradient(135deg, rgba(212, 135, 241, 0.44), rgba(82, 224, 255, 0.44)) 1 1;
  }
  .list {
    margin-bottom: 0.2rem;
    .table_td_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      .el-button {
        width: 0.7rem;
        height: 0.3rem;
        font-size: 0.12rem;
        font-weight: 400;
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
