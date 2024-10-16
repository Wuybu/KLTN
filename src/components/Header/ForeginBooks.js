import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FcViewDetails } from "react-icons/fc";

import DL01 from '../../assets/images/ForeignBooks/D&L/DL01.png';
import DL02 from '../../assets/images/ForeignBooks/D&L/DL02.png';
import DL03 from '../../assets/images/ForeignBooks/D&L/DL03.png';
import DL04 from '../../assets/images/ForeignBooks/D&L/DL04.png';
import DL05 from '../../assets/images/ForeignBooks/D&L/DL05.png';
import DL06 from '../../assets/images/ForeignBooks/D&L/DL06.png';
import DL07 from '../../assets/images/ForeignBooks/D&L/DL07.png';
import DL08 from '../../assets/images/ForeignBooks/D&L/DL08.png';
import DL09 from '../../assets/images/ForeignBooks/D&L/DL09.png';
import DL10 from '../../assets/images/ForeignBooks/D&L/DL10.png';

import F01 from '../../assets/images/ForeignBooks/Fiction/F01.png';
import F02 from '../../assets/images/ForeignBooks/Fiction/F02.png';
import F03 from '../../assets/images/ForeignBooks/Fiction/F03.png';
import F04 from '../../assets/images/ForeignBooks/Fiction/F04.png';
import F05 from '../../assets/images/ForeignBooks/Fiction/F05.png';
import F06 from '../../assets/images/ForeignBooks/Fiction/F06.png';
import F07 from '../../assets/images/ForeignBooks/Fiction/F07.png';
import F08 from '../../assets/images/ForeignBooks/Fiction/F08.png';
import F09 from '../../assets/images/ForeignBooks/Fiction/F09.png';
import F10 from '../../assets/images/ForeignBooks/Fiction/F10.png';

import C1 from '../../assets/images/ForeignBooks/CB/C1.png';
import C2 from '../../assets/images/ForeignBooks/CB/C2.png';
import C3 from '../../assets/images/ForeignBooks/CB/C3.png';
import C4 from '../../assets/images/ForeignBooks/CB/C4.png';
import C5 from '../../assets/images/ForeignBooks/CB/C5.png';
import C6 from '../../assets/images/ForeignBooks/CB/C6.png';
import C7 from '../../assets/images/ForeignBooks/CB/C7.png';
import C8 from '../../assets/images/ForeignBooks/CB/C8.png';
import C9 from '../../assets/images/ForeignBooks/CB/C9.png';
import C10 from '../../assets/images/ForeignBooks/CB/C10.png';

import M1 from '../../assets/images/ForeignBooks/MBS/M1.png';
import M2 from '../../assets/images/ForeignBooks/MBS/M2.png';
import M3 from '../../assets/images/ForeignBooks/MBS/M3.png';
import M4 from '../../assets/images/ForeignBooks/MBS/M4.png';
import M5 from '../../assets/images/ForeignBooks/MBS/M5.png';
import M6 from '../../assets/images/ForeignBooks/MBS/M6.png';
import M7 from '../../assets/images/ForeignBooks/MBS/M7.png';
import M8 from '../../assets/images/ForeignBooks/MBS/M8.png';
import M9 from '../../assets/images/ForeignBooks/MBS/M9.png';
import M10 from '../../assets/images/ForeignBooks/MBS/M10.png';


import { Row } from 'react-bootstrap';

const imagesSlide1 = [
  { id: 1, src: DL01, title: 'Combo Complete IELTS Bands 6.5-7.5 (C1):..' , description: 'Mô tả hình ảnh 1', discountedPrice: "348.488 đ  ",discount: "  -10%",originalPrice: "389.000 đ"},
  { id: 2, src: DL02, title: 'Prepare A2 Level 2 Workbook With Audio..', description: 'Mô tả hình ảnh 2' ,discountedPrice: "106.400 đ  ",discount: "  -5%",originalPrice: "112.000 đ" },
  { id: 3, src: DL03, title: 'Oxford Learner’s Pocket Thesaurus Paperback', description: 'Mô tả hình ảnh 3',discountedPrice: "185.250 đ  ",discount: "  -5%",originalPrice: "182.250 đ" },
  { id: 4, src: DL04, title: `Pre A1 Starters 4 Authentic Practice Tes..`, description: 'Mô tả hình ảnh 4', discountedPrice: "150.100 đ  ",discount: "  -5%",originalPrice: "158.000 đ"},
  { id: 5, src: DL05, title: 'Pathways: Listening, Speaking, and Critica..', discountedPrice: "349.600 đ  ",discount: "  -5%",originalPrice: "368.000 đ"},

];

