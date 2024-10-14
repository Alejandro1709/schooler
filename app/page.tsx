import Carrousel from "./components/carrousel";
import CourseDetails from "./components/course-details";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 flex-1 bg-white p-6">
      <Carrousel />
      <CourseDetails />
    </main>
  );
}
