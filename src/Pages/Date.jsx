import { InputGroup, Form } from 'react-bootstrap';

export const GetDate = ({title, selectedDate, setSelectedDate}) => {

    const onChange = (e)=>{
        setSelectedDate(e.target.value);
    }

  return (
    <InputGroup style={{height:'35px'}} >
        <InputGroup.Text style={{ backgroundColor: "#FFFFFF" }}>
            {title} :
        </InputGroup.Text>
        <Form.Control 
            id="Fromdate" 
            type="date" 
            name="Fromdate" 
            style={{ fontSize: "small", borderLeft: "none"}} 
            value={selectedDate}
            onChange={onChange}
        />
    </InputGroup>
  )
}
