<script>
  import "../app.css";
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import Contact from '../components/Contact.svelte';
</script>

<div class="px-6 py-12">
  <Header />
  <slot />
  <Contact />
  <Footer />
</div>