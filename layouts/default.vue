<template>
  <div class="site">
    <a href="#main-content" class="skip-link">Vai al contenuto</a>
    <AppHeader />
    <main id="main-content" tabindex="-1">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

main:focus {
  outline: none;
}

.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 100;
  padding: var(--space-sm) var(--space-md);
  background: var(--color-accent);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.skip-link:focus {
  left: var(--space-sm);
  top: var(--space-sm);
}
</style>
