<script lang="ts" context="module">
  export const CheckboxFieldFactory = ({ id, control, item, value, options, ...rest }, locale) => {
    const adaptedOptions = options.map((x) => ({ value: x.value, text: x.label[locale] }))
    const obj = {
      ...rest,
      options: adaptedOptions,
    }
    return obj
  }
</script>

<script lang="ts">
  import { Field } from 'svelte-final-form'

  import { Checkbox } from 'svelte-mui'
  export let name: string

  export let options: Array<{ text: string; value: string }>

  const onChange = (input) => (e: any) => {
    const checked = e.target.checked
    const currentValue = input.value
    const valueProp = e.target.value
    let newVal
    if (checked) {
      // add value to current array value
      newVal = Array.isArray(currentValue) ? currentValue.concat(valueProp) : [valueProp]
    } else {
      // remove value from current array value
      if (!Array.isArray(currentValue)) {
        return currentValue
      }
      const index = currentValue.indexOf(valueProp)
      if (index < 0) {
        newVal = currentValue
      } else {
        newVal = currentValue.slice(0, index).concat(currentValue.slice(index + 1))
      }
    }
    input.onChange(newVal)
  }

  const isChecked = (input, option) => input.value?.some((x) => x === option.value)
</script>

<div class="wrapper">
  {#each options as option}
    <Field {name} type="checkbox" let:input>
      <Checkbox class="thin" value={option.value} checked={isChecked(input, option)} on:change={onChange(input)}>
        <span>{option.text}</span>
      </Checkbox>
    </Field>
  {/each}
</div>
