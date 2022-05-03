<template>
  <Page>
    <ActionBar class="actionBar">
      <StackLayout orientation="horizontal">
        <Label class="actionBarText" :text="module.name" width="75%" />
        <Label @tap="showConfirmationDialog()">
          <Span class="fas" text.decode="&#xf1f8;" />
        </Label>
        <Label @tap="saveModule()">
          <Span class="fas" text.decode="&#xf00c;" />
        </Label>
      </StackLayout>
    </ActionBar>
    <StackLayout>
      <TextField class="textfield" hint="Name" v-model="module.name" />
      <TextField class="textfield" hint="Adresse" v-model="module.address" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: ["currentmodule"],
  data() {
    return {
      module: this.$props.currentmodule
    };
  },

  methods: {
    saveModule() {
      fetch(`${process.env.LED_REST_URL}/modules/${this.module.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Basic ${process.env.LED_REST_BASE}`,
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(this.module),
      })
        .then(() => this.$navigateBack())
        .catch((error) => {
        });
    },

    deleteModule() {
      fetch(`${process.env.LED_REST_URL}/modules/${this.module.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Basic ${process.env.LED_REST_BASE}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(() => this.$navigateBack())
        .catch((error) => {
          console.log(error);
        });
    },

    showConfirmationDialog() {
      confirm({
        message: "Modul " + this.module.name + " wirklich löschen?",
        okButtonText: "Löschen",
        cancelButtonText: "Abbrechen",
      }).then((result) => {
        if(result) {
          this.deleteModule()
        }
      });
    }
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
.textfield {
  height: 100px;
  font-size: 18px;
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
