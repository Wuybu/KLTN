import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../../assets/images/banner.png';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../assets/images/logo.png';
import { FaSearch } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { MdOutlineShoppingCart, MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const Navigation = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const categories = [
    {
       name: "Sách Trong Nước", 
       title1: "Văn Học",
       title2: "Kinh Tế",
       detail1: "Tiểu thuyết, Truyện Ngắn - Tản Văn, Light Novel, Ngôn Tình",
       detail2: "Nhân Vật - Bài Học Kinh Doanh,Quản Trị - Lãnh Đạo,Marketing - Bán Hàng, Phân Tích Kinh Tế" 
    },
    { 
      name: "FOREIGN BOOKS",
      title1: "FICTION",
      detail1: "Contemporary Fiction, Romance, Fantasy, Classics",
      title2: "BUSINESS & MANAGEMENT",
      detail2: "Business & Management, Economics, Finance & Accounting" 
    },
    { 
      name: "VPP - Dụng Cụ Học Sinh", 
      title1: "BÚT - VIẾT",
      title2: "DỤNG CỤ HỌC SINH",
      detail2: "Gôm - Tẩy, Gọt Bút Chì, Thước, Bóp Viết - Hộp Bút, Bộ Dụng Cụ Học Tập",
      detail1: "Bút Bi - Ruột Bút Bi, Bút Gel - Bút Nước, Bút Mực - Bút Máy,Bút Dạ Quang, Bút Chì - Ruột Bút Chì" },
    { 
      name: "Đồ Chơi", details: "Xếp Hình - Lắp Ghép,Đồ Chơi Giáo Dục, Đồ Chơi Điều Khiển,Board Game" },
    { 
      name: "Làm Đẹp - Sức Khỏe", details: "Khẩu Trang Các Loại,Nước Rửa Tay - Xà Phòng,Băng Keo Cá Nhân,Khăn Giấy - Giấy Ướt, Chăm Sóc Cá Nhân Khác,Sản Phẩm Làm Đẹp" },


  ];

  // Hàm để hiển thị dropdown khi hover vào icon
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  // Hàm để ẩn dropdown khi chuột rời khỏi
  const handleMouseLeave = () => {
    setShowDropdown(false);
    setHoveredItem(null);
  };

  // Hàm xử lý khi hover vào từng item
  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  return (
    <>
      <div style={{ backgroundColor: '#D80000' }}>
        <img src={banner} alt="" style={{ width: '80%', marginLeft: '140px' }} />
      </div>

      <Navbar expand="lg" className="bg-body-tertiary" style={{ height: '60px' }}>
        <Container>
          <Navbar.Brand href="http://localhost:3000/">
            <img src={logo} style={{ width: '220px', marginLeft: '15px' }} alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
              <NavDropdown title={<AiOutlineProduct size={36} style={{ marginLeft: '20px', color: 'gray' }} />} show={showDropdown} id="basic-nav-dropdown">
                <Row style={{ minWidth: '727px', minHeight: '200px' }}>
                  {/* Cột 1: Danh sách sản phẩm */}
                  <Col md={5}>
                    {categories.map((category, index) => (
                      <NavDropdown.Item
                        key={index}
                        onMouseEnter={() => handleItemHover(category)}
                        onMouseLeave={() => setHoveredItem(null)}
                        khjkjgdfj
                      >
                        <h6>{category.name}</h6>
                      </NavDropdown.Item>
                    ))}
                  </Col>

                  {/* Cột 2: Hiển thị chi tiết sản phẩm khi hover */}
                  <Col md={6}>
                    {hoveredItem ? (
                      <Row>
                      {/* Chia chi tiết thành 2 cột */}
                      <h4>{hoveredItem.name}</h4>
                      <Col md={6}>
                      <h5>{hoveredItem.title1}</h5>
                        <p style={{fontSize:'14px'}}>{hoveredItem.detail1}</p>
                      </Col>
                      <Col md={6}>
                      <h5>{hoveredItem.title2}</h5>
                        <p style={{fontSize:'14px'}}>{hoveredItem.detail2}</p>
                      </Col>
                    </Row>
                    ) : (
                      <div>
                        <p>Di chuột vào danh mục để xem chi tiết</p>
                      </div>
                    )}
                  </Col>
                </Row>
              </NavDropdown>
            </div>

            <Form>
              <Row>
                <Col xs="auto">
                  <InputGroup>
                    <Form.Control type="text" placeholder="Sách giáo khoa 2024" style={{ marginLeft: '15px', width: '530px' }} />
                    <Button type="submit" variant="danger" style={{ borderRadius: '10px', width: '90px' }}><FaSearch size={20} /></Button>
                  </InputGroup>
                </Col>
              </Row>
            </Form>

            <Nav className="me-auto">
              <Nav.Link href="#Thong bao">
                <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'gray', fontFamily: 'Nunito Sans, sans-serif', fontSize: '12px' }}>
                  <GoBell size={24} /> Thông Báo
                </div>
              </Nav.Link>
              <Nav.Link href="/GioHang">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'gray', fontFamily: 'Nunito Sans, sans-serif', fontSize: '12px' }}>
                  <MdOutlineShoppingCart size={24} /> Giỏ Hàng
                </div>
              </Nav.Link>
              <Nav.Link href="/TaiKhoan">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'gray', fontFamily: 'Nunito Sans, sans-serif', fontSize: '12px' }}>
                  <MdOutlineAccountCircle size={24} /> Tài Khoản
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
