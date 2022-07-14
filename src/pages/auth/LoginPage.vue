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
    <q-form class="q-gutter-md">
      <q-card-section>
        <q-input
          square
          filled
          clearable
          v-model="mobile"
          type="text"
          label="نام کاربری (شماره همراه)"
          hint="شماره همراه باید با ۰۹ شروع شود. مثال: ۰۹۱۲۳۴۵۶۷۸۹"
          :rules="[
            (val) =>
              val.length == 11 || 'شماره همراه باید دقیقا یازده رقم باشد',
          ]"
        />
        <q-input
          square
          filled
          clearable
          v-model="password"
          type="password"
          label="رمز عبور (شماره ملی)"
          hint="شماره ملی باید دقیقا ده رقم باشد."
          :rules="[
            (val) => val.length == 10 || 'شماره ملی باید دقیقا ده رقم باشد.',
          ]"
        />
      </q-card-section>
      <q-card-actions class="q-px-md">
        <q-btn
          unelevated
          color="orange-7"
          size="lg"
          type="submit"
          class="full-width"
          label="ورود به سامانه"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const alaaLogo = ref("https://nodes.alaatv.com/upload/footer-alaaLogo.png");
    return {
      alaaLogo,
      mobile: ref(""),
      password: ref(""),
    };
  },
};
</script>

<style>
</style>
