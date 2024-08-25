export default function Pagination({
  paginationNumbers,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="gap-4 grid grid-cols-[repeat(auto-fill,_minmax(2.5rem,_1fr))]">
      {paginationNumbers.map((pageNumber) => {
        return (
          <button
            className={`border-[1px] bg-grey p-2 border-transparent rounded-lg w-10 text-white ${
              pageNumber === currentPage ? "border-blue" : "hover:text-blue"}`}
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}>
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
