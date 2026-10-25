import { makeStyles, tokens } from "@fluentui/react-components";

export const useStyles = makeStyles({
  page: {
    padding: tokens.spacingHorizontalXXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXL,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  muted: {
    color: tokens.colorNeutralForeground3,
  },
  skeletonTitle: {
    width: "200px",
    height: "32px",
  },
  skeletonCards: {
    height: "128px",
  },
  skeletonTable: {
    height: "256px",
  },
});
