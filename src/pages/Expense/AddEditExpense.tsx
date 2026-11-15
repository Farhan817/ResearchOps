import { ArrowLeft, FileText, X } from "lucide-react";
import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";
import useAddEditExpense from "./hook/useAddEditExpense";
import { projects } from "../../utils/constants";
import PageHeader from "../../components/common/PageHeader";

// Mock dropdown data
const categories = [
  "Equipment",
  "Materials",
  "Travel",
  "Maintenance",
  "Software",
  "Research",
  "General",
];

const AddEditExpense = () => {
  const [
    { formik, selectedExperiments, selectedMaterials },
    {
      handleProjectChange,
      handleExperimentChange,
      handleFileChange,
      removeAttachment,
      handleCancel,
    },
  ] = useAddEditExpense();
  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <div className='space-y-6'>
      <div className='flex items-center gap-3'>
        <PageHeader
          title='Add New Expense'
          subText='Record a new expense against a project.'
        />
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <section className='rounded-xl border border-border bg-surface p-5 sm:p-6'>
          <div className='mb-6'>
            <h2 className='text-base font-semibold text-text-primary'>
              Expense Information
            </h2>
            <p className='mt-1 text-sm text-text-muted'>
              Enter the basic details of the expense.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <Input
              label='Expense Description'
              name='description'
              placeholder='Enter expense description'
              required
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description ? errors.description : undefined}
              wrapperClassName='md:col-span-2'
            />

            <Select
              label='Expense Category'
              name='category'
              required
              value={values.category}
              options={categories.map((category) => ({
                value: category,
                label: category,
              }))}
              onChange={handleProjectChange}
              error={touched.category ? errors.category : undefined}
            />

            <Input
              label='Expense Date'
              name='expenseDate'
              type='date'
              required
              value={values.expenseDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.expenseDate ? errors.expenseDate : undefined}
              max={new Date().toISOString().split("T")[0]}
            />

            <Input
              label='Amount'
              name='amount'
              type='number'
              min='0'
              step='0.01'
              placeholder='Enter amount'
              required
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.amount ? errors.amount : undefined}
            />
          </div>
        </section>
        <section className='rounded-xl border border-border bg-surface p-5 sm:p-6'>
          <div className='mb-6'>
            <h2 className='text-base font-semibold text-text-primary'>
              Association Details
            </h2>
            <p className='mtbutton-1 text-sm text-text-muted'>
              Associate this expense with a project, experiment or material.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
            <Select
              label='Project'
              name='projectId'
              required
              value={values.projectId}
              options={projects.map((project) => ({
                value: project.id,
                label: project.name,
              }))}
              onChange={(value) => setFieldValue("projectId", value)}
              error={touched.projectId ? errors.projectId : undefined}
            />

            <Select
              label='Experiment'
              name='experimentId'
              value={values.experimentId}
              options={selectedExperiments.map((experiment) => ({
                value: experiment.id,
                label: experiment.name,
              }))}
              placeholder={
                values.projectId
                  ? "Select experiment (optional)"
                  : "Select project first"
              }
              disabled={!values.projectId}
              onChange={handleExperimentChange}
            />

            <Select
              label='Material'
              name='materialId'
              value={values.materialId}
              options={selectedMaterials.map((material) => ({
                value: material.id,
                label: material.name,
              }))}
              placeholder={
                values.experimentId
                  ? "Select material (optional)"
                  : "Select experiment first"
              }
              disabled={!values.experimentId}
              onChange={(value) => setFieldValue("materialId", value)}
            />
          </div>
        </section>

        {/* Attachment */}
        <section className='rounded-xl border border-border bg-surface p-5 sm:p-6'>
          <div className='mb-5'>
            <h2 className='text-base font-semibold text-text-primary'>
              Receipt / Invoice
            </h2>
            <p className='mt-1 text-sm text-text-muted'>
              Attach supporting documents for this expense.
            </p>
          </div>

          <Input
            type='file'
            accept='.pdf,.jpg,.jpeg,.png'
            onChange={(event) =>
              handleFileChange(event.currentTarget.files?.[0] ?? null)
            }
            error={
              touched.attachment ? (errors.attachment as string) : undefined
            }
            helperText='Supported formats: PDF, JPG, PNG. Maximum size: 5 MB.'
            className='file:mr-3 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-xs file:font-medium file:text-primary'
          />

          {values.attachment && (
            <div className='mt-4 flex items-center justify-between rounded-lg border border-border bg-surface-secondary p-3'>
              <div className='flex min-w-0 items-center gap-3'>
                <FileText size={20} className='shrink-0 text-primary' />
                <div className='min-w-0'>
                  <p className='truncate text-sm font-medium text-text-primary'>
                    {values.attachment.name}
                  </p>
                  <p className='text-xs text-text-muted'>
                    {(values.attachment.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>

              <button
                type='button'
                onClick={removeAttachment}
                className='rounded-md p-2 text-text-muted hover:bg-surface hover:text-danger'
                title='Remove attachment'
              >
                <X size={17} />
              </button>
            </div>
          )}
        </section>

        {/* System Information */}
        <div className='rounded-lg border border-border bg-surface-secondary p-4'>
          <p className='text-sm text-text-muted'>
            <span className='font-medium text-text-primary'>Note:</span> Expense
            ID, Created By and Created Timestamp will be generated automatically
            when the expense is saved.
          </p>
        </div>

        {/* Actions */}
        <div className='flex flex-col-reverse justify-end gap-3 sm:flex-row'>
          <Button
            variant='outline'
            type='button'
            onClick={handleCancel}
            // disabled={formik.isSubmitting}
            className='rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary hover:bg-surface-secondary'
          >
            Cancel
          </Button>

          <Button
            type='submit'
            // disabled={formik.isSubmitting}
            className='inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60'
          >
            {formik.isSubmitting ? "Saving..." : "Save Expense"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEditExpense;
