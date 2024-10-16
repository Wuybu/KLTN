// components/ProductPage.js
import React from 'react';
import Layout from './Layout';
import Button from 'react-bootstrap/Button';
import { Carousel } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


import { FaStar } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";

import { IoIosArrowForward } from "react-icons/io";

import H8 from '../assets/images/H8.png';

import A01 from '../assets/images/RCMH8/A01.png';
import A02 from '../assets/images/RCMH8/A02.png';
import A03 from '../assets/images/RCMH8/A03.png';
import A04 from '../assets/images/RCMH8/A04.png';
import A05 from '../assets/images/RCMH8/A05.png';
import A06 from '../assets/images/RCMH8/A06.png';
import A07 from '../assets/images/RCMH8/A07.png';
import A08 from '../assets/images/RCMH8/A08.png';
import A09 from '../assets/images/RCMH8/A09.png';
import A10 from '../assets/images/RCMH8/A10.png';


const imagesSlide1 = [
  { id: 1, src: A01, title: 'Tân Ninja Hattori - Tập 7' , description: 'Mô tả hình ảnh 1', discountedPrice: "23.750 đ  ",discount: "  -5%",originalPrice: "23.750 đ"},
  { id: 2, src: A02, title: 'Tân Ninja Hattori - Tập 3', description: 'Mô tả hình ảnh 2' ,discountedPrice: "24.000 đ  ",discount: "  -4%",originalPrice: "112.000 đ" },
  { id: 3, src: A03, title: 'Combo Manga - Fullmetal Alchemist - Cang Giả Kim...', description: 'Mô tả hình ảnh 3',discountedPrice: "185.250 đ  ",discount: "  -5%",originalPrice: "182.250 đ" },
  { id: 4, src: A04, title: `My Hero Academia - Học Viện Siêu Anh Hùng - T..`, description: 'Mô tả hình ảnh 4', discountedPrice: "150.100 đ  ",discount: "  -5%",originalPrice: "158.000 đ"},
  { id: 5, src: A05, title: 'Cardcaptor Sakura - Thẻ Bài Pha Lê - Tập 13', discountedPrice: "349.600 đ  ",discount: "  -5%",originalPrice: "368.000 đ"},

];

const imagesSlide2 = [
  { id: 6, src: A06, title: `World Trigger - Tập 18`, description: 'Mô tả hình ảnh 1', discountedPrice: "235.600 đ  ",discount: "  -5%",originalPrice: "248.000 đ"},
  { id: 7, src: A07, title: 'Yotsuba&! - Tập 6', description: 'Mô tả hình ảnh 1', discountedPrice: "185.250 đ  ",discount: "  -5%",originalPrice: "195.000 đ"},
  { id: 8, src: A08, title: 'Altair - Cánh Đại Bàng Kiêu Hãnh - Tập 22', description: 'Mô tả hình ảnh 1', discountedPrice: "11.070 đ  ",discount: "  -18%",originalPrice: "13.600 đ"},
  { id: 9, src: A09, title: `Spy X Family - Tập 10 - Tặng Kèm Standee`, description: 'Mô tả hình ảnh 1', discountedPrice: "369.550 đ  ",discount: "  -5%",originalPrice: "389.000 đ"},
  { id: 10, src: A10, title: `Đạo Làm Chồng Đảm - Tập 10`, description: 'Mô tả hình ảnh 1', discountedPrice: "377.100 đ  ",discount: "  -10%",originalPrice: "377.100 đ"},

];

