import { useCallback, useState } from "react";
import type { AxiosResponse } from "axios";
import useTable from "./useTable";

jest.mock("axios");

describe('useTable', () => {
  it('should expose a function', () => {
		expect(useTable).toBeDefined();
	});
  
  it('useTable should return expected output', () => {
    // const retValue = useTable(request,initialRequestParams);
    expect(false).toBeTruthy();
  });
});