import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  LoadingOverlay,
  Modal,
  Select,
  TextInput,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { AVATAR, NICKNAME, ROLE } from "@/const/formItem";
import { updateUser } from "@/services/user/userController";
import notification from "@/utils/notification";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("@mantine/hooks");
jest.mock("@tabler/icons-react");
jest.mock("@/const/formItem");
jest.mock("@/services/user/userController");
jest.mock("@/utils/notification");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      record={/* User.UserVo */}  
      fetchData={/* () => Promise<void> */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      record={/* User.UserVo */}  
      fetchData={/* () => Promise<void> */} 
    />).toJSON()).toMatchSnapshot();
  });
});