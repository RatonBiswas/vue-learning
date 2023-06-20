<template>
  <div>
    <div class="wrapper">
      <main class="main">
        <slot name="main" />
      </main>
      <aside class="sidebar">
        <slot name="sidebar" />
      </aside>
    </div>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
  
  <style>
.sidebar {
  border: 2px solid red;
}

.main {
  border: 2px solid green;
}

.footer {
  border: 2px solid blue;
}
</style>