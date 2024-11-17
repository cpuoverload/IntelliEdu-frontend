import renderer from 'react-test-renderer';
import { RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { Center, Loader } from "@mantine/core";
import router from "@/routes/router";
import { getMyInfo } from "@/services/user/userController";
import useStore from "@/store/store";
import { App } from "./App";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("@/routes/router");
jest.mock("@/services/user/userController");
jest.mock("@/store/store");

const renderTree = tree => renderer.create(tree);
describe('<App>', () => {
  it('should render component', () => {
    expect(renderTree(<App 
    />).toJSON()).toMatchSnapshot();
  });
  
});