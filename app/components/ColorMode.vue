<template>
  <Page>
    <ActionBar class="actionBar">
      <StackLayout orientation="horizontal">
        <Label
          class="actionBarText"
          text="Farbmodus"
          width="100%"
          @tap="goToModule"
        />
      </StackLayout>
    </ActionBar>
    <ScrollView class="view" orientation="vertical">
      <FlexboxLayout flexWrap="wrap" justifyContent="space-between">
        <Label
          v-for="mode in modes"
          :key="mode.modeId"
          class="mode"
          @tap="setMode(mode)"
        >
          <FormattedString>
            <Span class="text" :text="mode.modeName" />
          </FormattedString>
        </Label>
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  props: ["modes"],
  methods: {
    setMode(mode) {
      console.log(mode.modeId);
      fetch(`http://${process.env.MODULE.address}/api/mode`, {
        method: "POST",
        body: JSON.stringify({ mode: mode.modeId }),
      })
        .then((response) => response.json())
        .then((json) => (this.colors = json))
        .then(() => (this.loading = false))
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
      process.env.CURRENT_MODE = mode.modeId;
      process.env.IS_MODE = true;
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

.mode {
  height: 200px;
  width: 200px;
  border-radius: 5px;
  margin: 20px;
  background-color: rgb(100, 100, 100);
  text-align: center;
}

.text {
  color: white;
  position: absolute;
  margin-top: 50%;
  font-size: 14px;
}
</style>
