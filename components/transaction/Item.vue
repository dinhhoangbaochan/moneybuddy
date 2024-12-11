<template>
      <!-- Header - Optional, can be used for highlighting transaction type or date -->
      <div class="bg-indigo-600 text-white text-lg font-semibold p-4">
          Transaction ID #{{ itemInfo.id }} - {{ itemInfo.name }}
      </div>


      <!-- Content -->
      <div class="p-4 flex flex-col">
          <!-- Transaction Name -->
          <div class="mb-3">
              <span class="text-gray-500">Transaction Type: </span> 
              <span class="text-gray-700 font-medium">{{ itemInfo.type }}</span>
          </div>

          <!-- Transaction Date -->
          <div class="mb-3">
              <span class="text-gray-500">Date: </span> 
              <span class="text-gray-700 font-medium">{{ itemInfo.date }}</span>
          </div>

          <!-- Transaction Amount -->
          <div class="mb-3">
              <span class="text-gray-500">Amount: </span> 
              <span class="text-gray-700 font-medium">{{ '$' + itemInfo.amount }}</span>
          </div>
      </div>

      <!-- Card Footer -->
      <div class="bg-gray-100 px-4 py-3 flex justify-start gap-10">
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          View Transaction Detail
        </button>
        <TransactionEdit :itemIndex="itemIndex" />
        <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Delete Transaction
        </button>
      </div>
</template>

<script setup>
const props = defineProps({
  itemInfo: Object,
  itemIndex: Number
})
</script>