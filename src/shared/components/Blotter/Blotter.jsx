import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  selectRowData,
  selectIsLoading,
  clearRowData,
} from "../../../store/slices/configSlice";
import { Skeleton } from "@mui/material";
import { batch } from "react-redux";

const Blotter = ({ fetchRequest, columns, pageSize = 10 }) => {
  const dispatch = useDispatch();

  const rows = useSelector(selectRowData) ?? [];
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    batch(() => {
      dispatch(clearRowData());
      dispatch(fetchRequest);
    });
  }, []);

  return !isLoading ? (
    <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize,
            },
          },
        }}
        pageSizeOptions={[pageSize]}
        disableRowSelectionOnClick
        getRowId={(row) => row.id}
        sx={{
          "& .header-theme": {
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            fontWeight: "bold",
          },
        }}
        slots={{ toolbar: GridToolbar }}
      />
  ) : (
    <Skeleton variant="rectangular" height={700} />
  );
};

export default Blotter;
