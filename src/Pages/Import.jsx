import React from 'react'
import "../Styles/Import.css"
import { useImport } from '../hooks/useImport'

export const Import = () => {
    const {data, tableData} = useImport()
  return (
    <div className='import-page'>
        <div className='import-head'>
            <h3>Students</h3>
            <button className='download-btn'>Download Sample Data</button>
        </div>
        <div className='details'>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.description}</li>
                ))}
            </ul>
        </div>
        <div className='sample-table'>
            <table>
                <thead>
                    <tr>
                        {tableData.map((item) => (
                        <th key={item.id}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {tableData.map((item) => (
                        <td key={item.id}>sample Data</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='import-cont'>
            <div className='input-cont'>
                <label>select file</label>
                <input type="file" name='file'/>
            </div>
            <div >
                <button className='import-btn'>Import</button>
            </div>
        </div>

    </div>
  )
}
