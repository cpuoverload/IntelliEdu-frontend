declare namespace App {
  type AddMyAppRequest = {
    appName?: string;
    description?: string;
    imageUrl?: string;
    type?: number;
    strategy?: number;
  };

  type AddMyQuestionRequest = {
    questions?: QuestionContent[];
    appId?: number;
  };

  type ApiResponseApplication = {
    code?: number;
    data?: Application;
    message?: string;
  };

  type ApiResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type ApiResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type ApiResponsePageApplicationVo = {
    code?: number;
    data?: PageApplicationVo;
    message?: string;
  };

  type ApiResponsePageQuestionVo = {
    code?: number;
    data?: PageQuestionVo;
    message?: string;
  };

  type ApiResponseQuestion = {
    code?: number;
    data?: Question;
    message?: string;
  };

  type ApiResponseQuestionVo = {
    code?: number;
    data?: QuestionVo;
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

  type ApplicationVo = {
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
    userVo?: UserVo;
  };

  type AuditAppRequest = {
    id?: number;
    auditStatus?: number;
    auditMessage?: string;
  };

  type getApplicationByIdParams = {
    id: number;
  };

  type GetMyQuestionRequest = {
    appId?: number;
  };

  type GetPublicQuestionRequest = {
    appId?: number;
  };

  type getQuestionByIdParams = {
    id: number;
  };

  type IdRequest = {
    id?: number;
  };

  type ListAppRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    id?: number;
    appName?: string;
    type?: number;
    strategy?: number;
    userId?: number;
    auditStatus?: number;
    auditorId?: number;
  };

  type ListMyAppRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    id?: number;
  };

  type ListPublicAppRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    appName?: string;
  };

  type ListQuestionRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    id?: number;
    appId?: number;
    userId?: number;
  };

  type Option = {
    key?: string;
    value?: string;
    grade?: number;
    evaluation?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageApplicationVo = {
    records?: ApplicationVo[];
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

  type PageQuestionVo = {
    records?: QuestionVo[];
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

  type Question = {
    id?: number;
    questions?: QuestionContent[];
    appId?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    deleted?: number;
  };

  type QuestionContent = {
    title?: string;
    options?: Option[];
  };

  type QuestionVo = {
    id?: number;
    questions?: QuestionContent[];
    appId?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
  };

  type UpdateAppRequest = {
    id?: number;
    appName?: string;
    description?: string;
    imageUrl?: string;
  };

  type UpdateMyAppRequest = {
    id?: number;
    appName?: string;
    description?: string;
    imageUrl?: string;
    type?: number;
    strategy?: number;
  };

  type UpdateMyQuestionRequest = {
    id?: number;
    questions?: QuestionContent[];
  };

  type UpdateQuestionRequest = {
    id?: number;
    questions?: QuestionContent[];
  };

  type UserVo = {
    id?: number;
    username?: string;
    nickname?: string;
    avatar?: string;
    role?: string;
    createTime?: string;
    updateTime?: string;
  };
}
