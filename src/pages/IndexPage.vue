<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-btn @click="test">test</q-btn>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      test() {
        api
          .put("user/1", {
            first_name: "string",
            last_name: "string",
            address: "string",
            school: "string",
            major_id: 0,
            grade_id: 0,
            gender_id: 0,
            shahr_id: 0,
          })
          .then((r) => {
            console.log(r);
          })
          .catch((e) => {
            console.log(e);
          });
      },
    };
  },
});
</script>
