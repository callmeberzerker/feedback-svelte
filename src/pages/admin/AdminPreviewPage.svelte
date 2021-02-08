<script lang="ts">
  import { useParams } from 'svelte-navigator'
  import { onMount } from 'svelte'
  import FieldRenderer from 'src/components/form/FieldRenderer.svelte'
  import Debug from 'src/dev/Debug.svelte'
  import { Form } from 'svelte-final-form'
  import { b64DecodeUnicode } from 'src/utils/utils'

  let metadata
  const params = useParams()
  onMount(() => {
    metadata = b64DecodeUnicode($params.metadata)
    metadata = JSON.parse(metadata)
    console.log(metadata)
  })

  const onSubmit = () => {}
  const validate = () => {}
  const initialValues = {}
</script>

{#if metadata}
  <Form {onSubmit} {validate} {initialValues} let:form let:state>
    {#each metadata as item}
      <svelte:component this={FieldRenderer} {item} {...item} value={item} />
    {/each}
  </Form>
{/if}
