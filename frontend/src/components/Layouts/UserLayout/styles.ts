import { CSSObject } from "@mantine/core";
export const styles = () => ({
  root: (theme: any): CSSObject => ({
    position: "fixed",
    zIndex: 50,
    width: "100%",
    backgroundColor: theme.colors.brand[5],
    paddingTop: 10,
    paddingBottom: 10,
  }),
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  } as CSSObject,
  center: {
    display: "flex",
    alignItems: "center",
  } as CSSObject,
  link: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  } as CSSObject,
});