const ProductPage = ({ product, onAddToCart }) => {

const handleAddToCart = () => {
    // Logic thêm sản phẩm vào giỏ hàng
    onAddToCart(); // Truyền ID hoặc thông tin sản phẩm
  };
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  return (
    <Layout>
      <div className='product-page'>
        <div className='container pt-2'>
          <div className='row'>
            <div className='col-5 bg-white'style={{borderRadius:'10px', height:'1040px'}}>
              <div className='product-view' >
                <br/>
                <img src={H8} style={{height:'420px', width:'420px',}} alt=''></img>
              </div>
              <Button 
        variant="outline-danger" 
        style={{ fontFamily: 'Nunito Sans, sans-serif', width: '240px', alignItems: 'center' , marginTop:'20px'}} 
        onClick={handleAddToCart} // Gọi hàm xử lý khi nhấn nút
      >
        <RiShoppingCart2Line style={{ width:'20px',fontSize: '18px', color: '#C80000', marginRight: '5px' }} />
        Thêm vào giỏ hàng
      </Button>          <Button variant="danger" style={{fontFamily: 'Nunito Sans, sans-serif',marginLeft:'12px', width:'240px',marginTop:'20px'}}onClick={onAddToCart}>Mua Ngay</Button>

              <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '16px', fontWeight: 'bold', marginTop:'15px'}}>Chính sách ưu đãi của Fahasa</p>
              <p onClick={handleShow} style={{  fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px', lineHeight:'0.5' }}><FaShippingFast style={{fontSize: '18px', color:'#C80000', marginRight:'5px'}}/><strong>Thời gian giao hàng:</strong> Giao hàng và uy tín<IoIosArrowForward style={{fontSize: '18px',marginLeft:'200px' }}/></p>
              <p onClick={handleShow} style={{  fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px', lineHeight:'0.5' }}><FaBoxOpen style={{fontSize: '18px', color:'#C80000', marginRight:'5px'}}/><strong>Chính sách đổi trả:</strong> Đổi trả miễn phí toàn quốc<IoIosArrowForward style={{fontSize: '18px', marginLeft:'170px' }}/></p>
              <p onClick={handleShow} style={{  fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px', lineHeight:'0.5' }}><AiFillShop style={{fontSize: '18px', color:'#C80000', marginRight:'5px'}}/><strong>Chính sách khách sỉ:</strong> Ưu đãi khi mua số lượng lớn<IoIosArrowForward style={{fontSize: '18px', marginLeft:'142px' }}/></p>

{/* Offcanvas Modal */}
<Modal show={showModal} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Thông tin chi tiết</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {modalContent} {/* Sử dụng modalContent thay vì chuỗi tĩnh */}
              </Modal.Body>
              <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Đóng</Button>
              </Modal.Footer>
            </Modal>

            </div>
            <div className='col-7'>
              <div className='row-1 bg-white' style={{borderRadius:'10px',height:'220px'}}>
                <div className='Row pt-3 ' style={{marginLeft:'15px',marginRight:'15px'}}>
                <h3>Tân Ninja Hattori - Tập 8</h3>
                <div className='d-flex justify-content-between pt-2'>
                  <div className='Col pt-2' style={{fontSize:'14px',lineHeight:'0.8'}}>
                    <p>Nhà cung cấp: <strong>Nhà Xuất Bản Kim Đồng</strong></p>
                    <p>Nhà xuất bản: <strong>Kim Đồng</strong></p>

                    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Thành phần Đánh Giá */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {/* Đánh Giá Bằng Sao */}
        <div style={{ display: 'flex', marginRight: '10px' }}>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#d3d3d3"
              width="24px"
              height="24px"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Văn Bản Đánh Giá */}
        <div style={{ color: '#ff9800', marginRight: '10px' }}>
          (0 đánh giá)
        </div>

        {/* Dấu phân cách */}
        <div style={{ borderLeft: '1px solid #ccc', height: '24px', marginRight: '10px' }}></div>

        {/* Thông Tin Đã Bán */}
        <div style={{ color: '#888' }}>
          Đã bán <span style={{ fontWeight: 'bold', color: '#000' }}>78</span>
        </div>
      </div>

      {/* Hiển Thị Giá */}
          <div style={{display:'flex'}}>
      <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#C00000	' }}>
        24.000 đ
      </div>
      <div style={{fontSize:'16px', textDecoration: 'line-through', color: '#888', marginLeft:'5px', marginTop:'10px' }}>
        25.000 đ
      </div>
      <div style={{fontSize:'18px', backgroundColor: '#C00000', color: 'white', display: 'inline-block', padding: '7px 8px', borderRadius: '5px', marginLeft:'5px' }}>
        -4%
      </div>
      </div>
    </div>

                  </div>
                  <div className='Col' style={{fontSize:'14px',marginRight:'70px',lineHeight:'0.8'}}>
                    <p>Tác giả: <strong>Fujiko Fujio A</strong></p>
                    <p>Hình thức bìa: <strong>Bìa Mềm</strong></p>
                  </div>
                  </div>
              </div>
              </div>

              <div className='row-3 bg-white'style={{borderRadius:'10px', marginTop:'10px'}}>
                <div className='Row pt-3 pb-2' style={{marginLeft:'15px',marginRight:'15px'}}>
                  <h5>Thông tin chi tiết</h5>
                  <Row>
                    <div className='col-4'>
                      <div className='p' style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',marginTop:'14px',color:'#989898'}}>
                      <p >Mã hàng</p>
                      <p>Tên Nhà Cung Cấp</p>
                      <p>Tác giả</p>
                      <p>Người Dịch</p>
                      <p>NXB</p>
                      <p>Năm XB</p>
                      <p>Ngôn Ngữ</p>
                      <p>Trọng lượng (gr)</p>
                      <p>Kích Thước Bao Bì</p>
                      <p>Số trang</p>
                      <p>Hình thức</p>
                      <p>Sản phẩm bán chạy nhất</p>
                    </div >
                    </div>
                    <div className='col-6'>
                    <div className='p' style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',marginTop:'14px',color:'#989898'}}>
                      <p>8935352606667</p>
                      <p>Nhà Xuất Bản Kim Đồng</p>
                      <p>Fujiko Fujio A</p>
                      <p>Thanh Ngân</p>
                      <p>Kim Đồng</p>
                      <p>2024</p>
                      <p>Tiếng Việt</p>
                      <p>155</p>
                      <p>17.6 x 11.3 x 0.9 cm</p>
                      <p>192</p>
                      <p>Bìa Mềm</p>
                      <p>Top 100 sản phẩm Manga Khác bán chạy của tháng</p>
                    </div >
                    </div>
                  </Row>
                  <div className='p' style={{fontSize: '14px', lineHeight:'1.4'}}>
                    <p>Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...</p>
                    <p style={{color:'red'}}>Chính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc</p>
                  </div>
               </div>
              </div>

              <div className='row-4 bg-white' style={{borderRadius:'10px', marginTop:'10px'}}>
                <div className='Row pt-3 pb-2' style={{marginLeft:'15px',marginRight:'15px'}}>
                  <h5>Mô tả sản phẩm</h5>
                  <h6 style={{fontSize:'15px',marginTop:'15px', marginBottom:'12px'}}>Tân Ninja Hattori - Tập 8</h6>
                  <p style={{fontSize:'14px'}}>Vui nhộn nhưng không kém phần kịch tính, phần tiếp theo của series tuổi thơ Ninja Hattori - Tân Ninja Hattori sẵn sàng đón một mùa hè đầy lí thú cùng các bạn độc giả!! Tiếp tục với những câu chuyện thú vị về Hattori, Kenichi và những người bạn Ninja, trọn bộ 8 tập của Tân Ninja Hattori sẽ chính thức lên kệ.</p>
                </div>
              </div>
        </div>
        </div>

        <br/>
        <div className='container bg-white pt-3 pb-3'style={{borderRadius:'10px'}}>
          <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '17px', fontWeight: 'bold' }} >FAHASA GIỚI THIỆU</p>

          <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide1.map((product, idx) => (
          <Col key={idx}>
            <Card style={{ border: 'none', boxShadow: 'none'}}>
              <Card.Img variant="top" src={product.src} style={{height:'200px',}} />
              <Card.Body>
                <Card.Title style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.title}</Card.Title>
                <Card.Text>
                <span className="price-discounted" style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.discountedPrice}</span>
                  <span className="discount-rate" style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.discount}</span><br/>
                  <span className="price-original" style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.originalPrice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>

    {/* Slide 2 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide2.map((product, idx) => (
          <Col key={idx}>
            <Card style={{ border: 'none', boxShadow: 'none' }}>
              <Card.Img variant="top" src={product.src} style={{height:'200px'}}/>
              <Card.Body>
                <Card.Title style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.title}</Card.Title>
                <Card.Text>
                <span className="price-discounted" style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.discountedPrice}</span>
                  <span className="discount-rate" style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.discount}</span><br/>
                  <span className="price-original" style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px'}}>{product.originalPrice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>
  </Carousel>
        </div>
        <br/>
        <div className='container bg-white pt-3 pb-3'style={{borderRadius:'10px'}}>
          <p style={{  fontFamily: 'Nunito Sans, sans-serif',fontSize: '17px', fontWeight: 'bold'  }} >Đánh giá sản phẩm</p>
          <div className='row'>
            <div className='col-1' style={{marginLeft:'10px'}}>
              <p style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '48px',lineHeight:'0.5', marginTop:'15px', marginLeft:'20px'}}><strong>0</strong><p style={{fontSize: '24px', marginLeft:'25px'}}>/5</p></p>
              <p style={{color:'#C8C8C8',lineHeight:'0.2'}}><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p style={{fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px', color:'#888888',lineHeight:'0.2',marginLeft:'3px'}}>(0 đánh giá)</p>
            </div>
            <div className='col-3' style={{marginTop:'10px'}}>
              <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',lineHeight:'0.8'}}>5 sao </p>
              <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',lineHeight:'0.8'}}>4 sao </p>
              <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',lineHeight:'0.8'}}>3 sao </p>
              <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',lineHeight:'0.8'}}>2 sao </p>
              <p style={{ fontFamily: 'Nunito Sans, sans-serif',fontSize: '14px',lineHeight:'0.8'}}>1 sao </p>
            </div>
            <div className='col-7'>
            <p style={{textAlign:'end',fontSize:'14px', marginTop:'50px'}}>Chỉ có thành viên mới có thể viết nhận xét. Vui lòng đăng nhập hoặc đăng ký.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    </Layout>
  );
};

export default ProductPage;
