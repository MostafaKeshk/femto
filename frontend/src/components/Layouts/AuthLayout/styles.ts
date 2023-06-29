import { CSSObject } from "@mantine/core";
export const styles = () => ({
  centerL: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingRight: 15,
  } as CSSObject,
  centerR: (theme: any): CSSObject => ({
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [`@media (max-width: ${theme.breakpoints.lg})`]: { display: "none" },
  }),
});
