import request from '@/services/apiClient';
import { addMyQuestion, aiGenerateQuestionSse, deleteQuestion, deleteMyQuestion, getQuestionById, getMyQuestionOfOneApp, getPublicQuestionOfOneApp, listQuestion, updateQuestion, updateMyQuestion } from './questionController';

jest.mock('@/services/apiClient');

describe('addMyQuestion', () => {
  it('should expose a function', () => {
		expect(addMyQuestion).toBeDefined();
	});
  
  it('addMyQuestion should return expected output', async () => {
    // const retValue = await addMyQuestion(body,options);
    expect(false).toBeTruthy();
  });
});
describe('aiGenerateQuestionSse', () => {
  it('should expose a function', () => {
		expect(aiGenerateQuestionSse).toBeDefined();
	});
  
  it('aiGenerateQuestionSse should return expected output', async () => {
    // const retValue = await aiGenerateQuestionSse(params,options);
    expect(false).toBeTruthy();
  });
});
describe('deleteQuestion', () => {
  it('should expose a function', () => {
		expect(deleteQuestion).toBeDefined();
	});
  
  it('deleteQuestion should return expected output', async () => {
    // const retValue = await deleteQuestion(body,options);
    expect(false).toBeTruthy();
  });
});
describe('deleteMyQuestion', () => {
  it('should expose a function', () => {
		expect(deleteMyQuestion).toBeDefined();
	});
  
  it('deleteMyQuestion should return expected output', async () => {
    // const retValue = await deleteMyQuestion(body,options);
    expect(false).toBeTruthy();
  });
});
describe('getQuestionById', () => {
  it('should expose a function', () => {
		expect(getQuestionById).toBeDefined();
	});
  
  it('getQuestionById should return expected output', async () => {
    // const retValue = await getQuestionById(params,options);
    expect(false).toBeTruthy();
  });
});
describe('getMyQuestionOfOneApp', () => {
  it('should expose a function', () => {
		expect(getMyQuestionOfOneApp).toBeDefined();
	});
  
  it('getMyQuestionOfOneApp should return expected output', async () => {
    // const retValue = await getMyQuestionOfOneApp(body,options);
    expect(false).toBeTruthy();
  });
});
describe('getPublicQuestionOfOneApp', () => {
  it('should expose a function', () => {
		expect(getPublicQuestionOfOneApp).toBeDefined();
	});
  
  it('getPublicQuestionOfOneApp should return expected output', async () => {
    // const retValue = await getPublicQuestionOfOneApp(body,options);
    expect(false).toBeTruthy();
  });
});
describe('listQuestion', () => {
  it('should expose a function', () => {
		expect(listQuestion).toBeDefined();
	});
  
  it('listQuestion should return expected output', async () => {
    // const retValue = await listQuestion(body,options);
    expect(false).toBeTruthy();
  });
});
describe('updateQuestion', () => {
  it('should expose a function', () => {
		expect(updateQuestion).toBeDefined();
	});
  
  it('updateQuestion should return expected output', async () => {
    // const retValue = await updateQuestion(body,options);
    expect(false).toBeTruthy();
  });
});
describe('updateMyQuestion', () => {
  it('should expose a function', () => {
		expect(updateMyQuestion).toBeDefined();
	});
  
  it('updateMyQuestion should return expected output', async () => {
    // const retValue = await updateMyQuestion(body,options);
    expect(false).toBeTruthy();
  });
});