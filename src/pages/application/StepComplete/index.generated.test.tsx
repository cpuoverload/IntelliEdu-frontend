import renderer from 'react-test-renderer';
import { Button, Group, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ApplicationStep from "@/components/ApplicationStep";
import useOperation from "@/hooks/useOperation";
import styles from "./style.module.less";
import Index from "./index";

jest.mock("@mantine/core");
jest.mock("react-router-dom");
jest.mock("@/components/ApplicationStep");
jest.mock("@/hooks/useOperation");
jest.mock("./style.module.less");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});