const imagesSlide2 = [
  { id: 6, src: DL06, title: `Prepare B1 Level 4 Student's Book`, description: 'Mô tả hình ảnh 1', discountedPrice: "235.600 đ  ",discount: "  -5%",originalPrice: "248.000 đ"},
  { id: 7, src: DL07, title: 'Oxford Learner’s Pocket Thesaurus Paperback', description: 'Mô tả hình ảnh 1', discountedPrice: "185.250 đ  ",discount: "  -5%",originalPrice: "195.000 đ"},
  { id: 8, src: DL08, title: 'Túi Giấy Form Cứng Có Nắp - Linh Lan 2 - M..', description: 'Mô tả hình ảnh 1', discountedPrice: "11.070 đ  ",discount: "  -18%",originalPrice: "13.600 đ"},
  { id: 9, src: DL09, title: `Fun for Movers SB w Home Fun & On..`, description: 'Mô tả hình ảnh 1', discountedPrice: "369.550 đ  ",discount: "  -5%",originalPrice: "389.000 đ"},
  { id: 10, src: DL10, title: '', description: 'Mô tả hình ảnh 1', discountedPrice: "377.100 đ  ",discount: "  -10%",originalPrice: "377.100 đ"},

];
const imagesSlide3 = [
  { id: 1, src: F01, title: 'What I Talk About When I Talk About..', description: 'Mô tả hình ảnh 1', discountedPrice: "161.100 đ  ",discount: "  -10%",originalPrice: "179.000 đ"},
  { id: 2, src: F02, title: 'The Lord Of The Rings - The Fellowship Of Th..', description: 'Mô tả hình ảnh 1', discountedPrice: "205.700 đ  ",discount: "  -15%",originalPrice: "242.000 đ"},
  { id: 3, src: F03, title: 'The Song Of Achilles', description: 'Mô tả hình ảnh 1', discountedPrice: "220.500 đ  ",discount: "  -10%",originalPrice: "245.000 đ"},
  { id: 4, src: F04, title: 'People We Meet On Vacation', description: 'Mô tả hình ảnh 1', discountedPrice: "218.700 đ  ",discount: "  -18%",originalPrice: "269.000 đ"},
  { id: 5, src: F05, title: 'Klara And The Sun', description: 'Mô tả hình ảnh 1', discountedPrice: "188.100 đ  ",discount: "  -18%",originalPrice: " 230.000 đ"},
   
];
const imagesSlide4 = [
  { id: 6, src: F06, title: 'South Of The Border, West Of The Sun', description: 'Mô tả hình ảnh 1', discountedPrice: "230.400 đ  ",discount: "  -10%",originalPrice: "256.000 đ"},
  { id: 7, src: F07, title: 'Billy Summers', description: 'Mô tả hình ảnh 1', discountedPrice: "210.900 đ  ",discount: "  -13%",originalPrice: "245.000 đ"},
  { id: 8, src: F08, title: 'The Giver', description: 'Mô tả hình ảnh 1', discountedPrice: "229.950 đ  ",discount: "  -15%",originalPrice: "267.000 đ"},
  { id: 9, src: F09, title: 'The Alchemist (Size:11x17.5cm)', description: 'Mô tả hình ảnh 1', discountedPrice: "161.100 đ  ",discount: "  -10%",originalPrice: "179.000 đ"},
  { id: 10, src: F10, title: '', description: 'Mô tả hình ảnh 1', discountedPrice: "167.450 đ   ",discount: "  -15%",originalPrice: "179.000 đ"},

];
const imagesSlide5 = [
    { id: 1, src: C1, title: 'Wild About Oceans', description: 'Mô tả hình ảnh 1', discountedPrice: "164.050 đ  ",discount: "  -15% ",originalPrice: "193.0000 đ"},
    { id: 2, src: C2, title: `Harry Potter and the Philosopher's Stone `, description: 'Mô tả hình ảnh 1', discountedPrice: "196.200 đ  ",discount: "  -10%",originalPrice: "218.000 đ"},
    { id: 3, src: C3, title: 'Psychology For Beginners', description: 'Mô tả hình ảnh 1', discountedPrice: "230.400 đ  ",discount: "  -10%",originalPrice: "256.000 đ"},
    { id: 4, src: C4, title: 'The Boy in the Striped Pyjamas', description: 'Mô tả hình ảnh 1', discountedPrice: "205.000 đ  ",discount: "  -10%",originalPrice: "205.000 đ"},
    { id: 5, src: C5, title: 'Diary Of A Cricket (Tái Bản 2024)', description: 'Mô tả hình ảnh 1', discountedPrice: "112.500 đ  ",discount: "  -10%",originalPrice: "125.000 đ"},
  
];
const imagesSlide6 = [
  { id: 6, src: C6, title: 'Puzzle And Play: Alphabet Train: A Pr..', description: 'Mô tả hình ảnh 1', discountedPrice: "192.000 đ  ",discount: "  -15% ",originalPrice: "192.000 đ"},
  { id: 7, src: C7, title: 'If I Ran Your School - Beginner Books', description: 'Mô tả hình ảnh 1', discountedPrice: "163.800 đ  ",discount: "  -18%",originalPrice: "201.000 đ"},
  { id: 8, src: C8, title: 'Hilo - Book 10 - Rise Of The Cat', description: 'Mô tả hình ảnh 1', discountedPrice: "272.700 đ  ",discount: "  -10%",originalPrice: "303.00 đ"},
  { id: 9, src: C9, title: `Baby's Very First Touchy-Feely Chri..`, description: 'Mô tả hình ảnh 1', discountedPrice: "162.000 đ  ",discount: "  -10%",originalPrice: "180.000 đ"},
  { id: 10, src: C10, title: 'Magic Torch Books - Goodnight Cat', description: 'Mô tả hình ảnh 1', discountedPrice: "165.5000 đ  ",discount: "  -10%",originalPrice: "166.500 đ"},

];
const imagesSlide7 = [
  { id: 1, src: M6, title: 'The Practice Of Not Thinking: A Guide To..', description: 'Mô tả hình ảnh 1', discountedPrice: "266.950 đ  ",discount: "  -13% ",originalPrice: "310.000 đ"},
  { id: 2, src: M7, title: 'Many Lives, Many Masters: The True St..', description: 'Mô tả hình ảnh 1', discountedPrice: "396.000 đ  ",discount: "  -10%",originalPrice: "440.000 đ"},
  { id: 3, src: M8, title: 'Everything Is Spiritual', description: 'Mô tả hình ảnh 1', discountedPrice: "260.100 đ  ",discount: "  -10%",originalPrice: "289.00 đ"},
  { id: 4, src: M10, title: `A New Earth (Oprah #61): Awaking to You ..`, description: 'Mô tả hình ảnh 1', discountedPrice: "327.600 đ  ",discount: "  -10%",originalPrice: "364.000đ"},
  { id: 5, src: M9, title: 'How To Live When A Loved One Di..', description: 'Mô tả hình ảnh 1', discountedPrice: "204.300 đ  ",discount: "  -18%",originalPrice: "250.000 đ"},

];
const imagesSlide8 = [
  { id: 6, src: M1, title: 'A Little Bit Of Auras: An Introduction To Energ..', description: 'Mô tả hình ảnh 1', discountedPrice: "226.800 đ  ",discount: "  -10% ",originalPrice: "252.000 đ"},
  { id: 7, src: M2, title: 'A Handful Of Quiet: Happiness In Four Pebbles', description: 'Mô tả hình ảnh 1', discountedPrice: "225.900 đ  ",discount: "  -18%",originalPrice: "277.000 đ"},
  { id: 8, src: M3, title: 'Big Magic', description: 'Mô tả hình ảnh 1', discountedPrice: "139.100 đ  ",discount: "  -10%",originalPrice: "139.000 đ"},
  { id: 9, src: M4, title: 'Chicken Soup For The Soul: Miracles & Divi..', description: 'Mô tả hình ảnh 1', discountedPrice: "221.400 đ  ",discount: "  -10%",originalPrice: "246.000 đ"},
  { id: 10, src: M5, title: 'The Pilgrimage', description: 'Mô tả hình ảnh 1', discountedPrice: "184.500 đ  ",discount: "  -10%",originalPrice: "205.000 đ"},

];

function GridExample() {
  return (
    <div className="container bg-white pt-3 mb-3">
      <h5><FcViewDetails size={24} />Foreign Books</h5>

      <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
     {/* Tab 1:  */}
<Tab eventKey="tab1" title="Dictionaries & Languages ">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide1.map((product, idx) => (
          <Col key={idx}>
             <Link to="/product" style={{ textDecoration: 'none' }}>
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
            </Link>
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

        {/* Tab 2: */}
<Tab eventKey="tab2" title="Fiction">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide3.map((product, idx) => (
          <Col key={idx}>
             <Link to="/product" style={{ textDecoration: 'none' }}>
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
            </Link>
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

        {/* Tab 3: */}
<Tab eventKey="tab3" title="Children's Books">
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

{/* Tab 4:  */}
<Tab eventKey="tab4" title="Mind, Body & Spirit">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlide7.map((product, idx) => (
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
        {imagesSlide8.map((product, idx) => (
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
