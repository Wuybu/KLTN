import React, { useState } from 'react';
import Layout from './Layout';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles/TaiKhoan.css'; // Import file CSS tùy chỉnh

const UncontrolledExample = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: '400px' }}>
        <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3 custom-tabs" >
          <Tab eventKey="login" title="Đăng Nhập" >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{fontSize:'14px'}}>Số điện thoại/Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập số điện thoại hoặc email"
                  style={{fontSize:'16px',opacity:'0.7'}}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label style={{fontSize:'14px'}}>Mật khẩu</Form.Label>
  <InputGroup>
    <div style={{ position: 'relative', width: '100%' }}>
      <Form.Control
        type={showPassword ? 'text' : 'password'}
        placeholder="Nhập mật khẩu"
        style={{ fontSize: '16px', opacity: '0.7', paddingRight: '50px' }} // Added padding to make room for the span
      />
      <span
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',right: '10px',top: '50%',transform: 'translateY(-50%)',color: 'blue',fontSize: '13px',cursor: 'pointer',
        }}
      >
        {showPassword ? 'Ẩn' : 'Hiện'}
      </span>
    </div>
  </InputGroup>
</Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="danger" type="submit" className="mt-3" style={{ width: '60%' }}>
                Đăng Nhập
              </Button>
            </div>
            </Form>
          </Tab>

          <Tab eventKey="register" title="Đăng Ký" >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{fontSize:'14px'}}>Số điện thoại</Form.Label>
                <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Nhập số điện thoại"
                />
                <span
                    style={{position: 'absolute',right: '10px',top: '50%',transform: 'translateY(-50%)',color: 'blue',fontSize: '13px',cursor: 'pointer', }}>
                    {'Gửi mã OTP'}
                </span>                
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label style={{fontSize:'14px'}}>Mã xác nhận OTP</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu"
                  /> 
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
                <Form.Label style={{fontSize:'14px'}}>Xác nhận mật khẩu</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu"
                  />
                <span
                    onClick={togglePasswordVisibility}
                    style={{position: 'absolute',right: '10px',top: '50%',transform: 'translateY(-50%)',color: 'blue',fontSize: '13px',cursor: 'pointer', }}>
                    {showPassword ? 'Ẩn' : 'Hiện'}
                </span>
                </InputGroup>
              </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="danger" type="submit" className="mt-3" style={{ width: '60%' }}>
                Đăng Ký
              </Button>
            </div>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

const TaiKhoan = () => {
  return (
    <Layout>
      <div className='account-page pt-2'>
        <div className='container bg-white pt-5 pb-5'>
          <UncontrolledExample />
        </div>
      </div>
    </Layout>
  );
}

export default TaiKhoan;
