declare namespace API {
  type AddRequest = {
    username?: string;
    password?: string;
    nickname?: string;
    role?: string;
  };

  type ApiResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type ApiResponseListUserVo = {
    code?: number;
    data?: UserVo[];
    message?: string;
  };

  type ApiResponseLong = {
    code?: number;
    data?: number;
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

  type RegisterRequest = {
    username?: string;
    password?: string;
  };

  type UpdateMyInfoRequest = {
    password?: string;
    nickname?: string;
  };

  type UpdateRequest = {
    id?: number;
    password?: string;
    nickname?: string;
    role?: string;
  };

  type UserVo = {
    id?: number;
    username?: string;
    nickname?: string;
    role?: string;
  };
}
