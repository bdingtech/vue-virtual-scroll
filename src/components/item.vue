<template>
  <li class="item" ref="item">
    
      <div class="item__wrapper">
          <div class="item__info">
              <img :src="data.avatar" class="item__avatar"/>
              <p class="item__name">{{index}}.{{data.name}}</p>
              <p class="item__date"> {{data.job}}</p>
          </div>
          <p class="item__text">E-mail:{{data.email}}</p>
          <p class="item__text">Phone:{{data.phone}}</p>
          <p class="item__text">City:{{data.address.city}}</p>
          <p class="item__text">Street:{{data.address.street}}</p>
      </div>
  </li>
</template>

<script>
export default {
 name:'item',
 props:{
     index:{
         type:Number,
         default:0
     },
     data:{
         type:Object,
         default:() => ({})
     }
 },
}
</script>

<style scoped lang="scss">
.item {
  padding: 11px 20px;
  width: 100%;
  height: 180px;
  &.is-fixed {
    &__name,
    &__date,
    &__text,
    &__paragraph {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  &__wrapper {
    padding: 20px;
    padding-top: 0;
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 5px;
  }
  &__info {
    padding: 20px 0 20px 60px;
    position: relative;
  }
  &__avatar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
    width: 50px;
    height: 50px;
    background-color: #eaeaea;
    border-radius: 100%;
    overflow: hidden;
  }
  &__name,
  &__date,
  &__text,
  &__paragraph {
    margin-bottom: 4px;
    max-width: 100%;
    font-weight: bold;
    font-size: 12px;
  }
  &__text,
  &__paragraph {
    font-weight: normal;
  }
  &__img {
    margin-top: 10px;
    max-width: 100% !important;
    border-radius: 5px;
  }
}
</style>