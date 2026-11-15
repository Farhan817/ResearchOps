import { Input } from "../../components/common/Input";
import { Select } from "../../components/common/Select";
import { Button } from "../../components/common/Button";

import {
  categoryOptions,
  projectOptions,
  statusOptions,
  teamOptions,
  visibilityOptions,
} from "../../utils/constants";
import useAddEditExperiments from "./hook/useAddEditExperiments";

const sectionClass = "rounded-xl border border-border bg-surface p-5 space-y-5";

const sectionTitleClass = "text-base font-semibold text-text-primary";

const sectionDescriptionClass = "text-sm text-text-muted mt-1";

const labelClass = "mb-1.5 block text-sm font-medium text-text-primary";

const AddEditExperiments = () => {
  const [
    { formik, materialInput, isAdd },
    { handleCancel, addMaterial, removeMaterial, setMaterialInput },
  ] = useAddEditExperiments();
  const { values, errors, handleSubmit, setFieldValue } = formik;
  const disabled = !isAdd || values.status == "completed";
  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full space-y-6'>
      {/* Header */}
      <div>
        <h1 className='text-2xl font-semibold text-text-primary'>
          Create Experiment
        </h1>
        <p className='mt-1 text-sm text-text-muted'>
          Create and organize your research experiment.
        </p>
      </div>

      {/* Basic Information */}
      <section className={sectionClass}>
        <div>
          <h2 className={sectionTitleClass}>Basic Information</h2>
          <p className={sectionDescriptionClass}>
            Provide the fundamental details of your experiment.
          </p>
        </div>

        <Input
          label='Experiment Title'
          placeholder='Enter experiment title'
          required
          value={values.title}
          onChange={(e) => setFieldValue("title", e.target.value)}
          error={errors.title}
          disabled={values.status == "completed"}
        />

        <div>
          <label className={labelClass}>Description *</label>
          <textarea
            disabled={values.status == "completed"}
            required
            rows={3}
            placeholder='Describe your experiment...'
            value={values.description}
            onChange={(e) => setFieldValue("description", e.target.value)}
            className='w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
          />
        </div>

        <div>
          <label className={labelClass}>Research Objective *</label>
          <textarea
            disabled={values.status == "completed"}
            required
            rows={3}
            placeholder='What are you trying to achieve?'
            value={values.objective}
            onChange={(e) => setFieldValue("objective", e.target.value)}
            className='w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
          />
        </div>

        <div>
          <label className={labelClass}>
            Hypothesis <span className='text-text-muted'>(Optional)</span>
          </label>
          <textarea
            disabled={values.status == "completed"}
            rows={2}
            placeholder='What do you expect to discover?'
            value={values.hypothesis}
            onChange={(e) => setFieldValue("hypothesis", e.target.value)}
            className='w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
          />
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <Select
            disabled={values.status == "completed"}
            label='Experiment Category'
            required
            placeholder='Select category'
            options={categoryOptions}
            value={values.category}
            onChange={(e) => setFieldValue("category", e.target.value)}
            error={errors.category}
          />

          <Select
            disabled={values.status == "completed"}
            label='Lifecycle Status'
            options={statusOptions}
            value={values.status}
            onChange={(e) => setFieldValue("status", e.target.value)}
            error={errors.status}
          />
        </div>
      </section>

      {/* Research Associations */}
      <section className={sectionClass}>
        <div>
          <h2 className={sectionTitleClass}>Research Associations</h2>
          <p className={sectionDescriptionClass}>
            Associate this experiment with a project and research team.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <Select
            disabled={disabled}
            label='Associated Project'
            placeholder='Select project'
            options={projectOptions}
            value={values.project}
            onChange={(e) => setFieldValue("project", e.target.value)}
          />

          <Select
            disabled={disabled}
            label='Associated Research Team'
            placeholder='Select research team'
            options={teamOptions}
            value={values.team}
            onChange={(e) => setFieldValue("team", e.target.value)}
          />
        </div>
      </section>

      {/* Materials & Methodology */}
      <section className={sectionClass}>
        <div>
          <h2 className={sectionTitleClass}>Materials & Methodology</h2>
          <p className={sectionDescriptionClass}>
            Document the resources and procedure used in your research.
          </p>
        </div>

        <div>
          <label className={labelClass}>Research Materials</label>

          <div className='flex gap-2'>
            <Input
              disabled={values.status == "completed"}
              wrapperClassName='flex-1'
              placeholder='Enter material name'
              value={materialInput}
              onChange={(e) => setMaterialInput(e.target.value)}
            />

            <Button
              type='button'
              onClick={() => addMaterial(materialInput)}
              disabled={disabled}
            >
              Add
            </Button>
          </div>

          <div className='mt-3 flex flex-wrap gap-2'>
            {values.materials.map((material) => (
              <span
                key={material}
                className='inline-flex items-center gap-2 rounded-full bg-surface-secondary px-3 py-1.5 text-sm text-text-primary'
              >
                {material}

                {!disabled && (
                  <button
                    type='button'
                    onClick={() => removeMaterial(material)}
                    className='text-text-muted hover:text-danger'
                    aria-label={`Remove ${material}`}
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>Protocol / Methodology</label>
          <textarea
            disabled={values.status == "completed"}
            rows={5}
            placeholder='Describe the experiment procedure and methodology...'
            value={values.methodology}
            onChange={(e) => setFieldValue("methodology", e.target.value)}
            className='w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
          />
        </div>
      </section>

      {/* Timeline */}
      <section className={sectionClass}>
        <div>
          <h2 className={sectionTitleClass}>Experiment Timeline</h2>
          <p className={sectionDescriptionClass}>
            Define planned and actual experiment dates.
          </p>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-semibold text-text-primary'>
            Planned Timeline
          </h3>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <Input
              disabled={values.status == "completed"}
              label='Planned Start Date'
              type='date'
              required
              value={values.plannedStartDate}
              onChange={(e) =>
                setFieldValue("plannedStartDate", e.target.value)
              }
            />

            <Input
              disabled={values.status == "completed"}
              label='Planned Completion Date'
              type='date'
              required
              min={values.plannedStartDate || undefined}
              value={values.plannedCompletionDate}
              onChange={(e) =>
                setFieldValue("plannedCompletionDate", e.target.value)
              }
            />
          </div>
        </div>

        <div className='space-y-3'>
          <h3 className='text-sm font-semibold text-text-primary'>
            Actual Timeline
          </h3>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <Input
              disabled={values.status == "completed"}
              label='Actual Start Date'
              type='date'
              value={values.actualStartDate}
              onChange={(e) => setFieldValue("actualStartDate", e.target.value)}
            />

            <Input
              disabled={values.status == "completed"}
              label='Actual Completion Date'
              type='date'
              min={values.actualStartDate || undefined}
              value={values.actualCompletionDate}
              onChange={(e) =>
                setFieldValue("actualCompletionDate", e.target.value)
              }
            />
          </div>
        </div>
      </section>

      {/* Expected Outcome */}
      <section className={sectionClass}>
        <div>
          <h2 className={sectionTitleClass}>Expected Outcome</h2>
          <p className={sectionDescriptionClass}>
            Describe the anticipated findings or results.
          </p>
        </div>

        <textarea
          disabled={!isAdd || values.status == "completed"}
          rows={4}
          placeholder='Describe expected research outcomes...'
          value={values.expectedOutcome}
          onChange={(e) => setFieldValue("expectedOutcome", e.target.value)}
          className='w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500'
        />
      </section>

      {/* Visibility */}
      <section className={sectionClass}>
        <div>
          <h2 className={sectionTitleClass}>Visibility Configuration</h2>
          <p className={sectionDescriptionClass}>
            Choose who can access this experiment.
          </p>
        </div>

        <div className='space-y-3'>
          {visibilityOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition ${
                values.visibility === option.value
                  ? "border-primary-500 bg-primary-500/5"
                  : "border-border hover:bg-surface-secondary"
              }`}
            >
              <input
                disabled={!isAdd}
                type='radio'
                name='visibility'
                value={option.value}
                checked={values.visibility === option.value}
                onChange={(e) => setFieldValue("visibility", e.target.value)}
                className='mt-1 accent-primary-600'
              />

              <div>
                <p className='text-sm font-medium text-text-primary'>
                  {option.label}
                </p>
                <p className='mt-1 text-xs text-text-muted'>
                  {option.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className='flex flex-col-reverse justify-end gap-3 border-t border-border pt-5 sm:flex-row'>
        <Button type='button' variant='outline' onClick={handleCancel}>
          Cancel
        </Button>
        {values.status != "completed" && (
          <Button type='submit'>
            {isAdd ? "Create Experiment" : "Update Experiment"}
          </Button>
        )}
      </div>
    </form>
  );
};

export default AddEditExperiments;
