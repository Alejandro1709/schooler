"use client";

import { useQuery } from "@tanstack/react-query";
import { useCourseStore } from "@/stores/course-store";
import { CourseWithTeachers } from "@/types/course-types";

function Carrousel() {
  const setSelectedCourse = useCourseStore((state) => state.setSelectedCourse);

  const fetchCourses = async (): Promise<CourseWithTeachers[]> => {
    const res = await fetch("/api/courses");
    const data = await res.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <nav
      className="flex flex-row gap-2 items-center text-white h-[60px] overflow-scroll"
      role="navigation"
    >
      {data &&
        data.map((d) => (
          <button
            className="bg-[#355ADE] p-2 rounded-md hover:bg-[#2b4ed0]"
            key={d.id}
            onClick={() => setSelectedCourse(d)}
          >
            {d.title}
          </button>
        ))}
    </nav>
  );
}

export default Carrousel;
