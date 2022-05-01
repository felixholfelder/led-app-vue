<template>
  <GridLayout columns="115, 115" rows="115, 115">
    <Label class="colorcard" v-for="i in value" :key="i" v-text="i.userId"/>
  </GridLayout>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
.colorcard {
  height: 150px;
  width: 150px;
  border-radius: 5px;
  background-color: #123456
}
</style>
