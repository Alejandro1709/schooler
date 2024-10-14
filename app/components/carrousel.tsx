function Carrousel() {
  return (
    <nav
      className="flex flex-row gap-2 items-center text-white h-[60px] overflow-scroll"
      role="navigation"
    >
      <button className="bg-[#355ADE] p-2 rounded-md hover:bg-[#2b4ed0]">
        Matemática
      </button>
    </nav>
  );
}

export default Carrousel;
