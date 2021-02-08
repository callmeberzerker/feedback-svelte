<script lang="ts">
  import Main from 'src/pages/admin/components/Main.svelte'
  import Tools from 'src/pages/admin/components/Tools.svelte'
</script>

<div class="grid-container">
  <section name="main" class="main">
    <Main />
  </section>
  <section name="tools" class="tools">
    <Tools />
  </section>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 100vh;
  }

  .main {
    grid-area: 1 / 1 / 0 / 0;
    overflow: auto;
  }

  .tools {
    grid-area: 1 / 2 / 2 / 3;

    padding: 15px;
    height: 100%;
    overflow: auto;

    background: var(--bg-color, #fbfbfb);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px var(--border, #dfdfdf);
  }
</style>
