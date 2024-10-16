import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/FB.css';


import VPPMV01 from '../../assets/images/VPP/VPPMV01.png';
import VPPMV02 from '../../assets/images/VPP/VPPMV02.png';
import VPPMV03 from '../../assets/images/VPP/VPPMV03.png';
import VPPMV04 from '../../assets/images/VPP/VPPMV04.png';
import VPPMV05 from '../../assets/images/VPP/VPPMV05.png';
import VPPMV06 from '../../assets/images/VPP/VPPMV06.png';
import VPPMV07 from '../../assets/images/VPP/VPPMV07.png';
import VPPMV08 from '../../assets/images/VPP/VPPMV08.png';
import VPPMV09 from '../../assets/images/VPP/VPPMV09.png';
import VPPMV10 from '../../assets/images/VPP/VPPMV10.png';
import VPPMV11 from '../../assets/images/VPP/VPPMV11.png';
import VPPMV12 from '../../assets/images/VPP/VPPMV12.png';
import VPPMV13 from '../../assets/images/VPP/VPPMV13.png';
import VPPMV14 from '../../assets/images/VPP/VPPMV14.png';
import VPPMV15 from '../../assets/images/VPP/VPPMV15.png';
import VPPMV16 from '../../assets/images/VPP/VPPMV16.png';

import VPPBDC01 from '../../assets/images/VPP/VPPBDC01.png';
import VPPBDC02 from '../../assets/images/VPP/VPPBDC02.png';
import VPPBDC03 from '../../assets/images/VPP/VPPBDC03.png';
import VPPBDC04 from '../../assets/images/VPP/VPPBDC04.png';
import VPPBDC05 from '../../assets/images/VPP/VPPBDC05.png';
import VPPBDC06 from '../../assets/images/VPP/VPPBDC06.png';
import VPPBDC07 from '../../assets/images/VPP/VPPBDC07.png';
import VPPBDC08 from '../../assets/images/VPP/VPPBDC08.png';
import VPPBDC09 from '../../assets/images/VPP/VPPBDC09.png';
import VPPBDC10 from '../../assets/images/VPP/VPPBDC10.png';


import VPPMT01 from '../../assets/images/VPP/VPPMT01.png';
import VPPMT02 from '../../assets/images/VPP/VPPMT02.png';
import VPPMT03 from '../../assets/images/VPP/VPPMT03.png';
import VPPMT04 from '../../assets/images/VPP/VPPMT04.png';
import VPPMT05 from '../../assets/images/VPP/VPPMT05.png';
import VPPMT06 from '../../assets/images/VPP/VPPMT06.png';
import VPPMT07 from '../../assets/images/VPP/VPPMT07.png';
import VPPMT08 from '../../assets/images/VPP/VPPMT08.png';
import VPPMT09 from '../../assets/images/VPP/VPPMT09.png';
import VPPMT10 from '../../assets/images/VPP/VPPMT10.png';





import { Row } from 'react-bootstrap';

