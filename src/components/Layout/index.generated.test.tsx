import renderer from 'react-test-renderer';
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Layout from "./index";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("@/components/Header");
jest.mock("@/components/NavBar");

const renderTree = tree => renderer.create(tree);
describe('<Layout>', () => {
  it('should render component', () => {
    expect(renderTree(<Layout 
    />).toJSON()).toMatchSnapshot();
  });
  
});