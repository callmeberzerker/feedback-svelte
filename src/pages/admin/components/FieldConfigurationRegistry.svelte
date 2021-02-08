<script lang="ts" context="module">
  import SelectFieldConfiguration from 'src/pages/admin/components/select-field/SelectFieldConfiguration.svelte'
  import TextFieldConfiguration from 'src/pages/admin/components/text-field/TextFieldConfiguration.svelte'
  import HtmlFieldConfiguration from 'src/pages/admin/components/html-field/HtmlFieldConfiguration.svelte'
  interface ComponentRegistry {
    SelectField: any
    TextField: any
    CheckboxField: any
    HtmlField: any
  }
  const COMPONENT_REGISTRY: ComponentRegistry = {
    SelectField: SelectFieldConfiguration,
    TextField: TextFieldConfiguration,
    CheckboxField: CheckboxFieldConfiguration,
    HtmlField: HtmlFieldConfiguration,
  }
</script>

<script lang="ts">
  import CheckboxFieldConfiguration from 'src/pages/admin/components/checkbox-field/CheckboxFieldConfiguration.svelte'

  export let kind: keyof ComponentRegistry
  $: component = COMPONENT_REGISTRY[kind]
</script>

<div>
  <h3>Configuration options</h3>
  <svelte:component this={component} {...$$props} />
</div>

<style>
  div {
    margin-top: 150px;
  }
</style>
