import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import T01 from '../../assets/images/Others/TTT/T01.png';
import T02 from '../../assets/images/Others/TTT/T02.png';
import T03 from '../../assets/images/Others/TTT/T03.png';
import T04 from '../../assets/images/Others/TTT/T04.png';
import T05 from '../../assets/images/Others/TTT/T05.png';

import H01 from '../../assets/images/Others/HQ-TG/H01.png';
import H02 from '../../assets/images/Others/HQ-TG/H02.png';
import H03 from '../../assets/images/Others/HQ-TG/H03.png';
import H04 from '../../assets/images/Others/HQ-TG/H04.png';
import H05 from '../../assets/images/Others/HQ-TG/H05.png';
import H06 from '../../assets/images/Others/HQ-TG/H06.png';
import H07 from '../../assets/images/Others/HQ-TG/H07.png';
import H08 from '../../assets/images/Others/HQ-TG/H08.png';
import H09 from '../../assets/images/Others/HQ-TG/H09.png';
import H10 from '../../assets/images/Others/HQ-TG/H10.png';

import B01 from '../../assets/images/Others/BN/B01.png';
import B02 from '../../assets/images/Others/BN/B02.png';
import B03 from '../../assets/images/Others/BN/B03.png';
import B04 from '../../assets/images/Others/BN/B04.png';
import B05 from '../../assets/images/Others/BN/B05.png';
import B06 from '../../assets/images/Others/BN/B06.png';
import B07 from '../../assets/images/Others/BN/B07.png';
import B08 from '../../assets/images/Others/BN/B08.png';
import B09 from '../../assets/images/Others/BN/B09.png';
import B10 from '../../assets/images/Others/BN/B10.png';





import { Row } from 'react-bootstrap';

const imagesSlide1 = [
  { id: 1, src: T01, title: 'Đèn LED Chống Cận TaoTronics 12W TT-D..' , description: 'Mô tả hình ảnh 1', discountedPrice: "935.000 đ  ",discount: "  -15%",originalPrice: "1.000.000 đ"},
  { id: 2, src: T02, title: 'Đèn Sạc Để Bàn Trang Trí Hình Lucky Em..', description: 'Mô tả hình ảnh 2' ,discountedPrice: "421.200 đ  ",discount: "  -10%",originalPrice: "468.000 đ" },
  { id: 3, src: T03, title: 'Đèn LED Chống Cận TaoTronics 5W TT-DL..', description: 'Mô tả hình ảnh 3',discountedPrice: "467.500 đ  ",discount: "  -15%",originalPrice: "550.000 đ" },
  { id: 4, src: T04, title: 'Đèn LED Bảo Vệ Mắt Kiêm Sạc Không Dâ..', description: 'Mô tả hình ảnh 4', discountedPrice: "1.003.000 đ  ",discount: "  -15%",originalPrice: "1.180.000 đ"},
  { id: 5, src: T05, title: 'Đèn LED Chống Cận TaoTronics 5W TT-DL0.', description: 'Mô tả hình ảnh 5', discountedPrice: "467.500 đ  ",discount: "  -15%",originalPrice: "550.000 đ"},

];

