import type { Pagination } from "../types";

interface Props {
  pagination: Pagination;
  onChange: (pagination: Pagination) => void;
}

const DataTablePagination = ({ pagination, onChange }: Props) => {
  const { page, pageSize, total, totalPages } = pagination;

  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const updatePage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages) return;

    onChange({
      ...pagination,
      page: nextPage,
    });
  };

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border px-4 py-3'>
      <div className='text-sm text-muted-foreground'>
        Showing{" "}
        <span className='font-medium text-foreground'>
          {start}-{end}
        </span>{" "}
        of <span className='font-medium text-foreground'>{total}</span> records
      </div>

      <div className='flex items-center gap-2'>
        <select
          value={pageSize}
          onChange={(e) =>
            onChange({
              ...pagination,
              pageSize: Number(e.target.value),
              page: 1,
            })
          }
          className='h-9 rounded-md border border-border bg-background px-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring'
        >
          {[10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size} / page
            </option>
          ))}
        </select>

        <button
          disabled={page <= 1}
          onClick={() => updatePage(page - 1)}
          className='h-9 rounded-md border border-border px-3 text-sm hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed'
        >
          Previous
        </button>

        <span className='text-sm text-foreground whitespace-nowrap'>
          {page} / {totalPages || 1}
        </span>

        <button
          disabled={page >= totalPages}
          onClick={() => updatePage(page + 1)}
          className='h-9 rounded-md border border-border px-3 text-sm hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTablePagination;
