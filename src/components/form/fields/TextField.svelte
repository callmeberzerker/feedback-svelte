<script lang="ts" context="module">
  export const TextFieldFactory = ({ id, control, item, value, label, placeholder, ...rest }, locale) => ({
    ...rest,
    label: label[`${locale}`],
    placeholder: placeholder[`${locale}`],
  })
</script>

<script lang="ts">
  import { Field } from 'svelte-final-form'
  import { Textfield } from 'svelte-mui'

  export let name: string
  export let label: string
  export let placeholder: string
  export let disabled: boolean = false
  export let readonly: boolean = false

  const handleChange = (input: any) => (e: InputEvent) => input.onChange((<HTMLInputElement>e.currentTarget).value)
</script>

<Field {name} let:input let:meta>
  <Textfield
    autocomplete="off"
    style={meta.touched && meta.error && '--label: red; --color: red; --primary: red;'}
    {label}
    {readonly}
    {disabled}
    {placeholder}
    value={input.value}
    on:blur={input.onBlur}
    on:focus={input.onFocus}
    on:input={handleChange(input)}
    error={meta.touched && meta.error}
  />
</Field>
