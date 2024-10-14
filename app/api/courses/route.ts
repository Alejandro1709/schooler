import prisma from "@/utils/prisma";

export async function GET() {
  try {
    const courses = await prisma.course.findMany();
    return Response.json(courses);
  } catch (err) {
    console.log(err);
  }
}
