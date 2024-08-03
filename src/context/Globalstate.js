import React, { createContext, useReducer} from 'react';
import AppReducer from './Appreducer';

// Initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
  error: null,
  loading: false
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function getTransactions() {
    dispatch({
      type: 'GET_TRANSACTIONS',
      payload: JSON.parse(localStorage.getItem('transactions')) || []
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      error: state.error,
      loading: state.loading,
      getTransactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
