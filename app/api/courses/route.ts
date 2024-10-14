import prisma from "@/utils/prisma";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        teacher: true,
        students: true,
      },
    });
    return Response.json(courses);
  } catch (err) {
    console.log(err);
  }
}
