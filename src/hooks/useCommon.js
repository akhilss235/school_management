import React from 'react'

export const useCommon = () => {
    const getAmountWithCommas = (amount)=>{
        return amount.toLocaleString()
    }

    const getDate = (date)=>{
        return new Date(date).toLocaleDateString()
    }
    


  return {
    getAmountWithCommas,
    getDate
  }
}
