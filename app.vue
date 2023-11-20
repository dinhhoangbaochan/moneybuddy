<template>
  <div class="container mx-auto py-[6rem]">
    <h1 class="leading-2">Expense Tracker</h1>
    <div class="flex flex-col md:flex-row">
      <div class="w-[30%] pr-8">
        <!-- Content for the first column -->
        <form class="my-8" @submit.prevent>
          <!-- Transaction Type -->
          <label for="transactionType" class="block text-sm font-medium text-gray-700">Transaction Type</label>
          <select id="transactionType" name="transactionType" v-model="transactionType" class="mt-1 border block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Cash</option>
              <option>Wire Transfers</option>
          </select>

          <!-- Transaction Name -->
          <label for="transactionName" class="block text-sm font-medium text-gray-700 mt-4">Transaction Name</label>
          <input type="text" v-model="transactionName" id="transactionName" name="transactionName" class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

          <!-- Transaction Date -->
          <label for="transactionDate" class="block text-sm font-medium text-gray-700 mt-4">Transaction Date</label>
          <input type="date" v-model="transactionDate" id="transactionDate" name="transactionDate" class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

          <!-- Transaction Amount -->
          <label for="transactionAmount" class="block text-sm font-medium text-gray-700 mt-4">Transaction Amount</label>
          <input type="text" v-model="transactionAmount" id="transactionAmount" name="transactionAmount" class="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">

          <!-- Submit Button -->
          <button type="submit"
            v-on:click="handleSubmit"
            class="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
          </button>
      </form>

      </div>
      <div class="w-[60%]">
        <div class="my-8">
          <!-- Repeat this section for each transaction -->
          <div class="bg-white shadow-lg rounded-lg mb-6 overflow-hidden" v-for="item in transactionList">
              <!-- Header - Optional, can be used for highlighting transaction type or date -->
              <div class="bg-indigo-600 text-white text-lg font-semibold p-4">
                  Transaction ID #{{ item.id }} - {{ item.name }}
              </div>

              <!-- Content -->
              <div class="p-4 flex flex-col">
                  <!-- Transaction Name -->
                  <div class="mb-3">
                      <span class="text-gray-500">Transaction Type: </span> 
                      <span class="text-gray-700 font-medium">{{ item.type }}</span>
                  </div>

                  <!-- Transaction Date -->
                  <div class="mb-3">
                      <span class="text-gray-500">Date: </span> 
                      <span class="text-gray-700 font-medium">{{ item.date }}</span>
                  </div>

                  <!-- Transaction Amount -->
                  <div class="mb-3">
                      <span class="text-gray-500">Amount: </span> 
                      <span class="text-gray-700 font-medium">{{ '$' + item.amount }}</span>
                  </div>
              </div>
          </div>
          <!-- Repeat End -->

          
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
const client = useSupabaseClient()
const { data: people } = await useAsyncData('people', async () => client.from('people').select('*').order('created_at'), { transform: result => result.data }); 

const transactionName = ref();
const transactionType = ref();
const transactionDate = ref();
const transactionAmount = ref();

const transactionList = ref([]);

const handleSubmit = () => {
  const transactionItem = {
    id: Math.ceil(Math.random() * 10000000000),
    type: transactionType.value,
    name: transactionName.value,
    date: transactionDate.value,
    amount: transactionAmount.value
  };

  transactionList.value.push(transactionItem);

  transactionType.value = '';
  transactionName.value = '';
  transactionDate.value = '';
  transactionAmount.value = '';

  console.log(transactionItem);
}
</script>