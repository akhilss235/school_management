import React from 'react'

export const useCommon = () => {
    const getAmountWithCommas = (amount)=>{
        return amount.toLocaleString()
    }
  return {
    getAmountWithCommas
  }
}
