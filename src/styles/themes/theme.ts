import { lightTheme, darkTheme, GlobalThemeOverrides } from "naive-ui";

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#915eff",
    primaryColorHover: "#915eff",
    primaryColorPressed: "#915eff",
    primaryColorSuppl: "#915eff",
    popoverColor: "#242428",
    // cardColor: "#ff0000",
    // railColor: "#ff00000",
    borderRadius: "12px",
  },
  Popover: {
    boxShadow: "0",
  },

  Button: {},
  // Button: {
  //   textColor: "#FF0000",
  // },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: "#FF0000",
  //     },
  //   },
  // },
};
const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#915eff",
    primaryColorHover: "#915eff",
    primaryColorPressed: "#915eff",
    primaryColorSuppl: "#915eff",
    // cardColor: "#ff0000",
    // railColor: "#ff00000",
  },
  Popover: {},

  Button: {},
  // Button: {
  //   textColor: "#FF0000",
  // },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: "#FF0000",
  //     },
  //   },
  // },
};

export { lightTheme, darkTheme, darkThemeOverrides, lightThemeOverrides };
