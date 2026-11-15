import type { ColumnDef } from "@tanstack/react-table";
import type { ExperimentFormData } from "../types";
import { type ResearchTeamKey } from "../../../utils/enum";

export const ExperimentColumns: ColumnDef<ExperimentFormData>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className='font-medium text-foreground'>{row.original.title}</span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ getValue }) => (
      <div className='min-w-[250px] max-w-[350px] whitespace-normal line-clamp-2 text-muted-foreground'>
        {getValue<string>()}
      </div>
    ),
  },
  {
    accessorKey: "objective",
    header: "Objective",
    cell: ({ getValue }) => (
      <div className='min-w-[200px] max-w-[300px] whitespace-normal line-clamp-2'>
        {getValue<string>()}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: ({ getValue }) => {
      const team = getValue<ResearchTeamKey | "">();
      return (
        <span className='text-muted-foreground'>{team || "Redacted"}</span>
      );
    },
  },
  {
    accessorKey: "materials",
    header: "Materials",
    cell: ({ getValue }) => {
      const materials = getValue<string[]>();

      return (
        <div className='flex flex-wrap gap-1 min-w-[150px]'>
          {materials?.slice(0, 2).map((material) => (
            <span
              key={material}
              className='rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground'
            >
              {material}
            </span>
          ))}

          {materials?.length > 2 && (
            <span className='text-xs text-muted-foreground'>
              +{materials.length - 2} more
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "plannedStartDate",
    header: "Planned Start",
    cell: ({ getValue }) => {
      const date = getValue<string>();

      return (
        <span className='whitespace-nowrap'>
          {date ? new Date(date).toLocaleDateString("en-IN") : "—"}
        </span>
      );
    },
  },
  {
    accessorKey: "plannedCompletionDate",
    header: "Planned Completion",
    cell: ({ getValue }) => {
      const date = getValue<string>();

      return (
        <span className='whitespace-nowrap'>
          {date ? new Date(date).toLocaleDateString("en-IN") : "—"}
        </span>
      );
    },
  },
  {
    accessorKey: "actualStartDate",
    header: "Actual Start",
    cell: ({ getValue }) => {
      const date = getValue<string>();

      return (
        <span className='whitespace-nowrap'>
          {date ? new Date(date).toLocaleDateString("en-IN") : "—"}
        </span>
      );
    },
  },
  {
    accessorKey: "actualCompletionDate",
    header: "Actual Completion",
    cell: ({ getValue }) => {
      const date = getValue<string>();

      return (
        <span className='whitespace-nowrap'>
          {date ? new Date(date).toLocaleDateString("en-IN") : "—"}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<ExperimentFormData["status"]>();

      const styles: Record<ExperimentFormData["status"], string> = {
        draft: "bg-gray-100 text-gray-700",
        planned: "bg-blue-100 text-blue-700",
        "in-progress": "bg-amber-100 text-amber-700",
        completed: "bg-green-100 text-green-700",
        cancelled: "bg-red-100 text-red-700",
      };

      const labels: Record<ExperimentFormData["status"], string> = {
        draft: "Draft",
        planned: "Planned",
        "in-progress": "In Progress",
        completed: "Completed",
        cancelled: "Cancelled",
      };

      return (
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
        >
          {labels[status]}
        </span>
      );
    },
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
    cell: ({ getValue }) => {
      const visibility = getValue<ExperimentFormData["visibility"]>();

      return (
        <span className='capitalize text-muted-foreground'>{visibility}</span>
      );
    },
  },
];
