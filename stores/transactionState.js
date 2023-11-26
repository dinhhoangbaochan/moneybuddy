import { defineStore } from 'pinia';

export const useTransactionState = defineStore('transaction', {
  state: () => {
    return {
      transactionList: [],
    }
  },
  getters: {
    getTransactionList: (state) => state.transactionList
  }
});