<script lang="ts" context="module">
  export const HtmlFieldFactory = ({ id, control, item, value, html, ...rest }, locale) => {
    const obj = {
      ...rest,
      readOnly: true,
      html: html[locale],
    }
    return obj
  }
</script>

<script lang="ts">
  import { Field } from 'svelte-final-form'

  import { quill } from './quill'

  export let name: string
  export let placeholder: string
  export let readOnly = false

  const onChange = (input) => (e) => {
    input.onChange(e.detail.html)
  }
</script>

<div>
  <Field {name} let:input>
    {#if readOnly}
      {@html $$props.html}
    {:else}
      <div class="editor" use:quill={{ value: input.value, placeholder, readOnly }} on:text-change={onChange(input)} />
    {/if}
  </Field>
</div>

<style>
  div {
    margin-bottom: 25px;
  }
</style>
