<template>
  <div class="wrapper">
    <header class="header">
      <div class="container header__inner">
        <a href="/" class="logo">
          <span class="logo__text">Play</span>ground
        </a>
        <nav class="header__menu-list">
          <ul class="header__menu-item">
            <a href="#" class="header__menu-link">Events</a>
          </ul>
          <ul class="header__menu-item">
            <a href="#" class="header__menu-link">Pricing</a>
          </ul>
          <ul class="header__menu-item">
            <a href="#" class="header__menu-link">Blog</a>
          </ul>
          <ul class="header__menu-item">
            <a href="#" class="header__menu-link btn btn--border btn--rounded"
              >Login</a
            >
          </ul>
        </nav>
      </div>
    </header>
    <section class="banner">
      <div class="container">
        <h1 class="banner__heading">The Kids playground</h1>
        <p class="banner__desc">
          The Playground, designed by nonprofit organization to<br />accessible
          for all children
        </p>
        <div class="banner__buttons">
          <a href="#" class="btn btn--border btn--rounded">Explore</a>
          <a href="#" class="btn btn--primary btn--rounded has--shadow"
            >Buy Tickets</a
          >
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "HomeView",
};
</script>
<style></style>
