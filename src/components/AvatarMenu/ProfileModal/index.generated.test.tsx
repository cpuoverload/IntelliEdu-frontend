import renderer from 'react-test-renderer';
import { useEffect, useState } from "react";
import { Box, Button, LoadingOverlay, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AVATAR, NICKNAME } from "@/const/formItem";
import notification from "@/utils/notification";
import useStore from "@/store/store";
import { updateMyInfo } from "@/services/user/userController";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("@/const/formItem");
jest.mock("@/utils/notification");
jest.mock("@/store/store");
jest.mock("@/services/user/userController");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      opened={/* boolean */}  
      close={/* () => void */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      opened={/* boolean */}  
      close={/* () => void */} 
    />).toJSON()).toMatchSnapshot();
  });
});