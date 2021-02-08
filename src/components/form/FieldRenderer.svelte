<script lang="ts" context="module">
  import SelectField from 'src/components/form/fields/SelectField.svelte'
  import TextField, { TextFieldFactory } from 'src/components/form/fields/TextField.svelte'
  interface ComponentRegistry {
    SelectField: {
      component: any
      factory: () => any
    }
    TextField: {
      component: any
      factory: any
    }
    CheckboxField: {
      component: any
      factory: any
    }
    HtmlField: {
      component: any
      factory: any
    }
  }

  interface ComponentDefinition {
    component: any
    factory: (fieldDefintion: any) => any
  }
  const COMPONENT_REGISTRY: ComponentRegistry = {
    SelectField: {
      component: SelectField,
      factory: () => {},
    },
    TextField: {
      component: TextField,
      factory: TextFieldFactory,
    },
    CheckboxField: {
      component: CheckboxField,
      factory: CheckboxFieldFactory,
    },
    HtmlField: {
      component: HtmlField,
      factory: HtmlFieldFactory,
    },
  }
</script>

<script lang="ts">
  import CheckboxField, { CheckboxFieldFactory } from 'src/components/form/fields/CheckboxField.svelte'

  import { locale } from 'src/i18n/i18n'
  import HtmlField, { HtmlFieldFactory } from 'src/components/form/fields/html/HtmlField.svelte'

  export let item

  $: component = COMPONENT_REGISTRY[item.control].component
  $: props = COMPONENT_REGISTRY[item.control].factory($$props, $locale)
</script>

<svelte:component this={component} {...props} />
