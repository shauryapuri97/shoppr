import { Avatar } from "@mui/material";

export const imageRenderer = (params) => {
  return (
    <Avatar alt={params.row.title} src={params.value}>
      {params.row.title[0]}
    </Avatar>
  );
};
