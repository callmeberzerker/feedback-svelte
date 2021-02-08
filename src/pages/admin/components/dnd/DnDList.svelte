<script lang="ts">
  import DragAndDropIcon from 'src/icons/DragAndDropIcon.svelte'
  import { currentControlEditable, templateStore, toolsInitialValues } from 'src/pages/admin/template-store'
  import { dndzone } from 'svelte-dnd-action'
  import { Button } from 'svelte-mui'
  import { flip } from 'svelte/animate'

  export let itemsData
  export let itemComponent
  export let onDrop
  export let idPropertyName = 'id'
  export let flipDurationMs = 300

  function handleConsider(e) {
    itemsData = e.detail.items
  }
  function handleFinalize(e) {
    onDrop(e.detail.items)
  }

  const onEdit = (item: any) => () => {
    currentControlEditable.set(item.id)
    toolsInitialValues.set(item)
  }

  const onDelete = (item: any) => () => {
    templateStore.update((currentState) => currentState.filter((x) => x.id !== item.id))
    // the control has been deleted in the mean time => clean up the current control editable
    if (item.id === $currentControlEditable) {
      currentControlEditable.update(() => null)
    }
  }
</script>

<section
  use:dndzone={{ items: itemsData, flipDurationMs, dropTargetStyle: {} }}
  on:consider={handleConsider}
  on:finalize={handleFinalize}
>
  {#each itemsData as item (item[idPropertyName])}
    <div class="row" animate:flip={{ duration: flipDurationMs }} class:selected={item.id === $currentControlEditable}>
      <div class="drag-handle">
        <DragAndDropIcon />
      </div>
      <div class="target-component">
        <svelte:component this={itemComponent} {item} {...item} value={item} />
      </div>
      <div class="side-actions">
        <Button type="button" on:click={onEdit(item)}>edit</Button>
        <Button type="button" on:click={onDelete(item)}>delete</Button>
      </div>
    </div>
  {/each}
</section>

<style>
  section {
    width: 100%;
    height: 100%;
  }
  .row {
    display: flex;
    background-color: inherit;
  }
  .row:focus {
    outline: -webkit-focus-ring-color auto 1px;
    /* border-color: rgba(9, 30, 66, 0.71); */
    /* outline-offset: 2px; */
    /* background-color: white; */
  }
  .target-component {
    width: 95%;
  }
  .row.selected {
    background: var(--bg-color, #fbfbfb);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px var(--border, #dfdfdf);
  }

  .drag-handle {
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .side-actions {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
