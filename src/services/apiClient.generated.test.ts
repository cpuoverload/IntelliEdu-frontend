import axios, { AxiosResponse, AxiosError } from "axios";
import ErrorMap from "@/const/error";
import notification from "@/utils/notification";
import useStore from "@/store/store";
import  from "./apiClient";

jest.mock("axios");
jest.mock("@/const/error");
jest.mock("@/utils/notification");
jest.mock("@/store/store");