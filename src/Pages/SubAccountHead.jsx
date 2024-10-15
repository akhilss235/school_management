import React, { useState } from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import useAccountHeads from '../hooks/useAccountHeads';


export const SubAccountHead = ({onSelect, isTitle=true}) => {
    const {subAccountHeads} = useAccountHeads()
    const [selectedHead, setSelectedHead] = useState("");

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedHead(selectedValue);
        onSelect(selectedValue); 
    };

  return (
    <InputGroup>
        {
            isTitle &&
            <InputGroup.Text id="basic-addon1" style={{ backgroundColor: "#FFFFFF" }}>
                Sub Account Head :
            </InputGroup.Text>
        }
        <Form.Select 
            aria-describedby="basic-addon1" 
            style={{ borderLeft: isTitle ? "none" : "" }}
            value={selectedHead}
            onChange={handleSelectChange}
        >
            <option value="">All</option>
            {
                subAccountHeads.map((subAccountHead, index) => (
                    <option value={subAccountHead} key={index}>{subAccountHead}</option>
                ))
            }
        </Form.Select>
    </InputGroup>
  )
}
