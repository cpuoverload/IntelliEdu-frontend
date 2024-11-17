import { forwardRef } from "react";
import { Avatar, Menu, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import useStore from "@/store/store";
import { logout } from "@/services/user/userController";
import notification from "@/utils/notification";
import ProfileModal from "./ProfileModal";
import  from "./index";

jest.mock("@mantine/core");
jest.mock("@mantine/hooks");
jest.mock("@tabler/icons-react");
jest.mock("react-router-dom");
jest.mock("@/store/store");
jest.mock("@/services/user/userController");
jest.mock("@/utils/notification");
jest.mock("./ProfileModal");