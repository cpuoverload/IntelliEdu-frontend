import renderer from 'react-test-renderer';
import { Link } from "react-router-dom";
import { Box, Button, Group, Image, Text } from "@mantine/core";
import AvatarMenu from "@/components/AvatarMenu";
import useStore from "@/store/store";
import logo from "@/assets/logo.svg";
import Index from "./index";

jest.mock("react-router-dom");
jest.mock("@mantine/core");
jest.mock("@/components/AvatarMenu");
jest.mock("@/store/store");
jest.mock("@/assets/logo.svg");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});