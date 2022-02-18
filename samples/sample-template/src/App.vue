<script setup lang="ts"></script>

<template>
  <header class="page">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" />
    <h1>Lean Vue Samples</h1>
  </header>

  <main>
    <article>
      <header>
        <h2>Samples Starter Template</h2>
        <p>Ausgangspunkt meiner Beispiele.</p>
      </header>
    </article>
  </main>
</template>

<style scoped>
header.page {
  display: flex;
  gap: 1rem;
  padding: 0 2rem;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #818181;
}
header.page img {
  height: 40px;
}

h1,
h2 {
  font-weight: 500;
}

main {
  color: #313131;
  margin: 2rem auto 0;
  padding: 0 1rem;
  max-width: 720px;
}
</style>
