import { useRoute, useRouter } from "vue-router";

export function useRoutingMixin() {
  const router = useRouter();
  const route = useRoute();
  function routerPush(path = "", params = {}, query = {}, scrollToTop = true) {
    if (!path) {
      alert("준비중입니다.");
      return;
    }

    router.push({ path: path, params: params, query: query }).then(() => {
      if (scrollToTop) window.scrollTo(0, 0);
    });
  }

  return { routerPush, router, route };
}
