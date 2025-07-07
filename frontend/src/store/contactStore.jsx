import { create } from "zustand";

const useContactStore = create((set) => ({
  formData: {
    name: "",
    email: "",
    message: "",
  },
  setFormData: (field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),
  resetForm: () =>
    set({
      formData: {
        name: "",
        email: "",
        message: "",
      },
    }),
}));

export default useContactStore;