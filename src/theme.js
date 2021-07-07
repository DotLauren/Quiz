export const theme = {
  palette: {
    primary: {
      light: "#E892FE",
      base: "#C14AFD",
      dark: "#7325B6",
    },
    success: {
      light: "#DAF96D",
      base: "#AEED10",
      dark: "#72AA08",
    },
    info: {
      light: "#6FFCEE",
      base: "#11E8F7",
      dark: "#088AB1",
    },
    warning: {
      light: "#FEDA85",
      base: "#FCB335",
      dark: "#B5711A",
    },
    danger: {
      light: "#FFB6A6",
      base: "#FF6D6B",
      dark: "#B7354A",
    },
  },
};

export const lightTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    background: {
      dark: "#EDF1F6",
      base: "#F6F9FC",
      light: "#FFFFFF",
    },
  },
};

export const darkTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    background: {
      light: "#232C45",
      base: "#1A2237",
      dark: "#151B2F",
    },
  },
};
