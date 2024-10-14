import { type CourseWithTeachers } from "@/types/course-types";
import { create } from "zustand";

type CourseStoreType = {
  selectedCourse?: CourseWithTeachers | null;
  setSelectedCourse: (course: CourseWithTeachers) => void;
};

export const useCourseStore = create<CourseStoreType>((set) => ({
  setSelectedCourse: (selectedCourse: CourseWithTeachers) =>
    set(() => ({ selectedCourse })),
}));
