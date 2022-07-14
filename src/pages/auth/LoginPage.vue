<template>
  <q-card square bordered class="q-pa-lg q-ma-lg shadow-1">
    <q-card-section class="text-center q-pa-none">
      <q-img :src="alaaLogo" spinner-color="white" width="100px" />
      <h4>آموزش مجازی آلاء</h4>
      <p class="text-grey-6">
        نام کاربری را شماره موبایلتان و رمز عبور را کد ملیتان وارد نمایید. در
        صورتی که اولین بار است که وارد می شوید به صورت خودکار اکانت کاربری برای
        شما ساخته خواهد شد.
      </p>
    </q-card-section>
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input
          square
          filled
          clearable
          v-model="email"
          type="email"
          label="email"
        />
        <q-input
          square
          filled
          clearable
          v-model="password"
          type="password"
          label="password"
        />
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn
        unelevated
        color="light-green-7"
        size="lg"
        class="full-width"
        label="Login"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const alaaLogo = ref("https://nodes.alaatv.com/upload/footer-alaaLogo.png");
    return {
      alaaLogo,
    };
  },
};
</script>

<style>
</style>
