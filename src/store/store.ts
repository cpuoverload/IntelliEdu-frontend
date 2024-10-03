import { create, StateCreator } from "zustand";

interface LoginSlice {
  loginUser: any;
  setUser: (loginUser: any) => void;
  removeUser: () => void;
}

const loginSlice: StateCreator<LoginSlice, [], [], LoginSlice> = (set) => ({
  loginUser: false,
  setUser: (loginUser) => set(() => ({ loginUser })),
  removeUser: () => set(() => ({ loginUser: undefined })),
});

const useStore = create<LoginSlice>()((...a) => ({
  ...loginSlice(...a),
}));

export default useStore;
