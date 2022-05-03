<template>
  <GridLayout columns="115, 115" rows="115, 115">
    <Label
      class="colorcard"
      v-for="color in colors"
      :key="color.id"
      :style="{ 'background-color': color.hex }"
    />
  </GridLayout>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        {
          id: 1,
          hex: "#456789",
        },
        {
          id: 2,
          hex: "#987654",
        },
        {
          id: 3,
          hex: "#123789",
        },
      ],
    };
  },

  mounted() {
    fetch(global.LED_REST_URL + "/colors")
      .then((response) => response.json())
      .then((json) => (this.colors = json));
  },
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";
.colorcard {
  height: 150px;
  width: 150px;
  border-radius: 5px;
  background-color: #123456;
}

.text {
  color: white;
}
</style>
