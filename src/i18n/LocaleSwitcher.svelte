<script lang="ts">
  import { locale } from 'src/i18n/i18n'

  import { Button } from 'svelte-mui'

  const onSwitch = () => {
    if ($locale === 'en') {
      locale.set('mk')
    } else {
      locale.set('en')
    }
  }
</script>

<Button primary outlined on:click={onSwitch}>Switch locale</Button>
