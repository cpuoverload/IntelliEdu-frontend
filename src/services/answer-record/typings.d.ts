declare namespace Answer {
  type AddMyAnswerRequest = {
    appId?: number;
    answers?: string[];
  };

  type AnswerRecordVo = {
    id?: number;
    userId?: number;
    appId?: number;
    appType?: number;
    strategy?: number;
    answers?: string[];
    resultId?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultGrade?: number;
    createTime?: string;
    updateTime?: string;
  };

  type ApiResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type ApiResponsePageAnswerRecordVo = {
    code?: number;
    data?: PageAnswerRecordVo;
    message?: string;
  };

  type IdRequest = {
    id?: number;
  };

  type ListAnswerRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    id?: number;
    userId?: number;
    appId?: number;
    appType?: number;
    strategy?: number;
    resultId?: number;
    resultGrade?: number;
  };

  type ListMyAnswerRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageAnswerRecordVo = {
    records?: AnswerRecordVo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: boolean;
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };
}
