<template>
  <Page>
    <ActionBar class="actionBar">
      <StackLayout orientation="horizontal">
        <Label class="actionBarText" text="Module" width="75%" />
        <Label @tap="addModule()">
          <Span class="fas" text.decode="&#xf067;" />
        </Label>
        <Label @tap="getModules()">
          <Span class="fas" text.decode="&#xf2f1;" />
        </Label>
      </StackLayout>
    </ActionBar>
    <ScrollView class="scrollview">
      <StackLayout class="layout">
        <ListView for="(module, i) in modules" height="500">
          <v-template>
            <StackLayout orientation="horizontal">
              <Label width="85%" @tap="setModule(module)">
                <Span :text="module.name" class="label" />
              </Label>
              <Label width="10%" @tap="openSettings(module)">
                <Span class="fas settings" text.decode="&#xf013;" />
              </Label>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import EditModule from "./EditModule";
export default {
  data() {
    return {
      modules: [
        {
          id: 1,
          name: "Erstes Modul",
          address: "eins.local",
          status: 1,
        },
        {
          id: 2,
          name: "Zweites Modul",
          address: "zwei.local",
          status: 1,
        },
        {
          id: 3,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 4,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 5,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 6,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 7,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 8,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 9,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 10,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 11,
          name: "11tes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 12,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 13,
          name: "13 Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 14,
          name: "Drittes Modul",
          address: "drei.local",
          status: 1,
        },
        {
          id: 15,
          name: "15. Modul",
          address: "drei.local",
          status: 1,
        },
      ],
    };
  },

  // mounted() {
  //   getModules()
  // },

  methods: {
    addModule() {
      console.log("ADD MODULE");
    },
    setModule(module) {
      console.log(module.name);
    },

    openSettings(module) {
      this.$navigateTo(EditModule, {
        props: {
          currentmodule: module,
        },
      });
      this.getModules()
    },

    getModules() {
      fetch("https://led-rest.heroukapp.com/api/modules")
        .then((response) => response.json())
        .then((json) => (this.modules = json));
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
.actionBarBtn {
  position: absolute;
  top: 50px;
}
.settings {
  right: 0;
}
.fas {
  @include colorize($color: white);
  font-size: 20px;
}
.label {
  height: 100px;
  font-size: 18px;
  color: white;
}
</style>
