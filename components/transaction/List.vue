<template>
  <!-- Repeat this section for each transaction -->
  <div class="bg-white shadow-lg rounded-lg mb-6 overflow-hidden" v-for="(item, index) in list">
    {{ index }}
    <TransactionItem :itemInfo="item" :itemIndex="index" />
  </div>
  <!-- Repeat End -->
</template>

<script setup>
import { useTransactionState } from '@/stores/transactionState';

const transactionState = useTransactionState();
const list = transactionState.getTransactionList;
</script>