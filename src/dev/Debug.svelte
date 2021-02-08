<script lang="ts">
  export let value: any
</script>

<pre>
  {JSON.stringify(value, null, 2)}
</pre>

<style>
  pre {
    color: var(--color, black);
  }
</style>
