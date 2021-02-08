<script lang="ts">
  import type { FormApi } from 'final-form'
  import OnChangeField from 'src/components/form/fields/on-change/OnChangeField.svelte'

  import SelectField from 'src/components/form/fields/SelectField.svelte'
  import Debug from 'src/dev/Debug.svelte'
  import FieldConfigurationRegistry from 'src/pages/admin/components/FieldConfigurationRegistry.svelte'
  import {
    availableControls,
    currentControlEditable,
    templateStore,
    toolsInitialValues,
  } from 'src/pages/admin/template-store'
  import { Form } from 'svelte-final-form'
  import { Button } from 'svelte-mui'

  $: initialValues = $toolsInitialValues

  const onSubmit = async (values: any, form: FormApi) => {
    // edit mode
    // control must have an id and to NOT been deleted in the mean time
    if (values.id && $templateStore.some((x) => x.id === values.id)) {
      const existingItemIndex = $templateStore.findIndex((x) => x.id === values.id)

      if (existingItemIndex !== -1) {
        templateStore.update((currentState) => {
          currentState[existingItemIndex] = values
          return currentState
        })
      }
    }
    // new control
    else {
      // svelte-action-dnd requires the items to have an `id` property so we provide it
      templateStore.update((currentState) => [...currentState, { ...values, id: values.name }])
    }
    currentControlEditable.set(null)

    setTimeout(() => {
      resetForm(form)
    })
  }

  const validate = (values: any): any => {
    const errors = {} as any
    if ($templateStore.some((x) => x.name === values.name) && !values.id) {
      errors.name = 'You already have this kind of field in name!'
    } else if (!values.name) {
      errors.name = 'This field is required!'
    }
    return errors
  }

  const resetForm = (form: FormApi) => {
    const initialValues = { control: form.getState().values.control }
    currentControlEditable.update(() => null)
    form.resetFieldState('name')
    toolsInitialValues.update(() => initialValues)
    form.reset($toolsInitialValues)
  }

  const onChange = (form: FormApi) => () => {
    resetForm(form)
  }
  const onCancel = (form: FormApi) => () => {
    resetForm(form)
  }
</script>

<h3>Form controls</h3>

<Form {onSubmit} {validate} {initialValues} initialValuesEqual={false} let:form let:state>
  <form on:submit|preventDefault={form.submit}>
    <SelectField name="control" items={availableControls} />
    <OnChangeField name="control" onChange={onChange(form)} />

    <FieldConfigurationRegistry kind={state?.values?.control} />

    <div class="button-group">
      <Button primary outlined>{$currentControlEditable ? 'Save' : 'Add'}</Button>

      {#if $currentControlEditable}
        <Button type="button" primary outlined on:click={onCancel(form)}>Cancel</Button>
      {/if}
    </div>
  </form>

  <Debug value={state?.values} />
</Form>

<style>
  .button-group {
    margin-top: 15px;
  }
</style>
