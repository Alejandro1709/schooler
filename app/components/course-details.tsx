function CourseDetails() {
  return (
    <section className="flex flex-col gap-4 flex-1 overflow-scroll">
      {/* Course Details Header */}
      <header>
        <h1 className="text-3xl font-bold">Curso: Matemática</h1>
        <h2 className="text-lg">
          Profesor:{" "}
          <a className="text-[#355ADE] font-semibold hover:underline" href="#">
            Antonio Ruiz
          </a>
        </h2>
        <h2>Código: LM-207</h2>
      </header>
      {/* Course Details Header */}

      {/* Course Details Alumnos List */}
      <div className="flex flex-col gap-2 h-96 overflow-scroll">
        <article className="flex flex-row justify-between items-center bg-white border p-4 rounded-md">
          <div className="flex flex-col">
            <h2 className="font-semibold">Alejandro La Rosa</h2>
            <p className="text-gray-400 text-pretty md:text-sm">
              Estudiante de Desarrollo de Software
            </p>
          </div>
          <button className="bg-[#355ADE] px-4 py-1 text-white rounded-md hover:bg-[#2b4ed0]">
            Ver
          </button>
        </article>
      </div>
      {/* Course Details Alumnos List */}
    </section>
  );
}

export default CourseDetails;