const imagesSlide1 = [
  { id: 1, src: VPPMV01, title: 'Hộp 12 Bút Màu Acrylic 2 Đầu - Deli HM924-12' , description: 'Mô tả hình ảnh 1', discountedPrice: "122.840 đ  ",discount: "  -17%",originalPrice: "148.000 đ"},
  { id: 2, src: VPPMV02, title: 'Hộp 12 Bút Chì Màu Wood Free - Colokit...', description: 'Mô tả hình ảnh 2' ,discountedPrice: "21.350 đ  ",discount: "  -30%",originalPrice: "30.500 đ" },
  { id: 3, src: VPPMV03, title: 'Hộp 36 Bút Lông Màu Acrylic Markers 1 Đầu...', description: 'Mô tả hình ảnh 3',discountedPrice: "203.350 đ  ",discount: "  -17%",originalPrice: "245.000 đ" },
  { id: 4, src: VPPMV04, title: 'Hộp 36 Bút Marker Acrylic - iiGEN YZ59..', description: 'Mô tả hình ảnh 4', discountedPrice: "263.520 đ  ",discount: "  -28%",originalPrice: "366.000 đ"},
  { id: 5, src: VPPMV05, title: 'Hộp 12 Bút Lông Màu Acrylic Markers 2 Đ..', description: 'Mô tả hình ảnh 5', discountedPrice: "95.450 đ  ",discount: "  -17%",originalPrice: "115.000 đ"},
  { id: 6, src: VPPMV06, title: 'Hộp 38 Bút Màu Acrylic 2 Đầu - Deli HM924-48', description: 'Mô tả hình ảnh 6', discountedPrice: "485.000 đ  ",discount: "  -17%",originalPrice: "585.000 đ"},
  { id: 7, src: VPPMV07, title: 'Hộp 24 Bút Lông Màu Acrylic Markers 1 Đ..', description: 'Mô tả hình ảnh 7', discountedPrice: "134.460 đ  ",discount: "  -17%",originalPrice: "162.000 đ"},
  { id: 8, src: VPPMV08, title: 'Hộp 36 Bút Màu Acrylic 2 Đầu - Deli HM924-36', description: 'Mô tả hình ảnh 8', discountedPrice: "366.030 đ  ",discount: "  -17%",originalPrice: "441.000 đ"},
  { id: 9, src: VPPMV09, title: 'Hộp 18 Bút Chì Màu Wood Free - Colok..', description: 'Mô tả hình ảnh 9', discountedPrice: "29.750 đ  ",discount: "  -30%",originalPrice: "42.500"},
  { id: 10, src: VPPMV10, title: 'Hộp 38 Bút Màu Acrylic 2 Đầu - Deli HM924-48', description: 'Mô tả hình ảnh 10', discountedPrice: "485.550 đ  ",discount: "  -17%",originalPrice: "585.000 đ"},
  
];
const imagesSlide2 = [
  { id: 11, src: VPPMV11, title: 'Hộp 12 Bút Marker Acrylic - iiGEN YZ591..', description: 'Mô tả hình ảnh 1', discountedPrice: "73.440 đ  ",discount: "  -28%",originalPrice: "102.000 đ" },
  { id: 12, src: VPPMV12, title: 'Hộp 12 Bút Lông Màu Acrylic Markers 1 Đ..', description: 'Mô tả hình ảnh 2', discountedPrice: "68.890 đ  ",discount: "  -17%",originalPrice: "83.000 đ"},
  { id: 13, src: VPPMV13, title: 'Hộp 18 Bút Chì Màu Wood Free - Coloki..', description: 'Mô tả hình ảnh 3', discountedPrice: "29.750 đ  ",discount: "  -30%",originalPrice: "42.500 đ"},
  { id: 14, src: VPPMV14, title: 'Hộp 24 Bút Marker Acrylic - iiGEN YZ59..', description: 'Mô tả hình ảnh 4', discountedPrice: "175.680 đ  ",discount: "  -28%",originalPrice: "244.000 đ"},
  { id: 15, src: VPPMV15, title: 'Hộp 36 Bút Marker Acrylic - iiGEN YZ59..', description: 'Mô tả hình ảnh 5', discountedPrice: "263.520 đ  ",discount: "  -28% ",originalPrice: "366.000 đ"}, 
  { id: 16, src: VPPMV16, title: 'Hộp 24 Bút Chì Màu Wood Free - Colokit..', description: 'Mô tả hình ảnh 6', discountedPrice: "35.700 đ  ",discount: "  -30%",originalPrice: "51.000 đ"},
  { id: 17, src: VPPMV01, title: 'Hộp 12 Bút Màu Acrylic 2 Đầu - Deli HM924-12' , description: 'Mô tả hình ảnh 1', discountedPrice: "122.840 đ  ",discount: "  -17%",originalPrice: "148.000đ"},
  { id: 18, src: VPPMV10, title: 'Hộp 38 Bút Màu Acrylic 2 Đầu - Deli HM924-48', description: 'Mô tả hình ảnh 10', discountedPrice: "485.550 đ  ",discount: "  -17%",originalPrice: "585.000 đ"},
  { id: 19, src: VPPMV07, title: 'Hộp 24 Bút Lông Màu Acrylic Markers 1 Đ..', description: 'Mô tả hình ảnh 7', discountedPrice: "134.460 đ  ",discount: "  -17%",originalPrice: "162.000 đ"},
  { id: 20, src: VPPMV05, title: 'Hộp 12 Bút Lông Màu Acrylic Markers 2 Đ..', description: 'Mô tả hình ảnh 5', discountedPrice: "95.450 đ   ",discount: "  -17%",originalPrice: "115.000 đ"},
  
];
const imagesSlide3 = [
  { id: 1, src: VPPBDC01, title: 'Bộ Dụng Cụ Học Tập Game World - Little Tree GP8035-E..', description: 'Mô tả hình ảnh 1', discountedPrice: "49.960 đ  ",discount: "  -28%",originalPrice: "68.000 đ"},
  { id: 2, src: VPPBDC02, title: 'Bộ Sổ Khóa Và Bút Candy Plush Pocket - 3C4G 12053', description: 'Mô tả hình ảnh 1', discountedPrice: "359.100 đ  ",discount: "  -10%",originalPrice: "399.000 đ"},
  { id: 3, src: VPPBDC03, title: 'Bộ Dụng Cụ Học Tập Phi Hành Gia Space Journey - Little T..', description: 'Mô tả hình ảnh 1', discountedPrice: "48.960 đ  ",discount: "  -28%",originalPrice: "68.000 đ"},
  { id: 4, src: VPPBDC04, title: 'Bộ Dụng Cụ Học Tập - Keyroad KR971848', description: 'Mô tả hình ảnh 1', discountedPrice: "33.120 đ  ",discount: "  -28%",originalPrice: "46.000 đ"},
  { id: 5, src: VPPBDC05, title: 'Bộ Dụng Cụ Thước Và Compas To - Eras E215 - Màu Xanh..', description: 'Mô tả hình ảnh 1', discountedPrice: "41.820 đ  ",discount: "  -18%",originalPrice: " 51.000 đ"},
  { id: 6, src: VPPBDC06, title: 'Bộ Dụng Cụ Học Tập 4 Món Harry Potter Gryffindor ..', description: 'Mô tả hình ảnh 1', discountedPrice: "56.440 đ  ",discount: "  -17%",originalPrice: "68.000 đ"},
  { id: 7, src: VPPBDC07, title: 'Bộ Dụng Cụ Học Tập Đồ Ăn Nhanh Fast Food Party - Littl..', description: 'Mô tả hình ảnh 1', discountedPrice: "48.960 đ  ",discount: "  -28%",originalPrice: "69.000 đ"},
  { id: 8, src: VPPBDC08, title: 'Bộ Dụng Cụ Học Tập 4 Món Barbie - Maped CB98186700..', description: 'Mô tả hình ảnh 1', discountedPrice: "90.470 đ  ",discount: "  -17%",originalPrice: "109.000 đ"},
  { id: 9, src: VPPBDC09, title: 'Bộ Dụng Cụ Học Tập 4 Món Harry Potter - Maped..', description: 'Mô tả hình ảnh 1', discountedPrice: "56.440 đ  ",discount: "  -17%",originalPrice: "68.000 đ"},
  { id: 10, src: VPPBDC10, title: 'Bộ Dụng Cụ Eke 8 Món Hộp Nhựa - Deli G30204 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "66.000 đ  ",discount: "  -25%",originalPrice: "88.000 đ"},

  
];
const imagesSlide4 = [
  { id: 11, src: VPPBDC01, title: 'Bộ Dụng Cụ Học Tập Game World - Little Tree GP8035-E..', description: 'Mô tả hình ảnh 1', discountedPrice: "49.960 đ  ",discount: "  -28%",originalPrice: "68.000 đ"},
  { id: 12, src: VPPBDC02, title: 'Bộ Sổ Khóa Và Bút Candy Plush Pocket - 3C4G 12053', description: 'Mô tả hình ảnh 1', discountedPrice: "359.100 đ  ",discount: "  -10%",originalPrice: "399.000 đ"},
  { id: 13, src: VPPBDC03, title: 'Bộ Dụng Cụ Học Tập Phi Hành Gia Space Journey - Little T..', description: 'Mô tả hình ảnh 1', discountedPrice: "48.960 đ  ",discount: "  -28%",originalPrice: "68.000 đ"},
  { id: 14, src: VPPBDC04, title: 'Bộ Dụng Cụ Học Tập - Keyroad KR971848', description: 'Mô tả hình ảnh 1', discountedPrice: "33.120 đ  ",discount: "  -28%",originalPrice: "46.000 đ"},
  { id: 15, src: VPPBDC05, title: 'Bộ Dụng Cụ Thước Và Compas To - Eras E215 - Màu Xanh.', description: 'Mô tả hình ảnh 1', discountedPrice: "41.820 đ  ",discount: "  -18%",originalPrice: " 51.000 đ"},
  { id: 16, src: VPPBDC06, title: 'Bộ Dụng Cụ Học Tập 4 Món Harry Potter Gryffindor..', description: 'Mô tả hình ảnh 1', discountedPrice: "56.440 đ  ",discount: "  -17%",originalPrice: "68.000 đ"},
  { id: 17, src: VPPBDC07, title: 'Bộ Dụng Cụ Học Tập Đồ Ăn Nhanh Fast Food Party - Little..', description: 'Mô tả hình ảnh 1', discountedPrice: "48.960 đ  ",discount: "  -28%",originalPrice: "69.000 đ"},
  { id: 18, src: VPPBDC08, title: 'Bộ Dụng Cụ Học Tập 4 Món Barbie - Maped CB981867..', description: 'Mô tả hình ảnh 1', discountedPrice: "90.470 đ  ",discount: "  -17%",originalPrice: "109.000 đ"},
  { id: 19, src: VPPBDC09, title: 'Bộ Dụng Cụ Học Tập 4 Món Harry Potter - Maped..', description: 'Mô tả hình ảnh 1', discountedPrice: "56.440 đ  ",discount: "  -17%",originalPrice: "68.000 đ"},
  { id: 20, src: VPPBDC10, title: 'Bộ Dụng Cụ Eke 8 Món Hộp Nhựa - Deli G30204 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "66.000 đ  ",discount: "  -25%",originalPrice: "88.000 đ"},

  
];
const imagesSlide5 = [
  { id: 1, src: VPPMT01, title: 'Máy Tính Văn Phòng Flexio - Thiên Long CAL-008 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "96.000 đ  ",discount: "  -25%",originalPrice: "128.000 đ"},
  { id: 2, src: VPPMT02, title: 'Máy Tính Vinacal 570ES Plus II - Màu Xám', description: 'Mô tả hình ảnh 1', discountedPrice: "437.000 đ  ",discount: "  -5%",originalPrice: "460.000 đ"},
  { id: 3, src: VPPMT03, title: 'Máy Tính Khoa Học Flexio - Thiên Long Fx509VN - Mà..', description: 'Mô tả hình ảnh 1', discountedPrice: "96.750 đ  ",discount: "  -25%",originalPrice: "129.000 đ"},
  { id: 4, src: VPPMT04, title: 'Máy Tính Vinacal DC-12 - Màu Trắng', description: 'Mô tả hình ảnh 1', discountedPrice: "318.000 đ  ",discount: "  -15%",originalPrice: "375.000 đ"},
  { id: 5, src: VPPMT05, title: 'Máy Tính Vinacal DA-12TW - Màu Đen', description: 'Mô tả hình ảnh 1', discountedPrice: "344.000 đ   ",discount: "  -16%",originalPrice: "410.000 đ"},
  { id: 6, src: VPPMT06, title: 'Máy Tính Vinacal 570ES Plus II - Màu Xanh Dương', description: 'Mô tả hình ảnh 1', discountedPrice: "437.000 đ  ",discount: "  -5% ",originalPrice: "460.000 đ"},
  { id: 7, src: VPPMT07, title: 'Máy Tính Văn Phòng Flexio - Thiên Long CAL-009 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "62.250 đ  ",discount: "  -25%",originalPrice: "83.000 đ"},
  { id: 8, src: VPPMT08, title: 'Máy Tính Vinacal 570ES Plus II - Màu Hồng', description: 'Mô tả hình ảnh 1', discountedPrice: "437.000 đ  ",discount: "  -5%",originalPrice: "460.000 đ"},
  { id: 9, src: VPPMT09, title: 'Máy Tính Văn Phòng Flexio - Thiên Long CAL-010 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "485.550 đ  ",discount: "  -25%",originalPrice: "194.000 đ"},
  { id: 10, src: VPPMT10, title: 'Máy Tính Vinacal 680EX Plus - Màu Hồng', description: 'Mô tả hình ảnh 1', discountedPrice: "684.000 đ  ",discount: "  -5%",originalPrice: "720.000 đ"},

];
const imagesSlide6 = [
  { id: 11, src: VPPMT01, title: 'Máy Tính Văn Phòng Flexio - Thiên Long CAL-008 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "96.000 đ  ",discount: "  -25%",originalPrice: "128.000 đ"},
  { id: 12, src: VPPMT02, title: 'Máy Tính Vinacal 570ES Plus II - Màu Xám', description: 'Mô tả hình ảnh 1', discountedPrice: "437.000 đ  ",discount: "  -5%",originalPrice: "460.000 đ"},
  { id: 13, src: VPPMT03, title: 'Máy Tính Khoa Học Flexio - Thiên Long Fx509VN - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "96.750 đ  ",discount: "  -25%",originalPrice: "129.000 đ"},
  { id: 14, src: VPPMT04, title: 'Máy Tính Vinacal DC-12 - Màu Trắng', description: 'Mô tả hình ảnh 1', discountedPrice: "318.000 đ  ",discount: "  -15%",originalPrice: "375.000 đ"},
  { id: 15, src: VPPMT05, title: 'Máy Tính Vinacal DA-12TW - Màu Đen', description: 'Mô tả hình ảnh 1', discountedPrice: "344.000 đ   ",discount: "  -16%",originalPrice: "410.000 đ"},
  { id: 16, src: VPPMT06, title: 'Máy Tính Vinacal 570ES Plus II - Màu Xanh Dương', description: 'Mô tả hình ảnh 1', discountedPrice: "437.000 đ  ",discount: "  -5% ",originalPrice: "460.000 đ"},
  { id: 17, src: VPPMT07, title: 'Máy Tính Văn Phòng Flexio - Thiên Long CAL-009 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "62.250 đ  ",discount: "  -25%",originalPrice: "83.000 đ"},
  { id: 18, src: VPPMT08, title: 'Máy Tính Vinacal 570ES Plus II - Màu Hồng', description: 'Mô tả hình ảnh 1', discountedPrice: "437.000 đ  ",discount: "  -5%",originalPrice: "460.000 đ"},
  { id: 19, src: VPPMT09, title: 'Máy Tính Văn Phòng Flexio - Thiên Long CAL-010 - Màu..', description: 'Mô tả hình ảnh 1', discountedPrice: "485.550 đ  ",discount: "  -25%",originalPrice: "194.000 đ"},
  { id: 20, src: VPPMT10, title: 'Máy Tính Vinacal 680EX Plus - Màu Hồng', description: 'Mô tả hình ảnh 1', discountedPrice: "684.000 đ  ",discount: "  -5%",originalPrice: "720.000 đ"},

];

function GridExample() {
  return (
    <div className="container bg-white pt-3 mb-3">
      <h5>Văn phòng phẩm nổi bật</h5>

      <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
     {/* Tab 1: Màu vẽ */}
<Tab eventKey="tab1" title="Màu vẽ">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide1.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}} />
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}}>{product.title}</Card.Title>
                <Card.Text>
                <span className="price-discounted">{product.discountedPrice}</span>
                  <span className="discount-rate">{product.discount}</span><br/>
                  <span className="price-original">{product.originalPrice}</span>
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
            <Card>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}}>{product.title}</Card.Title>
                <Card.Text>
                  <span className="price-discounted">{product.discountedPrice}</span>
                  <span className="discount-rate">{product.discount}</span><br/>
                  <span className="price-original">{product.originalPrice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>

  </Carousel>
</Tab>

        {/* Tab 2: Bo Dung Cu Hoc Tap  */}
<Tab eventKey="tab2" title="Bộ Dụng Cụ Học Tập">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide3.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}}>{product.title}</Card.Title>
                <Card.Text>
                <span className="price-discounted">{product.discountedPrice}</span>
                  <span className="discount-rate">{product.discount}</span><br/>
                  <span className="price-original">{product.originalPrice}</span>
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
        {imagesSlide4.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}}>{product.title}</Card.Title>
                <Card.Text>
                  <span className="price-discounted">{product.discountedPrice}</span>
                  <span className="discount-rate">{product.discount}</span><br/>
                  <span className="price-original">{product.originalPrice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>

  </Carousel>
</Tab>

        {/* Tab 3: May Tinh Dien Tu */}
<Tab eventKey="tab3" title="Máy Tính Điện Tử">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide5.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}}>{product.title}</Card.Title>
                <Card.Text>
                <span className="price-discounted">{product.discountedPrice}</span>
                  <span className="discount-rate">{product.discount}</span><br/>
                  <span className="price-original">{product.originalPrice}</span>
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
        {imagesSlide6.map((product, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}}>{product.title}</Card.Title>
                <Card.Text style={{fontSize:'14px',fontWeight:'normal'}}>
                  <span className="price-discounted">{product.discountedPrice}</span>
                  <span className="discount-rate">{product.discount}</span><br/>
                  <span className="price-original">{product.originalPrice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Carousel.Item>

  </Carousel>
</Tab>
      </Tabs>
      <div className="more-btn">
        <Button variant="outline-danger" size="lg">Xem thêm</Button>
     </div>
         </div>
  );
}

export default GridExample;
