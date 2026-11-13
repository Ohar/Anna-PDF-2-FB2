<script setup lang="ts">
import {ref} from 'vue'
const { data } = await useFetch('/api/data')

const foo = ref(42)

const bar = () => {
  ++foo.value
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <p>Гигга {{foo}}</p>
    <button @click="bar">Нигга</button>
    <p v-if="foo <= 45">Джига</p>
    <p v-else>Дрыга</p>
    <hr>
    <p v-if="data">{{data}}</p>
    <p v-else>Нету данных</p>
  </div>
</template>

<style>
html:not([data-app-hydrated]) #__nuxt {
  pointer-events: none;
  opacity: 0.6;
}
html:not([data-app-hydrated])::before {
  text-align: center;
  position: fixed;
  height: auto;
  font-size: 1rem;
  font-family: monospace;
  width: 100%;
  color: black;
  animation: .7s move-horizontal linear infinite alternate-reverse;
  background-color: rgba(65,105,230,.5);
}
@keyframes move-horizontal {
  from {
    content: 'Загрузка   ';
  }
  33% {
    content: 'Загрузка.  ';
  }
  66% {
    content: 'Загрузка.. ';
  }
  to {
    content: 'Загрузка...';
  }
}

</style>
