<template>
  <ScrollView orientation="vertical">
    <FlexboxLayout flexWrap="wrap" justifyContent="space-between">
      <Label
        v-for="color in colors"
        :key="color.id"
        class="colorcard"
        :style="{ 'background-color': color.hex }"
        @tap="setColor(color)"
      >
      </Label>
    </FlexboxLayout>
  </ScrollView>
</template>

<script>
export default {
  props: ["colors"],
  methods: {
    setColor(color) {
      this.loading = true;
      console.log(color.hex)
      console.log(process.env.CURRENT_COLOR)
      console.log(process.env.IS_MODE)
      if (process.env.IS_MODE && process.env.CURRENT_COLOR != color.hex) {
        fetch(`http://${process.env.MODULE.address}/api/mode`, {
          method: "POST",
          body: JSON.stringify({
            mode: process.env.CURRENT_MODE,
            ...this.hextoRGB(color.hex),
          }),
        })
          .then((response) => response.json())
          .then((json) => (this.colors = json))
          .then(() => (this.loading = false))
          .catch((error) => {
            console.log(error);
            this.loading = false;
          });
        process.env.IS_MODE = true;
      } else {
        fetch(`http://${process.env.MODULE.address}/api/color`, {
          method: "POST",
          body: JSON.stringify(this.hextoRGB(color.hex)),
        })
          .then((response) => response.json())
          .then((json) => (this.colors = json))
          .then(() => (this.loading = false))
          .catch((error) => {
            console.log(error);
            this.loading = false;
          });
        process.env.IS_MODE = false;
      }
      process.env.CURRENT_COLOR = color.hex;
    },
    hextoRGB(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            red: parseInt(result[1], 16),
            green: parseInt(result[2], 16),
            blue: parseInt(result[3], 16),
          }
        : null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
.colorcard {
  height: 200px;
  width: 200px;
  border-radius: 5px;
  margin: 20px;
}

.text {
  color: white;
}
</style>
