import React from 'react';
import { useState, useRef, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button,  } from 'react-bootstrap';
import trash from '../img/trash.svg';



function StudentRegister() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Function to trigger file input when button is clicked
  const handleFileClick = () => {
    document.getElementById('fileInput').click();
  };

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to clear the file
  const handleFileRemove = () => {
    setSelectedFile(null);
    document.getElementById('fileInput').value = ''; // Reset file input value
  };
  return (
    <div className="container-fluid bg-pale-blue py-3">
      <Form className='studentregisterform roboto-font'>
        <div className=' p-3 bg-white rounded-4'>
          <Row className='justify-content-between align-items-center mt-2 mb-3'>
            <Col xs={'auto'}>
              <span className='fw-600 roboto-font' style={{fontSize:'20px'}}>New Student</span>
            </Col>
          </Row>
          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>EMIS id</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Name</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Name in Tamil</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Class</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Select 
                        >
                          <option>1</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Section</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Select 
                        >
                          <option>1</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Father Name</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Father Name in Tamil</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Mother Name</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Mother Name in Tamil</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Aadhar Number</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Phone Number</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Date of Birth</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control
                      type="date"
                      />
                    </Col>
                </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Gender</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Select 
                        >
                          <option>1</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Date of Joining</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                      type="date"
                      />
                    </Col>
                </Row>
            </Col>
            <Col  className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Address</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Pincode</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Blood Group</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Select 
                        >
                          <option>1</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Religion</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Medium of Instruction</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
          </Row>


          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Admission Number</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Community</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Disability Group Name</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Group Code</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Mother Tongue</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Bank Account</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>IFSC Code</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>MICR</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>TC Number</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                          type="text" 
                          placeholder="" 
                          className=""
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>TC Status</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Select 
                        >
                          <option>1</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>TC Issue Date</Form.Label>
                  </Col>
                </Row>
                <Row>
                    <Col>
                      <Form.Control 
                      type="date"
                      />
                    </Col>
                </Row>
            </Col>
            <Col sm={6} xl={3} className='d-flex flex-column justify-content-between'>
                <Row>
                  <Col>
                    <Form.Label column sm={12}>Photo of Student</Form.Label>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col>
                    <Form.Control
                      id="fileInput"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  { !selectedFile ? (
                    <Row>
                      <Col>
                        <Button
                        style={{backgroundColor:'white',color:'#3474EB',width:'100%',border:'1px dashed #3474EB'}}
                        onClick={handleFileClick}
                        >
                          Upload Image
                        </Button>

                      </Col>
                    </Row>
                  ):(
                    <Row>
                      <Col xs='auto' className='d-flex align-items-center'>
                        <span className="me-1 mt-2"
                        style={{
                        wordBreak: 'break-all',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: 'block',
                        color:'#3474EB'
                      
                      }}
                        >{selectedFile.name}</span>
                        <Button
                          variant="link"
                          onClick={handleFileRemove}
                          className=" p-0  d-flex justify-content-center align-items-center mt-2"
                          style={{ width: '16px', height: '16px' }}
                        >
                          <img
                          className=''
                            src={trash}
                            alt="Delete"
                            style={{ width: '14px',height: '14px', cursor: 'pointer' }}
                          />
                        </Button>
                      </Col>
                    </Row>
                    )
                }

                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-start align-items-center">

                  </Col>
                </Row>
            </Col>
          </Row>
        </div>

        <Row className='justify-content-end align-items-center my-4 gy-2'>
          <Col xs={'auto'}>
            <Button className='fw-600' style={{backgroundColor:'#FFFFFF',color:'#ED1C00',border:'none',width:'160px'}}>
              Discard
            </Button>
          </Col>
          <Col xs={'auto'}>
            <Button className='fw-600' style={{backgroundColor:'#3474EB',color:'#FFFFFF',border:'none',width:'160px'}}>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>

  );
}



export default StudentRegister