import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import { Table } from "./components/Table/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard children={undefined} />,
  },
  {
    path: "/x",
    element: <Dashboard children={<p>Youareasdasd</p>} />,
  },
  {
    path: "/tables",
    element: <Dashboard children={<Table />} />,
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
