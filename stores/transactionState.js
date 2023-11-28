import { defineStore } from 'pinia';

export const useTransactionState = defineStore('transaction', {
  state: () => {
    return {
      transactionList: [],
      selectedTransaction: {}
    }
  },

  actions: {
    setSelectedTransaction(selectedTransactionObj) {
      this.selectedTransaction = {
        id: selectedTransactionObj.id,
        type: selectedTransactionObj.type,
        name: selectedTransactionObj.name,
        date: selectedTransactionObj.date,
        amount: selectedTransactionObj.amount
      }
    }
  },

  getters: {
    getTransactionList: (state) => state.transactionList,
    getSelectedTransaction: (state) => state.selectedTransaction
  }
});