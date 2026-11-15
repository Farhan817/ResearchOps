import { Plus } from "lucide-react";
import { DataTable } from "../../components/common/DataTable";
import { expenseColumns } from "./hook/ExpenseColumn";
import useExpense from "./hook/useExpense";
import { Button } from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import PageHeader from "../../components/common/PageHeader";

const ExpenseManagement = () => {
  const [
    {
      summaryData,
      summaryLoading,
      summaryCards,
      expenseData,
      pagination,
      expenseLoading,
    },
    { handelAdd, handelPageChange, onEdit },
  ] = useExpense();

  const column = [
    ...expenseColumns,
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
            title='Expenses'
            subText='Track and manage project expenses.'
          />

          <Button
            type='button'
            onClick={handelAdd}
            className='inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:self-center'
          >
            <Plus size={17} />
            Add New Expense
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {summaryLoading ? (
          <div className='col-span-full flex min-h-[280px] items-center justify-center'>
            <Loader size='lg' />
          </div>
        ) : (
          summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className='rounded-xl border border-border bg-card p-5 shadow-sm'
              >
                <div className='flex items-center justify-between'>
                  <p className='text-sm font-medium text-muted-foreground'>
                    {card.title}
                  </p>

                  <div className='rounded-lg bg-primary/10 p-2 text-primary'>
                    <Icon size={19} />
                  </div>
                </div>

                <h2 className='mt-4 text-2xl font-semibold tracking-tight text-foreground'>
                  {summaryData.currency + card.value}
                </h2>

                <p className='mt-1 text-xs text-muted-foreground'>
                  {card.description}
                </p>
              </div>
            );
          })
        )}
      </div>

      <div className='space-y-4'>
        <div>
          <h2 className='text-lg font-semibold text-foreground'>
            Expense Records
          </h2>
          <p className='mt-1 text-sm text-muted-foreground'>
            Overview of all recorded expenses.
          </p>
        </div>

        <DataTable
          columns={column}
          data={expenseData}
          pagination={pagination}
          onPaginationChange={handelPageChange}
          loading={expenseLoading}
          emptyMessage='No expenses recorded yet.'
          enableSorting
        />
      </div>
    </div>
  );
};

export default ExpenseManagement;
