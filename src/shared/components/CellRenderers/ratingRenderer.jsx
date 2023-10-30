import { Rating } from "@mui/material";

export const ratingRenderer = (params) => (
  <Rating readOnly value={params.value} />
);
