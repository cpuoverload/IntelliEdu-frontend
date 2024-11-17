import { useState } from "react";
import notification from "@/utils/notification";
import { listMyApplication } from "@/services/application/applicationController";
import { AppType, ScoringStrategy } from "@/const/enum";
import { useAppProperty, checkAppId, checkAppExistAndSetAppProperty } from "./util";

jest.mock("@/utils/notification");
jest.mock("@/services/application/applicationController");
jest.mock("@/const/enum");

describe('useAppProperty', () => {
  it('should expose a function', () => {
		expect(useAppProperty).toBeDefined();
	});
  
  it('useAppProperty should return expected output', () => {
    // const retValue = useAppProperty();
    expect(false).toBeTruthy();
  });
});
describe('checkAppId', () => {
  it('should expose a function', () => {
		expect(checkAppId).toBeDefined();
	});
  
  it('checkAppId should return expected output', () => {
    // const retValue = checkAppId(appId);
    expect(false).toBeTruthy();
  });
});
describe('checkAppExistAndSetAppProperty', () => {
  it('should expose a function', () => {
		expect(checkAppExistAndSetAppProperty).toBeDefined();
	});
  
  it('checkAppExistAndSetAppProperty should return expected output', async () => {
    // const retValue = await checkAppExistAndSetAppProperty(appId,setAppProperty);
    expect(false).toBeTruthy();
  });
});