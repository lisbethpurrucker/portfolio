<script>
  import "../app.css";
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
</script>

<div class="px-6 py-12">
  <Header />
  <slot />
  <Footer />
</div>