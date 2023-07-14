import { Ref, computed, ref } from "vue";

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904,
};

export type BreakpointValue = keyof Breakpoints;

export interface BreakpointObject {
  value: Ref<BreakpointValue>;
  xsOnly: Ref<boolean>;
  smOnly: Ref<boolean>;
  smAndUp: Ref<boolean>;
  smAndDown: Ref<boolean>;
  mdOnly: Ref<boolean>;
  mdAndUp: Ref<boolean>;
  mdAndDown: Ref<boolean>;
  lgOnly: Ref<boolean>;
  lgAndUp: Ref<boolean>;
  lgAndDown: Ref<boolean>;
  xlOnly: Ref<boolean>;
  xlAndDown: Ref<boolean>;
}

export default function useBreakpoint() {
  const width = ref(window.innerWidth);
  const breakpointValue = ref<BreakpointValue>("xs");

  const xsOnly = computed(() => width.value < breakpoints.sm);
  const smOnly = computed(
    () => width.value >= breakpoints.sm && width.value < breakpoints.md
  );
  const smAndUp = computed(() => width.value >= breakpoints.sm);
  const smAndDown = computed(() => width.value < breakpoints.md);
  const mdOnly = computed(
    () => width.value >= breakpoints.md && width.value < breakpoints.lg
  );
  const mdAndUp = computed(() => width.value >= breakpoints.md);
  const mdAndDown = computed(() => width.value < breakpoints.lg);
  const lgOnly = computed(
    () => width.value >= breakpoints.lg && width.value < breakpoints.xl
  );
  const lgAndUp = computed(() => width.value >= breakpoints.lg);
  const lgAndDown = computed(() => width.value < breakpoints.xl);
  const xlOnly = computed(() => width.value >= breakpoints.xl);
  const xlAndDown = computed(() => true);

  const breakpoint: BreakpointObject = {
    value: breakpointValue,
    xsOnly,
    smOnly,
    smAndUp,
    smAndDown,
    mdOnly,
    mdAndUp,
    mdAndDown,
    lgOnly,
    lgAndUp,
    lgAndDown,
    xlOnly,
    xlAndDown,
  };

  const updateWidth = () => {
    width.value = window.innerWidth;
    breakpointValue.value = Object.entries(breakpoints).reduce(
      (prev, [key, value]) =>
        width.value >= value ? (key as BreakpointValue) : prev,
      "xs" as BreakpointValue
    );
  };

  return { breakpoint, updateWidth };
}
