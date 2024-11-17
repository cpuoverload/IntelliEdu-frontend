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
import { Link, useNavigate } from "react-router-dom";
import { USERNAME, PASSWORD } from "@/const/formItem";
import { register } from "@/services/user/userController";
import notification from "@/utils/notification";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("@mantine/form");
jest.mock("react-router-dom");
jest.mock("@/const/formItem");
jest.mock("@/services/user/userController");
jest.mock("@/utils/notification");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});