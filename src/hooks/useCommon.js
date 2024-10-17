import React from 'react'

export const useCommon = () => {
    const getAmountWithCommas = (amount)=>{
        return amount.toLocaleString()
    }

    const getDate = (date) => {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options);
  };
    


  return {
    getAmountWithCommas,
    getDate
  }
}
