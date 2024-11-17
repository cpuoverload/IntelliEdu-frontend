import renderer from 'react-test-renderer';
import { Tooltip, Text } from "@mantine/core";
import TruncatedText from "./index";

jest.mock("@mantine/core");

const renderTree = tree => renderer.create(tree);
describe('<TruncatedText>', () => {
  it('should render component', () => {
    expect(renderTree(<TruncatedText  
      text={/* string */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<TruncatedText  
      text={/* string */}  
      width={/* number | string */}  
      textProps={/* React.ComponentProps<typeof Text> */} 
    />).toJSON()).toMatchSnapshot();
  });
});