declare namespace API {
  type AddRequest = {
    username?: string;
    password?: string;
    nickname?: string;
    avatar?: string;
    role?: string;
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

  type ApiResponsePageUserVo = {
    code?: number;
    data?: PageUserVo;
    message?: string;
  };

  type ApiResponseUserVo = {
    code?: number;
    data?: UserVo;
    message?: string;
  };

  type getUserByIdParams = {
    id: number;
  };

  type IdRequest = {
    id?: number;
  };

  type ListRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    isAscend?: boolean;
    id?: number;
    username?: string;
    nickname?: string;
    role?: string;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageUserVo = {
    records?: UserVo[];
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

  type RegisterRequest = {
    username?: string;
    password?: string;
  };

  type UpdateMyInfoRequest = {
    password?: string;
    nickname?: string;
    avatar?: string;
  };

  type UpdateRequest = {
    id?: number;
    password?: string;
    nickname?: string;
    avatar?: string;
    role?: string;
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
