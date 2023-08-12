<template>
    <div><nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      NoteBall
    </div>

    <a role="button" class="navbar-burger is-active" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        
    </div>

    <div class="navbar-end">
      <div class="navbar-item is-active">
        <RouterLink to="/" class="button" active-class='is-active'>Notes</RouterLink>

<RouterLink to="/stats" class="button"  active-class='is-active'>Stats</RouterLink>
      </div>
    </div>
  </div>
</nav></div>
</template>