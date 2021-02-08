<script>
  import HtmlField from 'src/components/form/fields/html/HtmlField.svelte'
  import TextField from 'src/components/form/fields/TextField.svelte'
</script>

<TextField name="name" label="Name" placeholder="Enter the desired name..." />

<label for="html.en">English</label>
<HtmlField name="html.en" />

<label for="html.mk">Macedonian</label>
<HtmlField name="html.mk" />
