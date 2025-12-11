import { create } from "zustand";

export const useSelectedCategory = create((set) => ({
    selectedCategory: null,
    setSelectedCategory: (category) => set ( {selectedCategory: category})
}))