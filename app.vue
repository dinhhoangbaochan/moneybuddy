<template>
  <div>
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { data: people } = await useAsyncData('people', async () => client.from('people').select('*').order('created_at'), { transform: result => result.data }); 
console.log('heere: ', people);
</script>