import { useState } from 'react'
import request from '../Request'

export const useVoucher = () => {
    const [voucherData, setVoucherData] = useState([])
    const [voucherTotal, setVoucherTotal] = useState([])

    const handleGetAllVoucher = async(paramsItems) =>{
        try {
            const params = new URLSearchParams()
            for(const [key, value] of Object.entries(paramsItems)){
                if(value){
                    params.append(key, value)
                }
            }
            const response = await request.get(`getAllVoucher?${params.toString()}`)
            setVoucherData(response.data.data)
            setVoucherTotal(response.data.total)
        } catch (error) {
            console.log("error at fetching voucher", error.message)
        }
    }
  return {
    voucherData, voucherTotal, handleGetAllVoucher
  }
}
