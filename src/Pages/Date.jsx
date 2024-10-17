import { InputGroup, Form } from 'react-bootstrap';

export const GetDate = ({title, selectedDate, setSelectedDate, fromDate}) => {

    const onChange = (e)=>{
        setSelectedDate(e.target.value);
    }

    const updatedDate = () => {
        if (fromDate) {
            const dateObj = new Date(fromDate);
            if (!isNaN(dateObj)) { 
                const nextDate = new Date(dateObj);
                nextDate.setDate(dateObj.getDate() + 1); 
                return nextDate.toISOString().split("T")[0];
            }
        }
        return "";
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
            min={ updatedDate() || ""}
        />
    </InputGroup>
  )
}
