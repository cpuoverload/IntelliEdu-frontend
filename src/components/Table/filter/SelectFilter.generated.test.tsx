import renderer from 'react-test-renderer';
import { Select } from "@mantine/core";
import Index from "./SelectFilter";

jest.mock("@mantine/core");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      placeholder={/* string */}  
      requestParamName={/* string */}  
      setRequestParams={/* React.Dispatch<React.SetStateAction<T>> */}  
      options={/* React.ComponentProps<typeof Select>["data"] */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      placeholder={/* string */}  
      requestParamName={/* string */}  
      setRequestParams={/* React.Dispatch<React.SetStateAction<T>> */}  
      options={/* React.ComponentProps<typeof Select>["data"] */}  
      valueType={/* "string" | "number" */} 
    />).toJSON()).toMatchSnapshot();
  });
});