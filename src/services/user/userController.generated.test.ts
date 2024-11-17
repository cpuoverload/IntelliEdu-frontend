import request from '@/services/apiClient';
import { addUser, deleteUser, getUserById, getMyInfo, listUser, login, logout, register, updateUser, updateMyInfo } from './userController';

jest.mock('@/services/apiClient');

describe('addUser', () => {
  it('should expose a function', () => {
		expect(addUser).toBeDefined();
	});
  
  it('addUser should return expected output', async () => {
    // const retValue = await addUser(body,options);
    expect(false).toBeTruthy();
  });
});
describe('deleteUser', () => {
  it('should expose a function', () => {
		expect(deleteUser).toBeDefined();
	});
  
  it('deleteUser should return expected output', async () => {
    // const retValue = await deleteUser(body,options);
    expect(false).toBeTruthy();
  });
});
describe('getUserById', () => {
  it('should expose a function', () => {
		expect(getUserById).toBeDefined();
	});
  
  it('getUserById should return expected output', async () => {
    // const retValue = await getUserById(params,options);
    expect(false).toBeTruthy();
  });
});
describe('getMyInfo', () => {
  it('should expose a function', () => {
		expect(getMyInfo).toBeDefined();
	});
  
  it('getMyInfo should return expected output', async () => {
    // const retValue = await getMyInfo(options);
    expect(false).toBeTruthy();
  });
});
describe('listUser', () => {
  it('should expose a function', () => {
		expect(listUser).toBeDefined();
	});
  
  it('listUser should return expected output', async () => {
    // const retValue = await listUser(body,options);
    expect(false).toBeTruthy();
  });
});
describe('login', () => {
  it('should expose a function', () => {
		expect(login).toBeDefined();
	});
  
  it('login should return expected output', async () => {
    // const retValue = await login(body,options);
    expect(false).toBeTruthy();
  });
});
describe('logout', () => {
  it('should expose a function', () => {
		expect(logout).toBeDefined();
	});
  
  it('logout should return expected output', async () => {
    // const retValue = await logout(options);
    expect(false).toBeTruthy();
  });
});
describe('register', () => {
  it('should expose a function', () => {
		expect(register).toBeDefined();
	});
  
  it('register should return expected output', async () => {
    // const retValue = await register(body,options);
    expect(false).toBeTruthy();
  });
});
describe('updateUser', () => {
  it('should expose a function', () => {
		expect(updateUser).toBeDefined();
	});
  
  it('updateUser should return expected output', async () => {
    // const retValue = await updateUser(body,options);
    expect(false).toBeTruthy();
  });
});
describe('updateMyInfo', () => {
  it('should expose a function', () => {
		expect(updateMyInfo).toBeDefined();
	});
  
  it('updateMyInfo should return expected output', async () => {
    // const retValue = await updateMyInfo(body,options);
    expect(false).toBeTruthy();
  });
});