import { create, StateCreator } from "zustand";

interface LoginSlice {
  loginUser: User.UserVo | null;
  setUser: (loginUser: User.UserVo) => void;
  removeUser: () => void;
}

const loginSlice: StateCreator<LoginSlice, [], [], LoginSlice> = (set) => ({
  loginUser: null,
  setUser: (loginUser) => set(() => ({ loginUser })),
  removeUser: () => set(() => ({ loginUser: undefined })),
});

const useStore = create<LoginSlice>()((...a) => ({
  ...loginSlice(...a),
}));

export default useStore;
