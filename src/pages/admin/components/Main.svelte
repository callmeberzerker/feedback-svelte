<script lang="ts">
  import DnDList from 'src/pages/admin/components/dnd/DnDList.svelte'
  import FieldRenderer from 'src/components/form/FieldRenderer.svelte'
  import Debug from 'src/dev/Debug.svelte'
  import LocaleSwitcher from 'src/i18n/LocaleSwitcher.svelte'
  import { templateStore } from 'src/pages/admin/template-store'
  import { Form } from 'svelte-final-form'
  import { Button, ExpansionPanel, Icon } from 'svelte-mui'
  import { navigate } from 'svelte-navigator'
  import { b64EncodeUnicode } from 'src/utils/utils'

  const onSubmit = async (values: any) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(JSON.stringify(values, undefined, 2))
    // templateStore.update((currentState) => [...currentState, values])
  }

  const initialValues = {}

  const onDrop = (newItems: any[]) => {
    templateStore.update(() => newItems)
  }

  const onPreviewTemplate = () => {
    let templateStoreAsString = JSON.stringify($templateStore)
    let base64Encoded = b64EncodeUnicode(templateStoreAsString)
    navigate(`/admin/preview/${base64Encoded}`)
  }
</script>

<h2>Preview template</h2>
<Form {onSubmit} {initialValues} let:form let:state>
  <form on:submit|preventDefault={form.submit}>
    <DnDList itemsData={$templateStore} itemComponent={FieldRenderer} idPropertyName="id" {onDrop} />
  </form>

  <LocaleSwitcher />
  <Button type="button" on:click={onPreviewTemplate}>Preview the template</Button>
  <ExpansionPanel name="Template Field definition" dense>
    <div slot="icon">
      <Icon path="M7 10l5 5 5-5z" />
    </div>
    <Debug value={$templateStore?.length > 0 ? $templateStore : 'n/a'} />
  </ExpansionPanel>
  <ExpansionPanel name="Form values" dense>
    <div slot="icon">
      <Icon path="M7 10l5 5 5-5z" />
    </div>
    <Debug value={state.values} />
  </ExpansionPanel>
</Form>

<style>
  h2 {
    padding-left: 20px;
  }
</style>
