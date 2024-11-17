import renderer from 'react-test-renderer';
import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  LoadingOverlay,
} from "@mantine/core";
import { useForm, hasLength } from "@mantine/form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { USERNAME, PASSWORD } from "@/const/formItem";
import { login } from "@/services/user/userController";
import notification from "@/utils/notification";
import useStore from "@/store/store";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("react-router-dom");
jest.mock("@/const/formItem");
jest.mock("@/services/user/userController");
jest.mock("@/utils/notification");
jest.mock("@/store/store");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});