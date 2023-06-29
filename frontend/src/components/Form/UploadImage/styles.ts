import { CSSObject } from "@mantine/core";

export const styles = (disabled: boolean) => ({
  flex: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  } as CSSObject,

  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    height: "105px",
    width: "105px",
    borderRadius: "100px",
    cursor: disabled ? "cursor" : "pointer",
    backgroundColor: "#fff",
    border: `7.5px solid black`,
  } as CSSObject,
  editIcon: {
    position: "absolute",
    zIndex: 1130,
    bottom: -10,
    right: -10,
    backgroundColor: "#fff",
    borderRadius: "50%",
    display: "flex",
    p: 0.5,
    opacity: 1,
  } as CSSObject,
  imageBox: {
    position: "relative",
    height: "100%",
    width: "100%",
  } as CSSObject,
  imageOverlay: {
    overflow: "hidden",
    borderRadius: "100px",
    height: "100%",
  } as CSSObject,
});
