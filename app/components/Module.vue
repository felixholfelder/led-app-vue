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
        <Label
          class="noModules"
          v-if="modules.length == null"
          text="Keine aktiven Module vorhanden!"
        />
        <StackLayout class="loadingBar" v-if="loading">
          <LoadingBar :loading="loading" />
        </StackLayout>
        <ListView v-if="!loading" for="(module, i) in modules" height="500">
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
import AddModule from "./AddModule";
import LoadingBar from "./LoadingBar";

export default {
  components: {
    LoadingBar
  },
  data() {
    return {
      modules: [],
      loading: false,
    };
  },

  mounted() {
    this.getModules();
  },

  methods: {
    setModule(module) {
      console.log(module.name);
    },

    addModule() {
      this.$navigateTo(AddModule)
    },

    openSettings(module) {
      this.$navigateTo(EditModule, {
        props: {
          currentmodule: module,
        },
      });
      this.getModules();
    },

    getModules() {
      this.loading = true;
      fetch(`${process.env.LED_REST_URL}/modules`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${process.env.LED_REST_BASE}`,
        },
      })
        .then((response) => response.json())
        .then((json) => (this.modules = json))
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
.loadingBar {
  height: 100%;
  width: 100%;
  top: 50%;
}
.noModules {
  font-size: 15px;
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
