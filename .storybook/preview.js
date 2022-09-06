export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: "mobile",
        styles: {
          width: "390px",
          height: "100%",
        },
      },
      desktop: {
        name: "desktop",
        styles: {
          width: "1440px",
          height: "100%",
        },
      },
    },
  },
};
