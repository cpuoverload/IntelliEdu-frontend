import renderer from 'react-test-renderer';
import useOperation from "@/hooks/useOperation";
import { Stepper } from "@mantine/core";
import Index from "./index";

jest.mock("@/hooks/useOperation");
jest.mock("@mantine/core");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      active={/* number */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      active={/* number */} 
    />).toJSON()).toMatchSnapshot();
  });
});