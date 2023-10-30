import { ratingRenderer } from "../components/CellRenderers/ratingRenderer";
import { imageRenderer } from "../components/CellRenderers/imageRenderer";

export const TitleColumn = {
  field: "title",
  headerName: "Title",
  flex: 3,
  headerClassName: "header-theme",
};

export const CategoryColumn = {
  field: "category",
  headerName: "Category",
  headerClassName: "header-theme",
  flex: 1,
};

export const PriceColumn = {
  field: "price",
  headerName: "Price",
  headerClassName: "header-theme",
  flex: 1,
  type: 'number'
};

export const RatingColumn = {
  field: "rating",
  headerName: "Rating",
  flex: 1,
  headerClassName: "header-theme",
  renderCell: ratingRenderer,
  flex: 1,
  filterable: false,
};

export const ImageColumn = {
  field: "image",
  headerName: "",
  flex: 0.5,
  renderCell: imageRenderer,
  headerClassName: "header-theme",
  align: "center",
  filterable: false,
};
