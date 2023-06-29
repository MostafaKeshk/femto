import { CSSObject } from "@mantine/core";
export const styles = () => ({
  link: {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  } as CSSObject,
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as CSSObject,
});
