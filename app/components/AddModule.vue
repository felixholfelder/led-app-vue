<template>
  <Page>
    <ActionBar class="actionBar">
      <StackLayout orientation="horizontal">
        <Label class="actionBarText" :text="module.name" width="85%" />
        <Label @tap="saveModule()">
          <Span class="fas" text.decode="&#xf00c;" />
        </Label>
      </StackLayout>
    </ActionBar>
    <StackLayout>
      <Label class="text" text="Name"/>
      <TextField class="textfield" v-model="module.name" />
      <Label class="text" text="Adresse"/>
      <TextField class="textfield" v-model="module.address" />
      <Label class="text" text="MAC-Adresse"/>
      <TextField class="textfield" v-model="module.mac" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      module: {
          name: '',
          address: '',
          mac: ''
      },
    };
  },

  methods: {
    saveModule() {
      fetch(`${process.env.LED_REST_URL}/modules`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${process.env.LED_REST_BASE}`,
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(this.module),
      })
        .then(() => this.$navigateBack())
        .catch((error) => {
          console.log(error);
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

.text {
  margin-left: 25px;
  margin-top: 20px;
  bottom: 0;
  font-size: 15px;
}
</style>
