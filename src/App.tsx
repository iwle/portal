import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { Table } from "./components/table/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard children={undefined} />,
  },
  {
    path: "/users",
    element: <Dashboard children={<Table />} />,
  },
  {
    path: "/datasets",
    element: <Dashboard children={<Table />} />,
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
