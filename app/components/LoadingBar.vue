<template>
  <StackLayout>
      <ActivityIndicator v-if="loading" busy="true" color="white" width="50" height="50" />
  </StackLayout>
</template>

<script>
export default {
    props: ['loading']
};
</script>