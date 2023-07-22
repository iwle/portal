import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { DatasetsTable } from "./components/table/Datasets";
import { UsersTable } from "./components/table/Users";
import Home from "./components/landing-page/Home";
const theme = extendTheme({
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard selected="Home" children={<Home />} />,
  },
  {
    path: "/users",
    element: <Dashboard selected="Users" children={<UsersTable />} />,
  },
  {
    path: "/datasets",
    element: <Dashboard selected="Datasets" children={<DatasetsTable />} />,
  },
  {
    path: "/favorites",
    element: <Dashboard selected="Favorites" children={<></>} />
  },
  {
    path: "/settings",
    element: <Dashboard selected="Settings" children={<></>} />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <Dashboard selected="404" children={<p>Error 404: Page not found</p>} />
  }
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
