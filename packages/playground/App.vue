<template>
  <div id="app">
    <nav>
      <button @click="$router.push('/')">Home</button>
      <button @click="$router.push('/pdf')">PDF</button>
    </nav>
    <router-view></router-view>
  </div>
</template>