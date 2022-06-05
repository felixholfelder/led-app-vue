<template>
  <Page>
    <ActionBar class="actionBar">
      <StackLayout orientation="horizontal">
        <Label
          class="actionBarText"
          :text="modulename"
          width="75%"
          @tap="goToModule"
        />
        <Label @tap="getColors()">
          <Span class="fas" text.decode="&#xf2f1;" />
        </Label>
      </StackLayout>
    </ActionBar>
    <StackLayout class="loadingBar" v-if="loading">
      <LoadingBar :loading="loading" />
    </StackLayout>
    <ColorCard v-if="!loading" :colors="colors" />
  </Page>
</template>
<script>
import ColorCard from "./ColorCard";
import Module from "./Module";
import LoadingBar from "./LoadingBar";

export default {
  components: {
    ColorCard,
    LoadingBar,
  },
  data() {
    return {
      colors: [],
      loading: false,
      modulename: process.env.MODULE.name
    };
  },

  mounted() {
    this.getColors();
  },

  methods: {
    goToModule() {
      this.$navigateTo(Module);
    },
    getColors() {
      this.loading = true;
      fetch(`${process.env.LED_REST_URL}/colors`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${process.env.LED_REST_BASE}`,
        },
      })
        .then((response) => response.json())
        .then((json) => (this.colors = json))
        .then(() => (this.loading = false))
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
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
    font-size: 20px;
  }
}

.fas {
  @include colorize($color: white);
  font-size: 20px;
}

.colorcard {
  height: 150px;
  width: 150px;
  border-radius: 5px;
  background-color: #7d0000;
}

.text {
  color: white;
}
</style>
