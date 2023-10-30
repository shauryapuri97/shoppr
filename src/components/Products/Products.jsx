import React, { useEffect } from "react";
import { ViewRenderer } from "../../shared/components/ViewRenderer";
import {
  getAllProductCategories,
  getProducts,
} from "../../store/thunks/configThunk";
import Blotter from "../../shared/components/Blotter/Blotter";
import {
  PriceColumn,
  RatingColumn,
  TitleColumn,
  CategoryColumn,
  ImageColumn,
} from "../../shared/constants/gridConstants";
import { useActionsColumn } from "../../shared/components/Blotter/hooks/useActionsColumn";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { setisCreating } from "../../store/slices/configSlice";
import NewProductDialog from "../NewProductDialog";

const PRODUCTS_COLUMNS = [
  ImageColumn,
  TitleColumn,
  CategoryColumn,
  PriceColumn,
  RatingColumn,
];

const Products = () => {
  const dispatch = useDispatch();

  const columns = useActionsColumn(PRODUCTS_COLUMNS);

  useEffect(() => {
    dispatch(getAllProductCategories());
  }, []);

  return (
    <ViewRenderer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <h2>Products</h2>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => dispatch(setisCreating(true))}
        >
          New
        </Button>
      </Box>
      <Blotter fetchRequest={getProducts()} columns={columns} />
      <NewProductDialog />
    </ViewRenderer>
  );
};

export default Products;
