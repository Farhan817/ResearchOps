import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";

import { useState } from "react";

import type { DataTableProps } from "../types";
import DataTablePagination from "./DataTablePagination";

export function DataTable<TData>({
  columns,
  data,
  pagination,
  onPaginationChange,
  loading = false,
  emptyMessage = "No records found",
  enableSorting = true,
  sorting: externalSorting,
  onSortingChange,
}: DataTableProps<TData>) {
  const [internalSorting, setInternalSorting] = useState<SortingState>([]);

  const sorting = externalSorting ?? internalSorting;

  const handleSortingChange = (
    updater: SortingState | ((old: SortingState) => SortingState),
  ) => {
    const next = typeof updater === "function" ? updater(sorting) : updater;

    if (onSortingChange) {
      onSortingChange(next);
    } else {
      setInternalSorting(next);
    }
  };

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
    },

    onSortingChange: handleSortingChange,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,

    manualPagination: true,
    manualSorting: Boolean(onSortingChange),

    pageCount: pagination.totalPages,
  });

  return (
    <div className='w-full overflow-hidden rounded-lg border border-border bg-card'>
      <div className='w-full overflow-x-auto'>
        <table className='w-full text-sm text-left'>
          <thead className='bg-muted/50 border-b border-border'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap'
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center gap-2"
                            : ""
                        }
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}

                        {{
                          asc: "↑",
                          desc: "↓",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className='divide-y divide-border'>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className='px-4 py-12 text-center text-muted-foreground'
                >
                  Loading...
                </td>
              </tr>
            ) : table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className='px-4 py-12 text-center text-muted-foreground'
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className='hover:bg-muted/40 transition-colors'
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className='px-4 py-3 text-foreground whitespace-nowrap'
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <DataTablePagination
        pagination={pagination}
        onChange={onPaginationChange}
      />
    </div>
  );
}
