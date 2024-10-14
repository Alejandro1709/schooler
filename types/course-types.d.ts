import { Prisma } from "@prisma/client";

const courseWithTeacher = Prisma.validator<Prisma.CourseDefaultArgs>()({
  include: { teacher: true, students: true },
});

export type CourseWithTeachers = Prisma.CourseGetPayload<
  typeof courseWithTeacher
>;
