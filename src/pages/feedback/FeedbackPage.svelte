<script lang="ts">
  import CheckboxField from 'src/components/form/fields/CheckboxField.svelte'
  import HtmlField from 'src/components/form/fields/html/HtmlField.svelte'
  import TextField from 'src/components/form/fields/TextField.svelte'
  import Debug from 'src/dev/Debug.svelte'
  import { MOCK } from 'src/mocks/mock'
  import { Form } from 'svelte-final-form'
  import { Button } from 'svelte-mui'

  const initialValues = {
    test6: '<p>test123124123</p>',
  }
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(JSON.stringify(values, undefined, 2))
  }
</script>

<h1>Dear customer</h1>

{@html MOCK.description}

<div>
  <Form {onSubmit} {initialValues} let:form let:state>
    <form on:submit|preventDefault={form.submit}>
      {#each MOCK.fields as { name, label, placeholder }}
        <TextField {name} {label} {placeholder} />
      {/each}

      <CheckboxField
        name="test"
        options={[
          { text: 'bla', value: 'bla' },
          { text: 'bla2', value: 'bla3' },
        ]}
      />

      <HtmlField name="htmlTest" />
      <Button color="primary" outlined raised>Submit</Button>
    </form>
    <Debug value={state.values} />
  </Form>
</div>

<style>
  div {
    max-width: 500px;
  }
</style>
