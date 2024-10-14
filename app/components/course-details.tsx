"use client";

import { useCourseStore } from "@/stores/course-store";
import Link from "next/link";

function CourseDetails() {
  const selectedCourse = useCourseStore((state) => state.selectedCourse);

  return (
    <section className="flex flex-col gap-4 flex-1 overflow-scroll">
      {/* Course Details Header */}
      <header>
        <h1 className="text-3xl font-bold">
          Curso: {selectedCourse?.title ?? "Unknown"}
        </h1>
        <h2 className="text-lg">
          Profesor:{" "}
          <Link
            className="text-[#355ADE] font-semibold hover:underline"
            href={`/teachers/${selectedCourse?.teacher.id}`}
          >
            {selectedCourse?.teacher.firstName}{" "}
            {selectedCourse?.teacher.lastName}
          </Link>
        </h2>
        <h2>Código: LM-207</h2>
      </header>
      {/* Course Details Header */}

      {/* Course Details Alumnos List */}
      <div className="flex flex-col gap-2 h-96 overflow-scroll">
        {selectedCourse?.students && selectedCourse?.students.length > 0 ? (
          selectedCourse?.students.map((student) => (
            <article
              className="flex flex-row justify-between items-center bg-white border p-4 rounded-md"
              key={student.id}
            >
              <div className="flex flex-col">
                <h2 className="font-semibold">
                  {student.firstName} {student.lastName}
                </h2>
                <p className="text-gray-400 text-pretty md:text-sm">
                  {student.email}
                </p>
              </div>
              <button className="bg-[#355ADE] px-4 py-1 text-white rounded-md hover:bg-[#2b4ed0]">
                Ver
              </button>
            </article>
          ))
        ) : (
          <p>No Students</p>
        )}
      </div>
      {/* Course Details Alumnos List */}
    </section>
  );
}

export default CourseDetails;
