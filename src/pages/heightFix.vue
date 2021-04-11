<template>
  <div>
    <ul class="height-fixed" ref="scroller">
      <!-- 根据总长度所人为制造的滚动条 -->
      <li
        class="height-fixed__scroll-runway"
        :style="`transform: translate(0, ${scrollRunwayEnd}px)`"
      ></li>
      <Item
        class="height-fixed__item"
        v-for="item in visibleData"
        :data="item"
        :index="item.index"
        :key="item.username"
        :style="`transform:translate(0,${item.scrollY}px)`"
      />
    </ul>
  </div>
</template>

<script>
import Item from "../components/item";
import { fetchData } from "../helpers";

//由于是定高，所以我们这里需要先指定一个高度,便于后面模拟滚动条
const FIXED_HEIGHT = 180;
//视口显示元素数量：offsetHeight（元素的视口高度） / 元素高度
let VISIBLE_COUNT = 0;
//缓冲区元素个数
const BUFFER_SIZE = 3;
export default {
  components: {
    Item,
  },
  mounted() {
    VISIBLE_COUNT = Math.ceil(this.$refs.scroller.offsetHeight / FIXED_HEIGHT);
    console.log(VISIBLE_COUNT);
    this.fetchData();
    this.lastAttachedItem = VISIBLE_COUNT + BUFFER_SIZE
    this.visibleData = this.listData.splice(this.firstAttachedItem,this.lastAttachedItem)
  },
  data() {
    return {
      listData: [],
      visibleData: [], //实际展示的数组
      firstAttachedItem: 0,
      lastAttachedItem: 0,
      scrollRunwayEnd: 0, //总长度
    };
  },
  methods: {
    fetchData() {
      this.listData.push(...this.calItemScrollY(fetchData()));
      this.scrollRunwayEnd = this.listData.length * FIXED_HEIGHT;
    },
    //给每个元素设置固定的下标
    calItemScrollY(list) {
      let latestIndex = this.listData.length;
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        item.index = latestIndex + i;
        item.scrollY = this.scrollRunwayEnd + i * FIXED_HEIGHT
        Object.freeze(item);
      }
      return list;
    },
  },
};
</script>

<style scoped lang="scss">
.height-fixed {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  background: #eee;
  &__scroll-runway {
    position: absolute;
    width: 1px;
    height: 1px;
    transition: transform 0.2s;
  }
  &__item{
    /* position: absolute; */
    contain: layout;
    will-change: transform;
  }
}
</style>
