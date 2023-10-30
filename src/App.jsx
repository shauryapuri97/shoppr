import { UsernameContext } from "./shared/contexts/UsernameContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products/Products";
import SideNav from "./shared/components/SideNav/SideNav";
import ActionDialog from "./components/ActionDialog/ActionDialog";
import Users from "./components/Users";

const PATHS = [
  { path: "/", Component: Products },
  { path: "/users", Component: Users },
];

const DARK_THEME = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <UsernameContext.Provider value={"testuser@shoppr.io"}>
      <ThemeProvider theme={DARK_THEME}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <BrowserRouter>
            <SideNav />
            <Routes>
              {PATHS.map(({ path, Component }) => (
                <Route key={path} path={path} exact element={<Component />} />
              ))}
            </Routes>
          </BrowserRouter>
        </Box>
        <ActionDialog />
      </ThemeProvider>
    </UsernameContext.Provider>
  );
}

export default App;
