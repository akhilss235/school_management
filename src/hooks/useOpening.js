import React, { useState } from 'react'
import request from '../Request'

export const useOpening = () => {

    const [openingBalanceData, setOpeningBalanceData] = useState([])
    
    const handleGetAllOpeningBalance = async(limit = 10, page = 1, from = "", to = "", accountHead = "", subAccountHead = "") => {
        try {
            const params = new URLSearchParams();
    
            if (accountHead) params.append("accountHead", accountHead);
            if (subAccountHead) params.append("subAccountHead", subAccountHead);
            if (from) params.append("from", from);
            if (to) params.append("to", to);
            if (page) params.append("page", page);
            if (limit) params.append("limit", limit);
    
            const response = await request.get(`getAllOpeningBalance?${params.toString()}`);
            
            console.log("response", response);
            setOpeningBalanceData(response.data.data);
        } catch (error) {
            console.log("error at openingBalance", error);
        }
    }

  return {
    openingBalanceData,
    handleGetAllOpeningBalance
  }
}