const imagesSlide3 = [
  { id: 1, src: H01, title: 'Túi Giấy Đựng Quà Dạng Đứng - Blueangel TET..', description: 'Mô tả hình ảnh 1', discountedPrice: "14.820 đ  ",discount: "  -22%",originalPrice: "19.000 đ"},
  { id: 2, src: H02, title: 'Túi Đựng Quà Kraft Dạng Ngang - Size L..', description: 'Mô tả hình ảnh 1', discountedPrice: "10.080 đ  ",discount: "  -16%",originalPrice: "12.000 đ"},
  { id: 3, src: H03, title: 'Túi Giấy Form Cứng Có Nắp - Linh Lan 2 - Mẫ..', description: 'Mô tả hình ảnh 1', discountedPrice: "11.070 đ  ",discount: "  -18%",originalPrice: "13.600 đ"},
  { id: 4, src: H04, title: 'Túi Đựng Quà Kraft Dạng Ngang - Siz..', description: 'Mô tả hình ảnh 1', discountedPrice: "7.790 đ  ",discount: "  -18%",originalPrice: "9.500 đ"},
  { id: 5, src: H05, title: 'Túi Giấy Form Cứng Có Nắp - Linh Lan 3 ..', description: 'Mô tả hình ảnh 1', discountedPrice: "15.540 đ  ",discount: "  -16%",originalPrice: " 18.500 đ"},

];
const imagesSlide4 = [
  { id: 6, src: H06, title: 'Túi Giấy Đựng Quà Dạng Đứng - Blueangel TE..', description: 'Mô tả hình ảnh 1', discountedPrice: "14.820 đ  ",discount: "  -22%",originalPrice: "19.000 đ"},
  { id: 7, src: H07, title: 'Túi Đựng Quà Kraft Dạng Ngang - Size L..', description: 'Mô tả hình ảnh 1', discountedPrice: "10.080 đ  ",discount: "  -16%",originalPrice: "12.000 đ"},
  { id: 8, src: H08, title: 'Túi Giấy Form Cứng Có Nắp - Linh Lan 2 - M..', description: 'Mô tả hình ảnh 1', discountedPrice: "11.070 đ  ",discount: "  -18%",originalPrice: "13.600 đ"},
  { id: 9, src: H09, title: 'Túi Đựng Quà Kraft Dạng Ngang - Size ..', description: 'Mô tả hình ảnh 1', discountedPrice: "7.790 đ  ",discount: "  -18%",originalPrice: "9.500 đ"},
  { id: 10, src: H10, title: 'Túi Giấy Form Cứng Có Nắp - Linh Lan 3 - ..', description: 'Mô tả hình ảnh 1', discountedPrice: "15.540 đ  ",discount: "  -16%",originalPrice: " 18.500 đ"},
   
];
const imagesSlide5 = [
  { id: 1, src: B01, title: 'Bình Nước Học Sinh Disney 500 ml -..', description: 'Mô tả hình ảnh 1', discountedPrice: "156.000 đ  ",discount: "  -20%",originalPrice: "195.000 đ"},
  { id: 2, src: B02, title: 'Bình Nước Kita Fami 350 ml - Inochi ..', description: 'Mô tả hình ảnh 1', discountedPrice: "47.580 đ  ",discount: "  -22%",originalPrice: "61.000 đ"},
  { id: 3, src: B03, title: 'Bình Nước Học Sinh Disney Frozen 720 m..', description: 'Mô tả hình ảnh 1', discountedPrice: "229.500 đ  ",discount: "  -10%",originalPrice: "255.000 đ"},
  { id: 4, src: B04, title: 'Bình Nước Kita Glow 500 ml - Inochi HIN.BIKG..', description: 'Mô tả hình ảnh 1', discountedPrice: "101.400 đ  ",discount: "  -22%",originalPrice: "130.000 đ"},
  { id: 5, src: B05, title: 'Bình Nước Học Sinh Marvel Avengers 750 m..', description: 'Mô tả hình ảnh 1', discountedPrice: "315.000 đ   ",discount: "  -10%",originalPrice: "350.000 đ"},

];
const imagesSlide6 = [
    { id: 6, src: B06, title: 'Bình Nước Học Sinh 500 ml - N.CAA-534 - Mà..', description: 'Mô tả hình ảnh 1', discountedPrice: "87.980 đ  ",discount: "  -17% ",originalPrice: "106.000 đ"},
    { id: 7, src: B07, title: 'Bình Nước Bình Nước Thể Thao 500 ml - ..', description: 'Mô tả hình ảnh 1', discountedPrice: "87.980 đ  ",discount: "  -17%",originalPrice: "106.000 đ"},
    { id: 8, src: B08, title: 'Bình Nước Kita Boo 620 ml - Inochi HNK..', description: 'Mô tả hình ảnh 1', discountedPrice: "128.700 đ  ",discount: "  -22%",originalPrice: "165.000 đ"},
    { id: 9, src: B09, title: 'Bình Nước Kita Fami 700 ml - Inochi HIN.BIKF..', description: 'Mô tả hình ảnh 1', discountedPrice: "62.400 đ  ",discount: "  -22%",originalPrice: "80.000 đ"},
    { id: 10, src: B10, title: 'Bình Nước Học Sinh 500 ml - N.CAA-534 - Mà..', description: 'Mô tả hình ảnh 1', discountedPrice: "97.980 đ  ",discount: "  -17%",originalPrice: "106.000 đ"},
  
];

function GridExample() {
  return (
    <div className="container bg-white pt-3 mb-3">

      <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
     {/* Tab 1: Den Ban */}
<Tab eventKey="tab1" title="Đèn Bàn">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide1.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none', width:'210px', height:'280px'}}>
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

        {/* Tab 2: Hop Qua - Tui Giay  */}
<Tab eventKey="tab2" title="Hộp Quà - Túi Giấy">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide3.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none', width:'210px', height:'280px'}}>
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
            <Card style={{border:'none', width:'210px', height:'280px'}}>
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

        {/* Tab 3: Binh Nuoc */}
<Tab eventKey="tab3" title="Bình Nước">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide5.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none', width:'210px', height:'280px'}}>
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
            <Card style={{border:'none', width:'210px', height:'280px'}}>
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
      </Tabs>
      <div className="more-btn">
        <Button variant="outline-danger" size="lg">Xem thêm</Button>
     </div>
         </div>
  );
}

export default GridExample;
