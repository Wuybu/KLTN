import React from 'react';
import { Carousel } from 'react-bootstrap';
import SlideBanner1 from '../../assets/images/SlideBanner1.png';
import SlideBanner2 from '../../assets/images/SlideBanner2.png';
import SlideBanner3 from '../../assets/images/SlideBanner3.png';
import SlideBanner4 from '../../assets/images/SlideBanner4.png';
import SlideBanner5 from '../../assets/images/SlideBanner5.png';
import SlideBanner6 from '../../assets/images/SlideBanner6.png';
import SlideBanner7 from '../../assets/images/SlideBanner7.png';
import SlideBanner8 from '../../assets/images/SlideBanner8.png';
import SubBanner1 from '../../assets/images/SubBanner1.png';
import SubBanner2 from '../../assets/images/SubBanner2.png';

const HomeCarousel = () => {
  return (
      <div className="row pt-3">
        <div className="col-md-8">
           <div style={{ width: '104%', height: '30%',borderRadius: '10px' }}> 
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block "
          src={SlideBanner1}
          alt="First slide"
          style={{width:'870px',height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />

      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner2}
          alt="Second slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner3}
          alt="Third slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner4}
          alt="First slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>

      {/* Slide 5 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner5}
          alt="First slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>

      {/* Slide 6 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner6}
          alt="First slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>

      {/* Slide 7 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner7}
          alt="First slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>

      {/* Slide 8 */}
      <Carousel.Item>
        <img
          className="d-block"
          src={SlideBanner8}
          alt="First slide"
          style={{width:'870px', height: '324px', objectFit: 'cover',borderRadius: '10px' }}
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    
    <div className="col-md-4">
      <div class="row">
          <a href='#'><img src={SubBanner1} alt="" style={{marginLeft:'15px',width:'390px', height: '157px', objectFit: 'cover',borderRadius: '10px'  }}/></a>
      </div>
      <div className="row pt-2">
          <a href='#'><img src={SubBanner2} alt="" style={{marginLeft:'15px',width:'390px', height: '157px', objectFit: 'cover',borderRadius: '10px' }}/></a>
      </div>
    </div>

    </div>
    
  );
};

export default HomeCarousel;



