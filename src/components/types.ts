import type { ColumnDef, SortingState } from "@tanstack/react-table";

export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  pagination: Pagination;

  onPaginationChange: (pagination: Pagination) => void;

  loading?: boolean;
  emptyMessage?: string;

  enableSorting?: boolean;
  sorting?: SortingState;
  onSortingChange?: (sorting: SortingState) => void;
}
