import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FcIdea } from "react-icons/fc";

import MG01 from '../../assets/images/Manga/MG01.png';
import MG02 from '../../assets/images/Manga/MG02.png';
import MG03 from '../../assets/images/Manga/MG03.png';
import MG04 from '../../assets/images/Manga/MG04.png';
import MG05 from '../../assets/images/Manga/MG05.png';
import MG06 from '../../assets/images/Manga/MG06.png';
import MG07 from '../../assets/images/Manga/MG07.png';
import MG08 from '../../assets/images/Manga/MG08.png';
import MG09 from '../../assets/images/Manga/MG09.png';
import MG10 from '../../assets/images/Manga/MG10.png';

import LN01 from '../../assets/images/Manga/LN/LN01.png';
import LN02 from '../../assets/images/Manga/LN/LN02.png';
import LN03 from '../../assets/images/Manga/LN/LN03.png';
import LN04 from '../../assets/images/Manga/LN/LN04.png';
import LN05 from '../../assets/images/Manga/LN/LN05.png';
import LN06 from '../../assets/images/Manga/LN/LN06.png';
import LN07 from '../../assets/images/Manga/LN/LN07.png';
import LN08 from '../../assets/images/Manga/LN/LN08.png';
import LN09 from '../../assets/images/Manga/LN/LN09.png';
import LN10 from '../../assets/images/Manga/LN/LN10.png';

import DM01 from '../../assets/images/Manga/DM/DM01.png';
import DM02 from '../../assets/images/Manga/DM/DM02.png';
import DM03 from '../../assets/images/Manga/DM/DM03.png';
import DM04 from '../../assets/images/Manga/DM/DM04.png';
import DM05 from '../../assets/images/Manga/DM/DM05.png';
import DM06 from '../../assets/images/Manga/DM/DM06.png';
import DM07 from '../../assets/images/Manga/DM/DM07.png';
import DM08 from '../../assets/images/Manga/DM/DM08.png';
import DM09 from '../../assets/images/Manga/DM/DM09.png';
import DM10 from '../../assets/images/Manga/DM/DM10.png';


import { Row } from 'react-bootstrap';

const imagesSlide1 = [
  { id: 1, src: MG01, title: 'Boxset Tokyo Babylon (Hộp 7 Tập) - Tặng ..' , description: 'Mô tả hình ảnh 1', discountedPrice: "332.500 đ  ",discount: "  -5%",originalPrice: "350.000 đ"},
  { id: 2, src: MG02, title: 'Nàng Juliet Ở Trường Nội Trú - Tập 5', description: 'Mô tả hình ảnh 2' ,discountedPrice: "32.250 đ  ",discount: "  -5%",originalPrice: "35.000 đ" },
  { id: 3, src: MG03, title: 'Tân Ninja Hattori - Tập 8', description: 'Mô tả hình ảnh 3',discountedPrice: "23.750 đ  ",discount: "  -5%",originalPrice: "25.000 đ" },
  { id: 4, src: MG04, title: 'Ninja Rantaro - Tập 37 (Tái Bản 2024)', description: 'Mô tả hình ảnh 4', discountedPrice: "38.000 đ  ",discount: "  -5%",originalPrice: "40.000 đ"},
  { id: 5, src: MG05, title: 'Shadows House - Tập 6 - Tặng Kèm Card Ivory', description: 'Mô tả hình ảnh 5', discountedPrice: "42.750 đ  ",discount: "  -5%",originalPrice: "45.000 đ"},

];

