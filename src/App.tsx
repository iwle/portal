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
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard children={<Home />} />,
  },
  {
    path: "/users",
    element: <Dashboard children={<UsersTable />} />,
  },
  {
    path: "/datasets",
    element: <Dashboard children={<DatasetsTable />} />,
  },
  {
    path: "/favorites",
    element: <Dashboard children={<></>} />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <Dashboard children={<p>Error 404: Page not found</p>} />
  }
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
