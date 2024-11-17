import renderer from 'react-test-renderer';
import notification from "@/utils/notification";
import { Button } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import Index from "./index";

jest.mock("@/utils/notification");
jest.mock("@mantine/core");
jest.mock("@tabler/icons-react");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});