const imagesSlide2 = [
  { id: 6, src: MG06, title: 'Pokémon Đặc Biệt - Tập 61', description: 'Mô tả hình ảnh 1', discountedPrice: "23.750 đ  ",discount: "  -5%",originalPrice: "25.000 đ"},
  { id: 7, src: MG07, title: 'Boxset Chạy Trời Không Khỏi Ế - Tặng Kèm..', description: 'Mô tả hình ảnh 1', discountedPrice: "127.500 đ  ",discount: "  -15%",originalPrice: "150.000 đ"},
  { id: 8, src: MG08, title: 'Hirayasumi - Những Tháng Ngày Chơi Vơi..', description: 'Mô tả hình ảnh 1', discountedPrice: "61.200 đ  ",discount: "  -10%",originalPrice: "68.000 đ"},
  { id: 9, src: MG09, title: 'Hot Boy Miền Quê - Tập 2 - Tặng Kèm Card PVC', description: 'Mô tả hình ảnh 1', discountedPrice: "79.200 đ  ",discount: "  -10%",originalPrice: "88.000 đ"},
  { id: 10, src: MG10, title: '[Manga] Chúa Tể Bóng Tối - Tập 6 - Tặng Kèm..', description: 'Mô tả hình ảnh 1', discountedPrice: "38.000 đ  ",discount: "  -5%",originalPrice: " 40.000 đ"},

];
const imagesSlide3 = [
  { id: 6, src: LN01, title: 'Chàng Trai Nổi Tiếng Nhất Trường Để Ý Tôi..', description: 'Mô tả hình ảnh 1', discountedPrice: "103.200 đ  ",discount: "  -20%",originalPrice: "129.000 đ"},
  { id: 7, src: LN02, title: 'Hội Chứng Tuổi Thanh Xuân - Tập 10 - Bản Gi..', description: 'Mô tả hình ảnh 1', discountedPrice: "89.250 đ  ",discount: "  -15%",originalPrice: "105.000 đ"},
  { id: 8, src: LN03, title: 'Hành Trình Của Elaina - Tập 15 - Tặng Kèm..', description: 'Mô tả hình ảnh 1', discountedPrice: "93.750 đ  ",discount: "  -25%",originalPrice: "125.000 đ"},
  { id: 9, src: LN04, title: 'Arya Bàn Bên Thỉnh Thoảng Lại Trêu Ghẹ..', description: 'Mô tả hình ảnh 1', discountedPrice: "80.750 đ  ",discount: "  -15%",originalPrice: "95.000 đ"},
  { id: 10, src: LN05, title: 'Chitose Trong Chai Ramune - Tập 6.5 - T..', description: 'Mô tả hình ảnh 1', discountedPrice: "112.500 đ  ",discount: "  -10%",originalPrice: " 125.000đ"},
   
];
const imagesSlide4= [
  { id: 1, src: LN06, title: 'Thế Giới Otome Game Thật Khắc Nghiệt Với..', description: 'Mô tả hình ảnh 1', discountedPrice: "107.070 đ  ",discount: "  -17%",originalPrice: "129.000 đ"},
  { id: 2, src: LN07, title: '6 Kẻ Nói Dối Và Lá Thư Buộc Tội', description: 'Mô tả hình ảnh 1', discountedPrice: "151.200 đ  ",discount: "  -20%",originalPrice: "189.000 đ"},
  { id: 3, src: LN08, title: 'Phá Đảo Dị Giới Cùng Nữ Thần Không Tín Đồ..', description: 'Mô tả hình ảnh 1', discountedPrice: "78.000 đ  ",discount: "  -22%",originalPrice: "100.000 đ"},
  { id: 4, src: LN09, title: 'Tớ Sẽ Trú Mưa Cùng Cậu - Bản Đặc Biệt - Tặn..', discountedPrice: "143.200 đ  ",discount: "  -20%",originalPrice: "179.000 đ"},
  { id: 5, src: LN10, title: 'Chitose Trong Chai Ramune - Tập 6.5 - T..', description: 'Mô tả hình ảnh 1', discountedPrice: "112.500 đ   ",discount: "  -10%",originalPrice: "125.000 đ"},

];
const imagesSlide5 = [
    { id: 1, src: DM01, title: 'Toàn Cầu Tiến Hóa - Tập 1 - Tặng Kèm 2 Bo..', description: 'Mô tả hình ảnh 1', discountedPrice: "149.250 đ  ",discount: "  -25% ",originalPrice: "199.000 đ"},
    { id: 2, src: DM02, title: 'Trở Thành Chàng Vợ Làm Nền Của Nhân Vật..', description: 'Mô tả hình ảnh 1', discountedPrice: "228.000 đ  ",discount: "  -20%",originalPrice: "285.000 đ"},
    { id: 3, src: DM03, title: 'Trần Gian Ở Lại - Bản Đặc Biệt - Tặng Kè..', discountedPrice: "52.500 đ  ",discount: "  -25%",originalPrice: "70.000 đ"},
    { id: 4, src: DM04, title: 'Caramel Honey - Bản Đặc Biệt - Tặng Kè..', description: 'Mô tả hình ảnh 1', discountedPrice: "71.400 đ  ",discount: "  -15%",originalPrice: "84.000 đ"},
    { id: 5, src: DM05, title: 'Trò Chơi Trứng Phục Sinh - Tập 3 - Tặng Kè..', description: 'Mô tả hình ảnh 1', discountedPrice: "151.200 đ  ",discount: "  -20%",originalPrice: "189.000 đ"},
  
];
const imagesSlide6 = [
  { id: 6, src: DM06, title: 'Kimidori - Bắt Lấy Sắc Xanh - Tặng Kèm 1..', description: 'Mô tả hình ảnh 1', discountedPrice: "84.150 đ  ",discount: "  -15% ",originalPrice: "99.000 đ"},
  { id: 7, src: DM07, title: 'Phản Công - Tặng Kèm Bookmark Bồi Cứng..', description: 'Mô tả hình ảnh 1', discountedPrice: "151.200 đ  ",discount: "  -20%",originalPrice: "189.000 đ"},
  { id: 8, src: DM08, title: 'Boxset Tulip x Mimosa - Mầm Cây Xao Động +..', description: 'Mô tả hình ảnh 1', discountedPrice: "217.200 đ  ",discount: "  -11%",originalPrice: "246.000 đ"},
  { id: 9, src: DM09, title: 'Người Lạ Dưới Gió Xuân - Tập 4 (Tái Bản 2024)', description: 'Mô tả hình ảnh 1', discountedPrice: "83.300 đ  ",discount: "  -15%",originalPrice: "98.000 đ"},
  { id: 10, src: DM10, title: 'Boxset Tulip x Mimosa - Mầm Cây Xao Động +..', description: 'Mô tả hình ảnh 1', discountedPrice: "217.200 đ  ",discount: "  -11%",originalPrice: "246.000 đ"},

];
function GridExample() {
  return (
    <div className="container bg-white pt-3 mb-3">
        <h5><FcIdea size={30}/> Manga nổi bật</h5>
      <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
     {/* Tab 1: Manga Moi */}
<Tab eventKey="tab1" title="Manga mới">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide1.map((product, idx) => (
          <Col key={idx}>
            
            <Card style={{border:'none', width:'210px', height:'280px'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}} >{product.title}</Card.Title>
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

        {/* Tab 2: Light Novel Moi  */}
<Tab eventKey="tab2" title="Light Novel mới">
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

        {/* Tab 3: Dam My Moi */}
<Tab eventKey="tab3" title="Đam Mỹ mới">
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
                <Card.Title style={{fontSize:'14px',fontWeight:'normal'}} >{product.title}</Card.Title>
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
