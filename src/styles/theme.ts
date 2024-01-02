export const THEME = {
  COLORS: {
    PRODUCT_BLUE_DARK: "#1E6F9F",
    PRODUCT_BLUE: "#4EA8DE",
    PRODUCT_PURPLE_DARK: "#5E60CE",
    PRODUCT_PURPLE: "#8284FA",

    BASE_GRAY_700: "#0D0D0D",
    BASE_GRAY_600: "#1A1A1A",
    BASE_GRAY_500: "#262626",
    BASE_GRAY_400: "#333333",
    BASE_GRAY_300: "#808080",
    BASE_GRAY_200: "#D9D9D9",
    BASE_GRAY_100: "#F2F2F2",

    OVERLAY: "rgba(30, 111, 159, 0.5)",

    ALERT: "#E25858",
    NONE: "none",
  },

  FONT_FAMILY: {
    DEFAULT: "Inter" || "Sans-Serif",
  },

  FONT_SIZE: {
    SM: "12px",
    MD: "14px",
    LG: "16px",
  },

  LINE_HEIGHT: {
    DEFAULT: "140%",
  },
};

export const SCREENS = {
  MOBILE: "360PX",
  TABLET: "768px",
  LAPTOP: "1024px",
  LAPTOP_LARGE: "1440px",
  DESKTOP: "2560px",
};

export const SCREEN = {
  MOBILE: `(min-width: ${SCREENS.MOBILE})`,
  TABLET: `(min-width: ${SCREENS.TABLET})`,
  LAPTOP: `(min-width: ${SCREENS.LAPTOP})`,
  LAPTOP_LARGE: `(min-width: ${SCREENS.LAPTOP_LARGE})`,
  DESKTOP: `(min-width: ${SCREENS.DESKTOP})`,
};
