import renderer from 'react-test-renderer';
import { NavLink as RouterNavLink } from "react-router-dom";
import { Box, Divider, NavLink } from "@mantine/core";
import cx from "clsx";
import type { Config } from "@/routes/router";
import useStore from "@/store/store";
import { navRoutes } from "@/routes/router";
import styles from "./style.module.less";
import Navbar from "./index";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("clsx");
jest.mock("@/routes/router");
jest.mock("@/store/store");
jest.mock("@/routes/router");
jest.mock("./style.module.less");

const renderTree = tree => renderer.create(tree);
describe('<Navbar>', () => {
  it('should render component', () => {
    expect(renderTree(<Navbar 
    />).toJSON()).toMatchSnapshot();
  });
  
});