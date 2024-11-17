import request from '@/services/apiClient';
import { addMyApplication, auditApplication, deleteApplication, deleteMyApplication, getApplicationById, listApplication, listMyApplication, listPublicApplication, updateApplication, updateMyApplication } from './applicationController';

jest.mock('@/services/apiClient');

describe('addMyApplication', () => {
  it('should expose a function', () => {
		expect(addMyApplication).toBeDefined();
	});
  
  it('addMyApplication should return expected output', async () => {
    // const retValue = await addMyApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('auditApplication', () => {
  it('should expose a function', () => {
		expect(auditApplication).toBeDefined();
	});
  
  it('auditApplication should return expected output', async () => {
    // const retValue = await auditApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('deleteApplication', () => {
  it('should expose a function', () => {
		expect(deleteApplication).toBeDefined();
	});
  
  it('deleteApplication should return expected output', async () => {
    // const retValue = await deleteApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('deleteMyApplication', () => {
  it('should expose a function', () => {
		expect(deleteMyApplication).toBeDefined();
	});
  
  it('deleteMyApplication should return expected output', async () => {
    // const retValue = await deleteMyApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('getApplicationById', () => {
  it('should expose a function', () => {
		expect(getApplicationById).toBeDefined();
	});
  
  it('getApplicationById should return expected output', async () => {
    // const retValue = await getApplicationById(params,options);
    expect(false).toBeTruthy();
  });
});
describe('listApplication', () => {
  it('should expose a function', () => {
		expect(listApplication).toBeDefined();
	});
  
  it('listApplication should return expected output', async () => {
    // const retValue = await listApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('listMyApplication', () => {
  it('should expose a function', () => {
		expect(listMyApplication).toBeDefined();
	});
  
  it('listMyApplication should return expected output', async () => {
    // const retValue = await listMyApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('listPublicApplication', () => {
  it('should expose a function', () => {
		expect(listPublicApplication).toBeDefined();
	});
  
  it('listPublicApplication should return expected output', async () => {
    // const retValue = await listPublicApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('updateApplication', () => {
  it('should expose a function', () => {
		expect(updateApplication).toBeDefined();
	});
  
  it('updateApplication should return expected output', async () => {
    // const retValue = await updateApplication(body,options);
    expect(false).toBeTruthy();
  });
});
describe('updateMyApplication', () => {
  it('should expose a function', () => {
		expect(updateMyApplication).toBeDefined();
	});
  
  it('updateMyApplication should return expected output', async () => {
    // const retValue = await updateMyApplication(body,options);
    expect(false).toBeTruthy();
  });
});