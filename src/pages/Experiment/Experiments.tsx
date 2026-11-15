import { DataTable } from "../../components/common/DataTable";
import { ExperimentColumns } from "./hook/ExperimentColumns";
import useExperiments from "./hook/useExperiments";
import PageHeader from "../../components/common/PageHeader";
import { Button } from "../../components/common/Button";
import { Plus } from "lucide-react";

const Experiments = () => {
  const [
    { experimentData, pagination, loading },
    { handelPageChange, onEdit, handelAdd },
  ] = useExperiments();

  const columns = [
    ...ExperimentColumns,
    {
      id: "actions",
      header: "Actions",
      enableSorting: false,
      enableHiding: false,
      cell: ({ row }) => (
        <button
          type='button'
          onClick={() => onEdit(row.original.id)}
          className='rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted'
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <div className='min-h-screen bg-background p-4 md:p-6 lg:p-8'>
      <div className='mx-auto max-w-screen-2xl space-y-6'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-2d'>
          <PageHeader
            title='Experiments'
            subText='Manage, track, and monitor research experiments.'
          />
          <Button
            type='button'
            onClick={handelAdd}
            className='inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:self-center'
          >
            <Plus size={17} />
            Add New Experiment
          </Button>
        </div>

        <DataTable
          columns={columns}
          data={experimentData}
          loading={loading}
          pagination={pagination}
          onPaginationChange={handelPageChange}
        />
      </div>
    </div>
  );
};

export default Experiments;
