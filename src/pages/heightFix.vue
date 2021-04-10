<template>
  <div>
    <ul class="height-fixed" ref="scroller">
      <Item
        class="height-fixed__item"
        v-for="item in listData"
        :data="item"
        :index="item.index"
        :key="item.username"
      />
    </ul>
  </div>
</template>

<script>
import Item from "../components/item";
import { fetchData } from "../helpers";
export default {
  components: {
    Item,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      listData: [],
    };
  },
  methods: {
    fetchData() {
      this.listData.push(...this.setItemIndex(fetchData()));
    },
    //给每个元素设置固定的下标
    setItemIndex(list) {
      let latestIndex = this.listData.length;
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        item.index = latestIndex + i;
        Object.freeze(item);
      }
      return list;
    },
  },
};
</script>

<style>
.height-fixed {
  background-color: #eee;
}
</style>
