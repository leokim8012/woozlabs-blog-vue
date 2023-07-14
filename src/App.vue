<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverride">
    <router-view />
  </n-config-provider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {
  lightTheme,
  darkTheme,
  darkThemeOverrides,
  lightThemeOverrides,
} from "@/styles/themes/theme";
@Options({
  components: {},
})
export default class App extends Vue {
  theme = darkTheme;
  themeOverride = darkThemeOverrides;
}
</script>
