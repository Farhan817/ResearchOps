import type { ColumnDef } from "@tanstack/react-table";

import type { Expense } from "../types";

export const expenseColumns: ColumnDef<Expense>[] = [
  {
    accessorKey: "expenseId",
    header: "Expense ID",
    cell: ({ getValue }) => (
      <span className='font-medium text-primary'>{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ getValue }) => (
      <span className='font-medium text-foreground'>{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => (
      <span className='rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground'>
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "projectName",
    header: "Project",
  },
  {
    accessorKey: "experimentName",
    header: "Experiment",
    cell: ({ getValue }) => (
      <span className='text-muted-foreground'>{getValue<string>() || "—"}</span>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ getValue, row }) => (
      <span className='font-semibold'>
        {row.original.currency}{" "}
        {Number(getValue<number>()).toLocaleString("en-IN")}
      </span>
    ),
  },
  {
    accessorKey: "expenseDate",
    header: "Expense Date",
  },
  {
    accessorKey: "createdBy",
    header: "Created By",
  },
];
