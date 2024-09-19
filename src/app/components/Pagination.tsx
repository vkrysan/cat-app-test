import { FC } from 'react';

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const Pagination: FC<PaginationProps> = ({ page, setPage, hasNext, hasPrev }) => {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={() => setPage(page - 1)}
        disabled={!hasPrev}
        className={`bg-gray-300 px-4 py-2 rounded ${!hasPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
      >
        Prev
      </button>
      <span>Page {page}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={!hasNext}
        className={`bg-gray-300 px-4 py-2 rounded ${!hasNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
