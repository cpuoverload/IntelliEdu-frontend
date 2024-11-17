import { useLocation } from "react-router-dom";
import useOperation from "./useOperation";

jest.mock("react-router-dom");

describe('useOperation', () => {
  it('should expose a function', () => {
		expect(useOperation).toBeDefined();
	});
  
  it('useOperation should return expected output', () => {
    // const retValue = useOperation();
    expect(false).toBeTruthy();
  });
});