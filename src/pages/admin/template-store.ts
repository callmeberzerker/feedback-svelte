import { writable } from 'svelte/store'

export const templateStore1 = writable([])

export const templateStore2 = writable([])
export const templateStore = writable([
  {
    control: 'TextField',
    name: 'Test-1',
    label: { en: 'Test 1 EN', mk: 'Test 1 MK' },
    placeholder: { en: 'Test 1 EN placeholder', mk: 'Test 1 MK placeholder' },
    id: 'Test 1',
  },
])

export const availableControls = [
  { text: 'Select', value: 'SelectField' },
  { text: 'Text', value: 'TextField' },
  { text: 'Checkbox', value: 'CheckboxField' },
  { text: 'Html', value: 'HtmlField' },
]

export const toolsInitialValues = writable({
  control: availableControls[1].value,
})

export const currentControlEditable = writable(null)
