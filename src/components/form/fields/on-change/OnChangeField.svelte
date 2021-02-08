<script lang="ts">
  import OnChange from 'src/components/form/fields/on-change/OnChange.svelte'

  import { Field } from 'svelte-final-form'

  export let name: string
  export let onChange: Function
</script>

<Field {name} subscription={{ value: true }} let:input>
  <OnChange {onChange} value={input.value} />
</Field>
