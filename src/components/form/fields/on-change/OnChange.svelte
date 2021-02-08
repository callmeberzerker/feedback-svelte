<script lang="ts">
  export let onChange: Function
  export let value: any
  let previous: any

  $: onChangeLocal(previous, value)

  const onChangeLocal = (previousValue: any, currentValue: any) => {
    if (previousValue !== currentValue && previousValue !== undefined) {
      onChange(previousValue, currentValue)
      previous = currentValue
    }
  }
</script>
