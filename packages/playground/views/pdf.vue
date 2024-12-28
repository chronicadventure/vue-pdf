<!-- eslint-disable unused-imports/no-unused-imports -->
<!-- Use this component to play with the main components -->
<script setup lang="ts">
import { VuePDF, usePDF } from '@tato30/vue-pdf';
import { onUnmounted } from 'vue';
const { pdf, pages } = usePDF('https://retailgptstorage.blob.core.windows.net/retaildocs/walmart-supply-chain-packaging-guide-20240131.pdf')

onUnmounted(async () => {
    await pdf.value?.destroy();
})

</script>

<template>
  <div>
    <div v-for="page in pages">
      <VuePDF :pdf="pdf" :page="page"/>
    </div>
  </div>
</template>