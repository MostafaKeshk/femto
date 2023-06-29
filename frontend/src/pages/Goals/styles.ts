import { CSSObject } from "@mantine/core";
export const styles = () => ({
  root: {
    paddingTop: "100px",
    paddingBottom: "50px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  } as CSSObject,

  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  } as CSSObject,
});
