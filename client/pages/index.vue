<script lang="ts" setup>
  import { rpc } from "../composables/rpc";

  const title = "Hello world!";

  async function status() {
    console.log(await rpc.value?.gitStatus());

  }

</script>

<template>
  <div>
    {{ status() }}
  </div>
</template>
