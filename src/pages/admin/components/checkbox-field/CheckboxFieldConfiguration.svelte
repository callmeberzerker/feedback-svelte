<script lang="ts">
  import TextField from 'src/components/form/fields/TextField.svelte'
  import { Button } from 'svelte-mui'

  let options = []

  const onAdd = () => {
    const index = options.length
    options.push({ label: `Option ${index + 1}`, index: index })
    options = options
  }
</script>

<TextField name="name" label="Name" placeholder="Enter the desired name..." />

{#each options as option}
  <TextField name={`options[${option.index}].value`} label={`${option.label} value`} />
  <TextField name={`options[${option.index}].label.mk`} label={`${option.label} MK`} />
  <TextField name={`options[${option.index}].label.en`} label={`${option.label} EN`} />
{/each}
<Button type="button" on:click={onAdd}>Add option</Button>
