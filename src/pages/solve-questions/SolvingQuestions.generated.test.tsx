import renderer from 'react-test-renderer';
import { useParams } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import QuestionsForm from "./components/QuestionsForm";
import Index from "./SolvingQuestions";

jest.mock("react-router-dom");
jest.mock("./components/AppHeader");
jest.mock("./components/QuestionsForm");

const renderTree = tree => renderer.create(tree);
describe('<Index>', () => {
  it('should render component', () => {
    expect(renderTree(<Index 
    />).toJSON()).toMatchSnapshot();
  });
  
});