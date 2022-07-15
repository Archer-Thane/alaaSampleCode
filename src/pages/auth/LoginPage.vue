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
    <q-form class="q-gutter-md" @submit="submit">
      <q-card-section>
        <q-input
          square
          filled
          clearable
          v-model="mobile"
          type="text"
          label="نام کاربری (شماره همراه)"
          hint="شماره همراه باید با ۰۹ شروع شود. مثال: ۰۹۱۲۳۴۵۶۷۸۹"
          lazy-rules
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
          lazy-rules
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
// TODO: remove undigit words and clean it.
// a function to ensure digits which send to backend are in english rather than persian
const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "stores/auth";
import { useRouter } from "vue-router";
export default {
  setup() {
    const $q = useQuasar();
    const authStore = useAuthStore();
    const alaaLogo = ref("https://nodes.alaatv.com/upload/footer-alaaLogo.png");
    const mobile = ref("09121248393");
    const password = ref("0016668243");
    const data = ref(null);
    const router = useRouter();
    return {
      authStore,
      alaaLogo,
      mobile,
      password,
      submit() {
        $q.notify({
          color: "orange-5",
          textColor: "white",
          icon: "warning",
          message: "لطفا منتظر باشید",
        });
        api
          .post("login", {
            mobile: p2e(mobile.value),
            password: p2e(password.value),
          })
          .then((res) => {
            data.value = res.data.data;
            authStore.user = data.value.user;
            // TODO: rather than static string, make an env file for this and read from.
            data.value.redirectTo = data.value.redirectTo.replace(
              "http://localhost:9000",
              ""
            );
            // here we have name, if first name and lastname are defined,
            // name it with them, else using a simple user instead.
            let name;
            if (authStore.user.first_name && authStore.user.last_name) {
              name = authStore.user.first_name + " " + authStore.user.last_name;
            } else name = "کاربر";
            $q.notify({
              color: "green-5",
              textColor: "white",
              icon: "announcement",
              message: name + " عزیز، خوش آمدید",
            });
            router.push(data.value.redirectTo);
          })
          .catch((e) => console.log(e));
      },
    };
  },
};
</script>

<style>
</style>
