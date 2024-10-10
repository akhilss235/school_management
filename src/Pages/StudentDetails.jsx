import React from 'react';
import { useState, useRef, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col, Button,  } from 'react-bootstrap';
import trash from '../img/trash.svg';
import { FaArrowLeftLong } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import studentdetailsimg from "../img/studentdetailsimg.svg";

function StudentDetails() {

  return (
    <div className="container-fluid bg-pale-blue roboto-font">
      <Row className='p-0 py-2 ps-1 bg-pale-blue'>
        <Col className='p-0'> 
            <FaArrowLeftLong  size={24} />
        </Col>
      </Row>
      <Row>
        <Col className='p-0 mb-2 rounded-4' style={{backgroundColor:'white'}}>
          <div className='detailsdiv border-1 p-3'>
            <Row className='justify-content-between align-items-center pb-2'>
              <Col xs={'auto'}>
                <span className='fw-600' style={{fontSize:'20px',color:'#3474EB'}}>Student Info</span>
              </Col>
              <Col xs={'auto'}>
                <Button style={{backgroundColor:'white',color:'#3474EB',border:'none'}}>
                  <Row>
                    <Col className='d-flex justify-content-center align-items-center pb-0 pe-1'>
                      <LuPencilLine  size={20} />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center ps-0'>
                      <span className='fw-600 poppins-font fw-normal' style={{lineHeight:'1'}}>Edit</span>
                    </Col>
                  </Row>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
                <Row className='mb-2'>
                  <Col sm={6} lg={4}>
                    <p className='detailslabel text-break'>label</p>
                  </Col>
                  <Col sm={6} lg={8}>
                    <p className='detailsvalue text-break'>value</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} lg={4}>
                <Row className='justify-content-center justify-content-lg-end'>
                  <Col xs={'auto'} >
                    <div className='studentdetailsimagediv'>
                      <img src={studentdetailsimg} alt="studentimage" class="studentsdetailsimage"/>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default StudentDetails