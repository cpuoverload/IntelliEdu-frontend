import request from '@/services/apiClient';
import { addMyAnswerRecord, deleteAnswerRecord, getAnswerRecordById, listAnswerRecord, listMyAnswerRecord } from './answerRecordController';

jest.mock('@/services/apiClient');

describe('addMyAnswerRecord', () => {
  it('should expose a function', () => {
		expect(addMyAnswerRecord).toBeDefined();
	});
  
  it('addMyAnswerRecord should return expected output', async () => {
    // const retValue = await addMyAnswerRecord(body,options);
    expect(false).toBeTruthy();
  });
});
describe('deleteAnswerRecord', () => {
  it('should expose a function', () => {
		expect(deleteAnswerRecord).toBeDefined();
	});
  
  it('deleteAnswerRecord should return expected output', async () => {
    // const retValue = await deleteAnswerRecord(body,options);
    expect(false).toBeTruthy();
  });
});
describe('getAnswerRecordById', () => {
  it('should expose a function', () => {
		expect(getAnswerRecordById).toBeDefined();
	});
  
  it('getAnswerRecordById should return expected output', async () => {
    // const retValue = await getAnswerRecordById(params,options);
    expect(false).toBeTruthy();
  });
});
describe('listAnswerRecord', () => {
  it('should expose a function', () => {
		expect(listAnswerRecord).toBeDefined();
	});
  
  it('listAnswerRecord should return expected output', async () => {
    // const retValue = await listAnswerRecord(body,options);
    expect(false).toBeTruthy();
  });
});
describe('listMyAnswerRecord', () => {
  it('should expose a function', () => {
		expect(listMyAnswerRecord).toBeDefined();
	});
  
  it('listMyAnswerRecord should return expected output', async () => {
    // const retValue = await listMyAnswerRecord(body,options);
    expect(false).toBeTruthy();
  });
});