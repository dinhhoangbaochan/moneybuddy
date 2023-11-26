<template>
  <div class="container mx-auto py-[6rem]">
    <h1 class="leading-2">Expense Tracker</h1>
    <div class="flex flex-col md:flex-row">
      <div class="w-[30%] pr-8">
        <!-- Content for the first column -->
        <TransactionForm />

      </div>
      <div class="w-[60%]">
        <div class="my-8">
          <TransactionList />
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { data: people } = await useAsyncData('people', async () => client.from('people').select('*').order('created_at'), { transform: result => result.data }); 
</script>