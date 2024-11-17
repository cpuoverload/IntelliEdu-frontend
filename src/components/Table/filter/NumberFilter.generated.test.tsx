import renderer from 'react-test-renderer';
import { NumberInput } from "@mantine/core";
import { useDebouncedCallback } from "@mantine/hooks";
import debounceTime from "@/const/debounce";
import Index from "./NumberFilter";

jest.mock("@mantine/core");
jest.mock("@mantine/hooks");
jest.mock("@/const/debounce");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index  
      placeholder={/* string */}  
      requestParamName={/* string */}  
      setRequestParams={/* React.Dispatch<React.SetStateAction<T>> */}  
      requestParams={/* T */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<Index  
      placeholder={/* string */}  
      requestParamName={/* string */}  
      setRequestParams={/* React.Dispatch<React.SetStateAction<T>> */}  
      requestParams={/* T */} 
    />).toJSON()).toMatchSnapshot();
  });
});