<template>
  <div class="box">
    <div class="box_title">
      <span>{{ $t("message.home.text17") }}</span>
    </div>
    <div class="box_content">
      <div class="left_content">
        <div class="characterClasses1" :class="showCharacterClassesItem ? 'show' : 'hidden'">
          <img class="bg" :src="characterClassesItem.image" alt="" />
          <div class="left">
            <div class="top">
              <div>{{ isEnLang ? characterClassesItem.nameEn : characterClassesItem.name }}</div>
              <div>
                <div>{{ isEnLang ? characterClassesItem.nameEn : characterClassesItem.name }}</div>
                <img :src="characterClassesItem.level" alt="" />
              </div>
            </div>
            <div class="bottom">
              <div>
                <img class="angle" src="../../../assets/images/angle.png" alt="" />
                <div>{{ isEnLang ? characterClassesItem.descriptionEn : characterClassesItem.description }}</div>
              </div>
              <img class="bottom_img" src="../../../assets/images/role/bg1.png" alt="" />
            </div>
          </div>
          <div class="right"><img :src="characterClassesItem.image" alt="" /></div>
        </div>
      </div>
      <div class="right_content">
        <div class="characterClasses2">
          <div class="item" v-for="(item, index) in characterClassesList" :key="index" :class="{ active: currentSwiperIndex == index }" @click="switchClasses(index)">
            <span>{{ isEnLang ? item.nameEn : item.name }}</span>
            <img :src="currentSwiperIndex == index ? item.iconActive : item.icon" alt="" />
            <span>{{ index + 1 > 9 ? index + 1 : "0" + (index + 1) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Role",
  data() {
    return {
      currentSwiperIndex: 0,
      showCharacterClassesItem: false,
      characterClassesItem: null,
      characterClassesList: [
        {
          oldName: "K",
          name: "君临",
          nameEn: "Lord",
          attribute: "火",
          rarity: "MR",
          cv: "早见沙织",
          description: "微笑暴君。说话语调沉稳，待人有礼，控制欲极强。是P.T.H.财团高级执行官，位居财团权力顶点的十殿之一。从未展露过真正的实力，行为看似随性无常，但每一步行动都经过缜密思考。",
          descriptionEn:
            "A smiling tyrant.She is an extreme control freak who speaks calmly and treats people politely.She is a high level Executor of the P.T.H. Group and one of the ten Governors who control the Group.She's never exposed her true strength. Her behaviors may seem casual and unpredictable, but she actually plans her every move very carefully.",
          icon: require("../../../assets/images/role/professional1.png"),
          iconActive: require("../../../assets/images/role/professional_active1.png"),
          image: require("../../../assets/images/role/figure1.png"),
          level: require("../../../assets/images/role/role_level_mr.png"),
        },
        {
          oldName: "锦云",
          name: "卡特琳娜",
          nameEn: "Katarina",
          attribute: "火",
          rarity: "R",
          cv: "明坂聪美",
          description:
            "冷酷无情的潜行者。绝不怀疑上级命令的正确性。既是联合议会的特搜队指挥官，同时也是联合议会认证二级潜伏者。作为红舞的心腹，一贯视红舞为绝对正确。认为红舞是唯一有资格命令自己的人，对其他在红舞手下做事的人大多视而不见，心甘情愿做红舞的影子。",
          descriptionEn:
            "A ruthless and cold-blooded stalker. She never doubts the accuracy of an order. She's a commander of the United Council's Search Team and also a second level stalker approved by the United Council. As Koubu's most trusted ally, she never doubts Koubu's actions and decisions. She considers Koubu the only person who can command her. And she despises most other people serving under Koubu. She is willing to follow Koubu wherever she goes.",
          icon: require("../../../assets/images/role/professional2.png"),
          iconActive: require("../../../assets/images/role/professional_active2.png"),
          image: require("../../../assets/images/role/figure2.png"),
          level: require("../../../assets/images/role/role_level_r.png"),
        },
        {
          oldName: "托娅",
          name: "米娅",
          nameEn: "Mia",
          attribute: "草",
          rarity: "MR",
          cv: "上田莉奈",
          description:
            "习惯虚张声势的少女，元气的外表下是自卑的内心，常常因为做不出成果而感到不安。联合议会所属，新编第三军团机动部队副队长，多次随姐姐迎战教团的袭扰。因为能力不足而被认为是不合格的副队长。后为了弥补天赋的不足，总会加大训练量，争取早日获得他人的认同。",
          descriptionEn:
            "A young lady who bluffs all the time. Under that energetic appearance, hides an unconfident heart. She is the deputy captain of the New 3rd Corps Mobile Division under the United Council. And she has followed her sister to fight against the invading Order. She is considered a failure as deputy captain due to her incompetence. To make up for the talents she lack, she always takes extra trainings, hoping that others will recognize her one day soon. She believes that her sister is capable of handling any situation, so she looks up to her sister.",
          icon: require("../../../assets/images/role/professional2.png"),
          iconActive: require("../../../assets/images/role/professional_active2.png"),
          image: require("../../../assets/images/role/figure3.png"),
          level: require("../../../assets/images/role/role_level_mr.png"),
        },
        {
          oldName: "沐风",
          name: "尤娜",
          nameEn: "Una",
          attribute: "草",
          rarity: "SR",
          cv: "西明日香",
          description: "温柔的后方火力支援。性格认真，但有些慢性子，会一步步按照既定计划行动",
          descriptionEn:
            "A loving supporter who helps her teammates with firepower from the backline. She's a hard-working person , but kind of sluggish.She will carry out the pre-planned operation step by step.",
          icon: require("../../../assets/images/role/professional5.png"),
          iconActive: require("../../../assets/images/role/professional_active5.png"),
          image: require("../../../assets/images/role/figure4.png"),
          level: require("../../../assets/images/role/role_level_sr.png"),
        },
        {
          oldName: "玲夏",
          name: "琳",
          nameEn: "Rin",
          attribute: "草",
          rarity: "SR",
          cv: "高桥花林",
          description:
            "贪婪的潜伏者。年龄不小但内心却藏着一位贪财又贪吃的小女孩。本人的伪装水平很高，手中的自制武器可以根据不同的对象而调整用法。在职业生涯中几乎没有失手过，所以常常自诩为最强的潜伏者。",
          descriptionEn:
            "A greedy stalker. She's not young, but deep down, she's still a little girl who's gluttonous and greedy. She is very good at disguising herself. The weapon she made for herself can adjust and adapt based on what opponents she is fighting. Throughout her professional career, she's never messed things up. And so she claims to be the best stalker there is.",
          icon: require("../../../assets/images/role/professional4.png"),
          iconActive: require("../../../assets/images/role/professional_active4.png"),
          image: require("../../../assets/images/role/figure5.png"),
          level: require("../../../assets/images/role/role_level_sr.png"),
        },

        {
          oldName: "珞珈",
          name: "一花",
          nameEn: "Ichika",
          attribute: "电",
          rarity: "MR",
          cv: "石川由依",
          description:
            "性格独特的少女。个性呆萌，总是面无表情，喜欢披萨和甜食。克洛托教团守护者的一员，是教团守护者的外甥女，也是少数见过教皇真容的人之一。嘴里总是念叨着“哔哔哔哔”的时候，很少有人听得懂她在说什么。",
          descriptionEn:
            "A young lady with unique personalities. She is a silly girl who has a poker face and loves eating pizza and sweets. She's a member of the Kluto Order and the niece of the Order's protector. She's also one of the few who has seen the Pontiff's real face. When she's making the 'beeping' voice, few people can understand her.",
          icon: require("../../../assets/images/role/professional4.png"),
          iconActive: require("../../../assets/images/role/professional_active4.png"),
          image: require("../../../assets/images/role/figure6.png"),
          level: require("../../../assets/images/role/role_level_mr.png"),
        },
        {
          oldName: "羽飞",
          name: "飞鸟",
          nameEn: "Asuka",
          attribute: "电",
          rarity: "R",
          cv: "鬼头明里",
          description:
            "火力支援型的守护者。性格有些天然、迷糊，是卡罗尔的挚友，同时也是教皇的少数亲信之一。因为拥有少见的远距离火力，所以在教团内很受器重，单独作战的情况较多。然而本人迷糊的缘故，单独作战中常常迷路。",
          descriptionEn:
            "A protector who offers firepower support. She is somewhat naive and muddle-headed. She's the best friend of Carol and one of the few people dearly trusted by the Pontiff. She possesses the rare long-range firepower and is valued by the Order because of it. She usually works alone. However, she often loses her way on a solo mission due to her muddle-headed nature.",
          icon: require("../../../assets/images/role/professional1.png"),
          iconActive: require("../../../assets/images/role/professional_active1.png"),
          image: require("../../../assets/images/role/figure7.png"),
          level: require("../../../assets/images/role/role_level_r.png"),
        },
        {
          oldName: "魏子鱼",
          name: "梨花",
          nameEn: "Rika",
          attribute: "电",
          rarity: "R",
          cv: "长绳麻理亚",
          description: "小动物系少女。性格我行我素，心直口快，喜欢自称天才。是联合议会特搜队指挥官，也是红舞的直系下属。视红舞为有能、勤奋且听劝的上司，对她有任何意见或建议也会直截了当地提出。",
          descriptionEn:
            "A young girl who loves little animals. She does whatever she likes and speaks whatever she wants. And she likes to tell people that she's a genius. She's a commander of the United Council's Search Team and also a direct subordinate of Koubu. She considers Koubu a competent, hard-working, and rational superior. She will not hesitate to give her thoughts or opinions to Koubu.",
          icon: require("../../../assets/images/role/professional3.png"),
          iconActive: require("../../../assets/images/role/professional_active3.png"),
          image: require("../../../assets/images/role/figure8.png"),
          level: require("../../../assets/images/role/role_level_r.png"),
        },
        {
          oldName: "紫婧",
          name: "凯茜",
          nameEn: "Kasey",
          attribute: "水",
          rarity: "MR",
          cv: "田村由加莉",
          description:
            "政治世家出身的少女，个性强势、固执，不畏惧任何事物。联合议会所属，特殊安全委员会委员，是不少议员的眼中钉。为了有一天能让在基因危机中遭遇不幸的父亲再次活过来而推进知能机械人形的研究，身后名为阿尔法的管家型机械人形便是研究的成果之一。",
          descriptionEn:
            "A young lady born in a political family. She's bossy, stubborn, and afraid of nothing. She is a member of the Security Committee under the United Council and also an enemy of many other councilors. She did it all to revive her father who died during the Gene Crisis and advance the research on human-mind robots one day. The butler robot named Alpha that follows her around is a fruit borne out of this project.",
          icon: require("../../../assets/images/role/professional6.png"),
          iconActive: require("../../../assets/images/role/professional_active6.png"),
          image: require("../../../assets/images/role/figure9.png"),
          level: require("../../../assets/images/role/role_level_mr.png"),
        },
        {
          oldName: "堇源",
          name: "真希",
          nameEn: "Maki",
          attribute: "水",
          rarity: "UR",
          cv: "金元寿子",
          description:
            "联合议会入伍生总队预备役成员。外表给人冰霜美人的印象，可一旦开口就是毒舌连发。本人似乎对自己的毒舌没有自觉，愈发让人觉得不可亲近，时常会闹出不必要的误会。家庭关系非常特殊，本人从不会主动对外提及自己的家庭情况。",
          descriptionEn:
            "She's a reserved member of the United Council's Recruit Team. Judging by her appearance, she seems to be a nice beautiful lady, but she actually speaks a toxic language. She doesn't seem to notice her toxic language so she pushes people around her further away and often causes unnecessary misunderstandings. Her family relationship is very unique and she never actively brings up her family to anyone.",
          icon: require("../../../assets/images/role/professional4.png"),
          iconActive: require("../../../assets/images/role/professional_active4.png"),
          image: require("../../../assets/images/role/figure10.png"),
          level: require("../../../assets/images/role/role_level_ur.png"),
        },
        {
          oldName: "君弘",
          name: "诗乃",
          nameEn: "Shino",
          attribute: "光",
          rarity: "SR",
          cv: "加隈亚衣",
          description: "慢条斯理的军需官。性格柔和且包容，喜欢看书，喜好喝茶。是P.T.H.所属，202班独立别动队的成员。在组内负责后勤工作，能够准确把握小组的后勤需求，为每个人的工作提供保障。",
          descriptionEn:
            "An organized quartermaster who does things slowly. She's a gentle and forgiving person who loves reading and drinking tea. She is a member of the Squad Special Task Force 202 under the P.T.H. Group. She's in charge of logistics works and making sure that all her teammates' needs are satisfied and supported.",
          icon: require("../../../assets/images/role/professional3.png"),
          iconActive: require("../../../assets/images/role/professional_active3.png"),
          image: require("../../../assets/images/role/figure11.png"),
          level: require("../../../assets/images/role/role_level_sr.png"),
        },
        {
          oldName: "赵玥",
          name: "缇娜",
          nameEn: "Tina",
          attribute: "光",
          rarity: "UR",
          cv: "佐仓绫音",
          description:
            "元气系女高中生。梦想成为正义的英雄，人类基因强化中心的试训者，对保护弱小和对抗邪恶这两件事十分执着。基因危机战争孤儿，受联合议会资助，后来加入到绿洲人类基因强化中心的入伍生总队受训。因被发现是“通感者”而遭到通缉，目前逃亡中。",
          descriptionEn:
            "A vigorous high school girl. This trainee at the Human Gene Enhancement Center dreams to become a righteous hero. She's determined to protect the weak and fight against the evil.An orphan from the Gene Crisis War who was raised by the United Council and later became recruit of the Oasis Human Gene Enhancement Center and received trainings. She's now a criminal at large because people found that she was an 'Sensate'.",
          icon: require("../../../assets/images/role/professional1.png"),
          iconActive: require("../../../assets/images/role/professional_active1.png"),
          image: require("../../../assets/images/role/figure12.png"),
          level: require("../../../assets/images/role/role_level_ur.png"),
        },
        {
          oldName: "凤临",
          name: "卡罗尔",
          nameEn: "Carol",
          attribute: "光",
          rarity: "R",
          cv: "铃木实里",
          description:
            "幻想美好邂逅的网络歌姬。性格外向，喜欢唱歌。克洛托教团守护者中的一员，但似乎对工作和教团都没什么兴趣。总是憧憬能遇到一段浪漫的恋情，但对于“浪漫的恋情”是什么一直没有准确的答案。",
          descriptionEn:
            "An online singer who fantasizes about a beautiful, romantic relationship. She's an outgoing person who loves singing. She's also Uiha's best friend. She's a protector of the Kluto Order, but she doesn't seem interested in her jobs or the Order. She's always fantasized about a romantic love relationship, but she never knows what exactly a 'romantic love relationship' is.",
          icon: require("../../../assets/images/role/professional3.png"),
          iconActive: require("../../../assets/images/role/professional_active3.png"),
          image: require("../../../assets/images/role/figure13.png"),
          level: require("../../../assets/images/role/role_level_r.png"),
        },
        {
          oldName: "樱岚",
          name: "凯特",
          nameEn: "Kate",
          attribute: "暗",
          rarity: "UR",
          cv: "日笠阳子",
          description:
            "联合议会中央安全调查总署的情报人员。性格孤僻，不爱与人打交道，大多时候都是独自行动。主要调查对象为P.T.H.财团，时刻监视财团的计划与动向。从小就被作为情报员进行培养，参与过八年前的源核禁区调查任务，是任务中唯一的幸存者。",
          descriptionEn:
            "An intel agent of the United Council's Central Investigation Bureau. She is a lone wolf who doesn't like to interact with people and works alone most of the time. Her primary target is the P.T.H. Group and she always keeps an eye on their plan and movement. She has been receiving trainings to be an agent since she was little. She participated in the Exclusion Area Probe Quest eight years ago and was the sole survivor of that operation.",
          icon: require("../../../assets/images/role/professional2.png"),
          iconActive: require("../../../assets/images/role/professional_active2.png"),
          image: require("../../../assets/images/role/figure14.png"),
          level: require("../../../assets/images/role/role_level_ur.png"),
        },
        {
          oldName: "Null",
          name: "爱丽丝",
          nameEn: "Alice",
          attribute: "暗",
          rarity: "UR",
          cv: "内田真礼",
          description: "原职业黑客，现为P.T.H.财团的信息安全监察员。性格极度自负，讨厌工作，不喜欢听人指挥。虽然拥有无与伦比的黑客技术，但生活自理能力几乎为负。",
          descriptionEn:
            "She was originally a hacker and now an Information Security Inspector of the P.T.H. Group. She's a very arrogant person who hates working and following to orders. Though her hacking techniques are second to none, she doesn't know how to take care of herself.",
          icon: require("../../../assets/images/role/professional5.png"),
          iconActive: require("../../../assets/images/role/professional_active5.png"),
          image: require("../../../assets/images/role/figure15.png"),
          level: require("../../../assets/images/role/role_level_ur.png"),
        },
      ],
    };
  },
  computed: { ...mapGetters(["isEnLang"]) },
  created() {
    this.characterClassesItem = this.characterClassesList[this.currentSwiperIndex];
    setTimeout(() => {
      this.showCharacterClassesItem = true;
    }, 500);
  },
  methods: {
    switchClasses(index) {
      if (this.currentSwiperIndex == index) return;
      this.currentSwiperIndex = index;
      this.showCharacterClassesItem = false;
      setTimeout(() => {
        this.characterClassesItem = this.characterClassesList[this.currentSwiperIndex];
        this.showCharacterClassesItem = true;
      }, 500);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 5vw;
}
.box_content {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  .left_content {
    width: 75%;
    height: 100%;
  }
  .right_content {
    width: 25%;
    height: 100%;
  }
}
.characterClasses1 {
  width: 100%;
  height: 100%;
  display: flex;
  background-repeat: no-repeat;
  background-size: auto 90%;
  background-position: left top;
  transition: all 0.5s;
  position: relative;
  .bg {
    width: auto;
    height: 90%;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
  }
  &.show {
    opacity: 1;
    .left {
      opacity: 1;
      .top {
        left: 0%;
      }
      .bottom {
        bottom: -2%;
        opacity: 1;
      }
    }
    .right {
      img {
        top: 5%;
        right: 0;
        opacity: 1;
      }
    }
  }
  &.hidden {
    opacity: 0;
    .left {
      opacity: 0;
      .top {
        left: -20%;
      }
      .bottom {
        bottom: -20%;
        opacity: 0;
      }
    }
    .right {
      img {
        top: 5%;
        right: -20%;
        opacity: 0;
      }
    }
  }
  .left {
    width: 40%;
    background: url("../../../assets/images/bg9.png") no-repeat;
    background-size: 100% 100%;
    background-position: right center;
    margin-top: 20%;
    position: relative;
    transition: all 0.5s;
    .top {
      width: 88%;
      height: 44%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      transition: all 0.5s;
      position: absolute;
      top: 0%;
      > div {
        position: relative;
        &:nth-child(1) {
          font-size: 45px;
          font-weight: bold;
          color: #555555;
          right: 10%;
        }
        &:nth-child(2) {
          font-size: 20px;
          font-weight: 600;
          color: #22bbff;
          right: 0%;
          img {
            width: auto;
            height: 45px;
          }
        }
      }
    }
    .bottom {
      width: 88%;
      height: calc(100% - 44%);
      transition: all 0.5s;
      position: absolute;
      > div {
        display: flex;
        font-size: 12px;
        font-weight: 600;
      }
      .angle {
        width: auto;
        height: 30px;
        transform: rotate(-90deg);
      }
      .bottom_img {
        width: 100%;
        height: auto;
      }
    }
  }
  .right {
    width: 60%;
    height: 100%;
    position: relative;
    img {
      width: auto;
      height: 90%;
      transition: all 0.5s;
      position: absolute;
      top: 5%;
    }
  }
}

.characterClasses2 {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px 0;
  &::-webkit-scrollbar {
    width: 0;
  }
  .item {
    cursor: pointer;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: right;
    transition: all 0.5s;
    span {
      font-size: 25px;
      font-weight: 400;
      transition: all 0.5s;
    }
    img {
      width: 40px;
      height: 40px;
      margin: 0 20px;
      transition: all 0.5s;
    }
    &.active {
      padding: 10px 30px;
      span {
        color: #22bbff;
      }
      img {
        transform: scale(1.5);
      }
    }
    &:hover {
      padding: 10px 30px;
    }
  }
}

.character_animation-enter,
.character_animation-leave-to {
  opacity: 0.5;
}
.character_animation-enter-to,
.character_animation-leave {
  opacity: 1;
}
</style>
