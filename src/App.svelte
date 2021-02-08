<script lang="ts">
  import AdminPage from 'src/pages/admin/AdminPage.svelte'
  import AdminPreviewPage from 'src/pages/admin/AdminPreviewPage.svelte'
  import FeedbackPage from 'src/pages/feedback/FeedbackPage.svelte'
  import IndexPage from 'src/pages/IndexPage.svelte'
  import { Route, Router } from 'svelte-navigator'
</script>

<Router url="" primary={false}>
  <Route path="/" component={IndexPage} />
  <Route path="/admin" component={AdminPage} />
  <Route path="/admin/preview/:metadata" component={AdminPreviewPage} />
  <Route path="/feedback/:feedbackId" component={FeedbackPage} />
</Router>
