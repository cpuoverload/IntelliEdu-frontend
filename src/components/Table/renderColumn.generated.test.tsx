import { Avatar, Badge, Image } from "@mantine/core";
import { AppType, AuditStatus, ScoringStrategy } from "@/const/enum";
import formatDate from "@/utils/formatDate";
import TruncatedText from "../TruncatedText";
import { renderAppType, renderImage, renderAvatar, renderRole, renderTime, renderStrategy, renderAuditStatus, renderTruncatedText } from "./renderColumn";

jest.mock("@mantine/core");
jest.mock("@/const/enum");
jest.mock("@/utils/formatDate");
jest.mock("../TruncatedText");

describe('renderAppType', () => {
  it('should expose a function', () => {
		expect(renderAppType).toBeDefined();
	});
  
  it('renderAppType should return expected output', () => {
    // const retValue = renderAppType(type);
    expect(false).toBeTruthy();
  });
});
describe('renderImage', () => {
  it('should expose a function', () => {
		expect(renderImage).toBeDefined();
	});
  
  it('renderImage should return expected output', () => {
    // const retValue = renderImage(url);
    expect(false).toBeTruthy();
  });
});
describe('renderAvatar', () => {
  it('should expose a function', () => {
		expect(renderAvatar).toBeDefined();
	});
  
  it('renderAvatar should return expected output', () => {
    // const retValue = renderAvatar(avatarUrl,nickname);
    expect(false).toBeTruthy();
  });
});
describe('renderRole', () => {
  it('should expose a function', () => {
		expect(renderRole).toBeDefined();
	});
  
  it('renderRole should return expected output', () => {
    // const retValue = renderRole(role);
    expect(false).toBeTruthy();
  });
});
describe('renderTime', () => {
  it('should expose a function', () => {
		expect(renderTime).toBeDefined();
	});
  
  it('renderTime should return expected output', () => {
    // const retValue = renderTime(time);
    expect(false).toBeTruthy();
  });
});
describe('renderStrategy', () => {
  it('should expose a function', () => {
		expect(renderStrategy).toBeDefined();
	});
  
  it('renderStrategy should return expected output', () => {
    // const retValue = renderStrategy(strategy);
    expect(false).toBeTruthy();
  });
});
describe('renderAuditStatus', () => {
  it('should expose a function', () => {
		expect(renderAuditStatus).toBeDefined();
	});
  
  it('renderAuditStatus should return expected output', () => {
    // const retValue = renderAuditStatus(auditStatus);
    expect(false).toBeTruthy();
  });
});
describe('renderTruncatedText', () => {
  it('should expose a function', () => {
		expect(renderTruncatedText).toBeDefined();
	});
  
  it('renderTruncatedText should return expected output', () => {
    // const retValue = renderTruncatedText(text);
    expect(false).toBeTruthy();
  });
});