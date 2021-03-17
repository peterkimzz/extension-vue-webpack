<template>
  <div class="w-80">
    <div>
      <brand-logo/>
      <p>
        Vue extension
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

import BrandLogo from "./components/BrandLogo.vue";

export default {
  components: {
    BrandLogo
  },
  setup() {
    onMounted(() => {
      console.log("mounted");
    });
  }
};
</script>