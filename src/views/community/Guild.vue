<template>
  <div class="box">
    <div class="box_title3">
      <span class="border"></span>
      <span>我的公会</span>
    </div>
    <table class="community list">
      <thead>
        <tr>
          <td>公会名称</td>
          <td>创建时间</td>
          <td>公会成员数</td>
          <td>碎片收益</td>
          <td>CT收益</td>
        </tr>
      </thead>
      <tbody @scroll="myGuildListLoad">
        <tr v-for="(item, index) in tableData" :key="index">
          <th>{{ item.name }}</th>
          <th>{{ item.date }}</th>
          <th>
            <div class="table_td_btn">
              <span>{{ item.number }}</span>
              <el-button type="primary">邀请加入</el-button>
            </div>
          </th>
          <th>
            <div class="table_td_btn">
              <span>{{ item.number }}</span>
              <el-button type="primary">claim</el-button>
            </div>
          </th>
          <th>
            <div class="table_td_btn">
              <span>${{ item.number }}</span>
              <el-button type="primary">claim</el-button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <div class="box_title3">
      <span class="border"></span>
      <span>公会排行榜</span>
    </div>
    <table class="community list">
      <thead>
        <tr>
          <td>公会名称</td>
          <td>创建时间</td>
          <td>公会成员数</td>
          <td>比例</td>
          <td>累积收益</td>
        </tr>
      </thead>
      <tbody @scroll="guildListLoad">
        <tr v-for="(item, index) in tableData" :key="index">
          <th>{{ item.name }}</th>
          <th>{{ item.date }}</th>
          <th>{{ item.number }}</th>
          <th>{{ item.number }}%</th>
          <th>${{ item.number }}</th>
        </tr>
      </tbody>
    </table>
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
      ],
    };
  },
  methods: {
    myGuildListLoad(e) {
      // console.log("myGuildListLoad", e);
      const scrollHeight = e.target.scrollHeight || e.srcElement.scrollHeight;
      const clientHeight = e.target.clientHeight || e.srcElement.clientHeight;
      const scrollTop = e.target.scrollTop || e.srcElement.scrollTop;
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        console.log("我的公会，加载下一页");
      }
    },

    guildListLoad(e) {
      // console.log("guildListLoad", e);
      const scrollHeight = e.target.scrollHeight || e.srcElement.scrollHeight;
      const clientHeight = e.target.clientHeight || e.srcElement.clientHeight;
      const scrollTop = e.target.scrollTop || e.srcElement.scrollTop;
      if (scrollTop >= scrollHeight - clientHeight - 10) {
        console.log("公会排行榜，加载下一页");
      }
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
}
</style>
