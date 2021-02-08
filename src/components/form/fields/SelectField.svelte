<script lang="ts">
  import { Field } from 'svelte-final-form'

  export let name: string

  interface Item {
    text: string
    value: string
  }

  export let items: Item[]

  const handleChange = (input: any) => (e: Event) => input.onChange((<HTMLInputElement>e.currentTarget).value)
</script>

<Field {name} let:input let:meta>
  <select value={input.value} on:change={handleChange(input)} on:focus={input.onFocus} on:blur={input.onBlur}>
    {#each items as item}
      <option value={item.value}>
        {item.text}
      </option>
    {/each}
  </select>
</Field>

<style>
  select:not([multiple]) {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
    padding: 0.5em;
    padding-right: 1.5em;
    width: 100%;
  }
</style>
