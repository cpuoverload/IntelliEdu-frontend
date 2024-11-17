import renderer from 'react-test-renderer';
import { Navigate, useLocation } from "react-router-dom";
import useStore from "@/store/store";
import RequireAuth from "./RequireAuth";

jest.mock("react-router-dom");
jest.mock("@/store/store");

const renderTree = tree => renderer.create(tree);
describe('<RequireAuth>', () => {
  it('should render component', () => {
    expect(renderTree(<RequireAuth  
      role={/* string[] */}  
      children={/* React.ReactNode */} 
    />).toJSON()).toMatchSnapshot();
  });
  it('should render component with props', () => {
    expect(renderTree(<RequireAuth  
      role={/* string[] */}  
      children={/* React.ReactNode */} 
    />).toJSON()).toMatchSnapshot();
  });
});