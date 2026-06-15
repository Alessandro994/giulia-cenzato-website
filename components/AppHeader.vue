<script setup lang="ts">
const navLinks = [
  { href: '#servizi', label: 'Servizi' },
  { href: '#chi-sono', label: 'Chi sono' },
  { href: '#contatti', label: 'Contatti' },
  { href: '#faq', label: 'FAQ' },
]

const open = ref(false)

function closeMenu() {
  open.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a href="/" class="header__brand" @click="closeMenu">
        <span class="header__name">Dr.ssa Giulia Cenzato</span>
        <span class="header__role">Psicologa</span>
      </a>

      <button
        type="button"
        class="header__toggle"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        <span class="sr-only">{{ open ? 'Chiudi menu' : 'Apri menu' }}</span>
        <span class="header__burger" aria-hidden="true" />
      </button>

      <nav
        id="site-nav"
        class="nav"
        :class="{ 'nav--open': open }"
        aria-label="Navigazione principale"
      >
        <ul class="nav__list">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="nav__link" @click="closeMenu">{{
              link.label
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-header);
}

.header__inner {
  max-width: var(--wide-max);
  margin: 0 auto;
  padding: 0.875rem var(--space-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
}

.header__brand {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.header__brand:hover .header__name {
  color: var(--color-accent);
}

.header__name {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
  color: var(--color-text);
}

.header__role {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  color: var(--color-text-muted);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 600;
}

.header__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: var(--color-bg-elevated);
  cursor: pointer;
}

@media (min-width: 768px) {
  .header__toggle {
    display: none;
  }
}

.header__burger {
  width: 1.25rem;
  height: 2px;
  background: var(--color-text);
  position: relative;
  border-radius: 1px;
}

.header__burger::before,
.header__burger::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
}

.header__burger::before {
  top: -6px;
}

.header__burger::after {
  top: 6px;
}

.nav {
  display: none;
}

.nav--open {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-sm) var(--space-md) var(--space-md);
  box-shadow: var(--shadow-soft);
}

@media (min-width: 768px) {
  .nav {
    display: block;
    position: static;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
  }
}

.nav__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

@media (min-width: 768px) {
  .nav__list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.65rem;
    justify-content: flex-end;
  }
}

.nav__link {
  display: block;
  padding: 0.75rem 1.4rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 400;
  font-size: 0.85rem;
  letter-spacing: normal;
  text-transform: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: transparent;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
}

.nav__link:hover {
  color: var(--color-accent-hover);
  border-color: var(--color-accent-muted);
}
</style>
