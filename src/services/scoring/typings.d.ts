declare namespace Scoring {
  type AddMyScoringBatchRequest = {
    scorings?: AddMyScoringRequest[];
  };

  type AddMyScoringRequest = {
    appId?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
  };

  type AddScoringRequest = {
    appId?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
  };

  type AnswerRecord = {
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
    deleted?: number;
  };

  type ApiResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type ApiResponsePageScoringVo = {
    code?: number;
    data?: PageScoringVo;
    message?: string;
  };

  type Application = {
    id?: number;
    appName?: string;
    description?: string;
    imageUrl?: string;
    type?: number;
    strategy?: number;
    userId?: number;
    auditStatus?: number;
    auditorId?: number;
    auditMessage?: string;
    auditTime?: string;
    createTime?: string;
    updateTime?: string;
    deleted?: number;
  };

  type DoScoreRequest = {
    application?: Application;
    answerList?: string[];
  };

  type getAppByIdTestParams = {
    id: number;
  };

  type IdRequest = {
    id?: number;
  };

  type ListMyScoringRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    appId?: number;
  };

  type ListScoringRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    appId?: number;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageScoringVo = {
    records?: ScoringVo[];
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

  type ScoringVo = {
    id?: number;
    appId?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
    userId?: number;
    createTime?: string;
    updateTime?: string;
  };

  type UpdateMyScoringRequest = {
    id?: number;
    appId?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
  };

  type UpdateScoringRequest = {
    id?: number;
    appId?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
  };
}
