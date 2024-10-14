import { useState } from 'react'
import request from '../Request'

export const useAccountView = () => {
    const [accountViewData, setAccountViewData] = useState([])
    const [accountViewTotal, setAccountViewTotal] = useState(0)

    const handleAllAccountView = async(paramItems)=>{
        try {
            const params = new URLSearchParams();
            for (const [key, value] of Object.entries(paramItems)) {
                if (value) {
                    params.append(key, value);
                }
            }
            const response = await request.get(`getAllAccountView?${params.toString()}`)
            setAccountViewData(response.data.data)
            setAccountViewTotal(response.data.total)
        } catch (error) {
            console.log("error at fetching account view", error)
        }
    }
  return {
    accountViewData, accountViewTotal, handleAllAccountView
  }
}
