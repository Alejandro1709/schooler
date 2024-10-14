"use client";

import { Course } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

function Carrousel() {
  const fetchCourses = async (): Promise<Course[]> => {
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

  console.log(data);
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
          >
            {d.title}
          </button>
        ))}
    </nav>
  );
}

export default Carrousel;
