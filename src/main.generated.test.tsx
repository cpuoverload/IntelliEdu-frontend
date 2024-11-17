import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App.tsx";



import  from "./main";

jest.mock("react-dom/client");
jest.mock("@mantine/core");
jest.mock("@mantine/notifications");
jest.mock("./App.tsx");
jest.mock("@mantine/core/styles.css");
jest.mock("@mantine/notifications/styles.css");
jest.mock("mantine-datatable/styles.css");