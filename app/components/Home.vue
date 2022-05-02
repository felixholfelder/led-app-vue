<template>
  <Page>
    <ActionBar class="actionBar">
      <Label class="actionBarText" text="Led-App" @tap="goToModule" />
    </ActionBar>
    <ColorCard />
  </Page>
</template>
<script>
import ColorCard from "./ColorCard";
import Module from "./Module";
export default {
  components: {
    ColorCard,
  },
  data() {
    return {};
  },

  methods: {
    onOpenDrawer() {
      this.$refs["drawer"].open("left");
    },
    onCloseDrawer() {
      this.$refs["drawer"].close("left");
    },
    goToModule() {
      this.$navigateTo(Module);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
.actionBar {
  background-color: #7d0000;
  .actionBarText {
    color: white;
  }
}

.fas {
  @include colorize($color: accent);
}
</style>
