<template>
  <button class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
    v-on:click="editHandler">
    index - {{ itemIndex }}
    Edit Transaction
  </button>
</template>

<script setup>
import { useTransactionState } from '@/stores/transactionState';

const transactionState = useTransactionState();

const props = defineProps({
  itemIndex: Number
})

const editHandler = () => {
  const transactionObj = transactionState.getTransactionList[props.itemIndex]
  console.log(transactionObj);
  transactionState.setSelectedTransaction(transactionObj);
}
</script>