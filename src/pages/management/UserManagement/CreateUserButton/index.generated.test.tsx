import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  LoadingOverlay,
  Modal,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { PASSWORD, USERNAME, NICKNAME, ROLE, AVATAR } from "@/const/formItem";
import { addUser } from "@/services/user/userController";
import notification from "@/utils/notification";
import { IconPlus } from "@tabler/icons-react";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("@mantine/hooks");
jest.mock("@/const/formItem");
jest.mock("@/services/user/userController");
jest.mock("@/utils/notification");
jest.mock("@tabler/icons-react");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      fetchData={/* () => Promise<void> */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      fetchData={/* () => Promise<void> */} 
    />).toJSON()).toMatchSnapshot();
  });
});