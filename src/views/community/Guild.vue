<template>
  <div class="box">
    <div class="box_title3">
      <div>
        <span class="border"></span><span>{{ $t("community.text5") }}</span>
      </div>
    </div>
    <table class="community list">
      <thead>
        <tr>
          <td>{{ $t("community.text6") }}</td>
          <td>{{ $t("community.text7") }}</td>
          <td>{{ $t("community.text8") }}</td>
          <td>{{ $t("community.text9") }}</td>
          <td>{{ $t("community.text10") }}</td>
        </tr>
      </thead>
      <tbody @scroll="myGuildListLoad">
        <tr v-for="(item, index) in tableData" :key="index">
          <th>{{ item.name }}</th>
          <th>{{ item.date }}</th>
          <th>
            <div class="table_td_btn">
              <span>{{ item.number }}</span>
              <el-button type="primary">{{ $t("community.text11") }}</el-button>
            </div>
          </th>
          <th>
            <div class="table_td_btn">
              <span>{{ item.number }}</span>
              <el-button type="primary">{{ $t("community.text12") }}</el-button>
            </div>
          </th>
          <th>
            <div class="table_td_btn">
              <span>${{ item.number }}</span>
              <el-button type="primary">{{ $t("community.text12") }}</el-button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <div class="box_title3">
      <div>
        <span class="border"></span><span>{{ $t("community.text13") }}</span>
      </div>
      <el-button type="primary" @click="openCreate">{{ $t("community.text14") }}</el-button>
    </div>
    <table class="community list">
      <thead>
        <tr>
          <td>{{ $t("community.text6") }}</td>
          <td>{{ $t("community.text7") }}</td>
          <td>{{ $t("community.text8") }}</td>
          <td>{{ $t("community.text15") }}</td>
          <td>{{ $t("community.text16") }}</td>
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
    <el-dialog
      center
      top="0"
      :title="$t('community.text14')"
      :visible.sync="isShowCreateGuild"
      :modal-append-to-body="false"
      :destroy-on-close="true"
    >
      <ul class="create_guild_form">
        <li>
          <div class="label">{{ $t("community.text14") }}</div>
          <el-input v-model="form.name" :placeholder="$t('community.text18')" clearable></el-input>
        </li>
        <li>
          <div class="label">{{ $t("community.text17") }}</div>
          <el-input v-model="form.addr" :placeholder="$t('community.text18')" clearable></el-input>
        </li>
        <li>
          <div class="label">{{ $t("community.text8") }}</div>
          <el-input v-model="form.number" type="number" :placeholder="$t('community.text18')" clearable></el-input>
        </li>
        <li>
          <div class="label">
            <el-button type="primary" @click="onSubmit">{{ $t("community.text19") }}</el-button>
          </div>
          <el-button @click="onCancel">{{ $t("community.text20") }}</el-button>
        </li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "CommunityGuild",
  data() {
    return {
      tableData: [{ name: "cyber", date: "2022-07-19", number: 300, bili: 20, shouyi: 300 }],
      isShowCreateGuild: false,
      form: {
        name: "",
        addr: "",
        number: null,
      },
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
    openCreate() {
      this.isShowCreateGuild = true;
    },
    onSubmit() {
      this.isShowCreateGuild = false;
    },
    onCancel() {
      this.isShowCreateGuild = false;
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
    .el-button {
      width: fit-content;
      height: 0.3rem;
      padding: 0 0.1rem;
    }
  }
}
.create_guild_form {
  width: 5rem;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    &:last-child {
      margin-bottom: 0;
    }
    .label {
      width: 30%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: right;
      font-size: 0.15rem;
      color: #ffffff;
      padding-right: 0.2rem;
    }
    .el-input {
      width: 70%;
    }
    .el-button {
      width: 1rem;
      height: 0.35rem;
    }
  }
}
</style>
