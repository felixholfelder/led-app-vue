<template>
  <Page class="mainContainer">
    <ActionBar class="actionBar">
      <Label class="actionBarText" text="Led-App" />
    </ActionBar>

    <Drawer ref="drawer">
      <GridLayout
        ~leftDrawer
        class="drawer"
        width="300"
        backgroundColor="#363636"
        rows="auto, *"
      >
        <StackLayout row="0">
          <Label v-for="i in 3" :key="i" :text="i" />
        </StackLayout>
      </GridLayout>

      <StackLayout ~mainContent>
        
      </StackLayout>
    </Drawer>
  </Page>
</template>
<script>
import ColorCard from "./ColorCard.vue";
export default {
  components: {
    ColorCard,
  },
  data() {
    return {
      colors: [],
    };
  },

  methods: {
    onOpenDrawer() {
      this.$refs["drawer"].open("left");
    },
    onCloseDrawer() {
      this.$refs["drawer"].close("left");
    },
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => (this.colors = json));
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
.mainContainer {
  background-color: #222222;
}
.actionBar {
  background-color: #7d0000;
  .actionBarText {
    color: white;
  }
}
.info {
  font-size: 20;
  horizontal-align: center;
  vertical-align: center;
}
</style>
