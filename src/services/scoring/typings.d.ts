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
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
  };

  type UpdateScoringRequest = {
    id?: number;
    resultName?: string;
    resultDetail?: string;
    resultImageUrl?: string;
    resultThreshold?: number;
    resultAttributes?: string[];
  };
}
