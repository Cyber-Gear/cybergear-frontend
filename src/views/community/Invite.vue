<template>
  <div class="box">
    <div class="row">
      <div class="box_title3">
        <span class="border"></span>
        <span>我的公会</span>
      </div>
      <div class="row_btn">
        <span>0x34578920600057dy7tk962hv90u7</span>
        <el-button type="primary">复制邀请链接</el-button>
      </div>
    </div>
    <div class="row">
      <div class="box_title3">
        <span class="border"></span>
        <span>邀请数</span>
      </div>
      <div class="row_btn">
        <span>当期邀请数</span>
        <el-button type="primary">499</el-button>
      </div>
    </div>
    <div class="row">
      <div class="box_title3">
        <span class="border"></span>
        <span>奖励</span>
      </div>
      <div class="row_btn">
        <span>奖励数</span>
        <el-button type="primary">300 碎片</el-button>
      </div>
    </div>
    <div class="row">
      <div class="box_title3">
        <span class="border"></span>
        <span>邀请记录</span>
      </div>
      <table class="community list">
        <thead>
          <tr>
            <td>地址</td>
            <td>注册时间</td>
            <td>碎片收益</td>
            <td>CT</td>
          </tr>
        </thead>
        <tbody @scroll="invitedListLoad">
          <tr v-for="(item, index) in tableData" :key="index">
            <th>{{ item.name }}</th>
            <th>{{ item.date }}</th>
            <th>{{ item.number }}</th>
            <th>{{ item.number }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityInvite",
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
      ],
    };
  },
  methods: {
    invitedListLoad(e) {
      // console.log("invitedListLoad", e);
      const scrollHeight = e.target.scrollHeight || e.srcElement.scrollHeight;
      const clientHeight = e.target.clientHeight || e.srcElement.clientHeight;
      const scrollTop = e.target.scrollTop || e.srcElement.scrollTop;
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        console.log("邀请记录，加载下一页");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .row {
    width: 100%;
    background: #282834;
    border-radius: 0.1rem;
    padding: 0.1rem 0.2rem;
    margin-bottom: 0.2rem;
    .row_btn {
      display: flex;
      justify-content: space-between;
      line-height: 0.35rem;
      padding: 0.1rem;
      background: #101017;
      border-radius: 0.09rem;
      font-size: 0.18rem;
      font-weight: 400;
      .el-button {
        width: 1.2rem;
        height: 0.35rem;
        font-size: 0.12rem;
        font-weight: 400;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      width: 49.5%;
    }
  }
}
</style>
