import React from "react";
import Layout from "../Layout";
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../styles/CB.css';
import { FcMms } from "react-icons/fc";

import AA01 from '../../assets/images/BSTNB/capybara/AA01.png';
import AA02 from '../../assets/images/BSTNB/capybara/AA02.png';
import AA03 from '../../assets/images/BSTNB/capybara/AA03.png';
import AA04 from '../../assets/images/BSTNB/capybara/AA04.png';
import AA05 from '../../assets/images/BSTNB/capybara/AA05.png';
import AA06 from '../../assets/images/BSTNB/capybara/AA06.png';
import AA07 from '../../assets/images/BSTNB/capybara/AA07.png';
import AA08 from '../../assets/images/BSTNB/capybara/AA08.png';
import AA09 from '../../assets/images/BSTNB/capybara/AA09.png';
import AA10 from '../../assets/images/BSTNB/capybara/AA10.png';
import AA11 from '../../assets/images/BSTNB/capybara/AA11.png';
import AA12 from '../../assets/images/BSTNB/capybara/AA12.png';
import AA13 from '../../assets/images/BSTNB/capybara/AA13.png';
import AA14 from '../../assets/images/BSTNB/capybara/AA14.png';
import AA15 from '../../assets/images/BSTNB/capybara/AA15.png';


// Dữ liệu các sản phẩm cho carousel
const imagesSlide1 = [
  { src: AA01 , title: 'Tập Học Sinh Capybara - 4 Ô Ly - 200 Trang..', discountedPrice: '14.700 đ', discount: '-16%', originalPrice: '17.500 đ' },
  { src: AA02, title: 'Tập Học Sinh Capybara - 4 Ô Ly - 96 Trang..', discountedPrice: '12.640 đ', discount: '-21%', originalPrice: '16.000 đ' },
  { src: AA03, title: 'Tập Học Sinh Capybara - 4 Ô Ly - 200 Trang..', discountedPrice: '14.700 đ', discount: '-16%', originalPrice: '17.500 đ' },
  { src: AA04, title: 'TTập Học Sinh Capybara - 4 Ô Ly - 96..', discountedPrice: '12.640 đ', discount: '-21%', originalPrice: '16.000 đ' },
  { src: AA05, title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '86.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide2 = [
  { src: AA06, title: 'Tập Học Sinh Capybara - 5 Ô Ly - 96 Trang 120..', discountedPrice: '12.640 đ', discount: '-21%', originalPrice: '16.000 đ' },
  { src: AA07, title: 'Tập Học Sinh Capybara - 4 Ô Ly - 200 Trang ..', discountedPrice: '14.700 đ', discount: '-16%', originalPrice: '17.500 đ' },
  { src: AA08, title: 'Tập Học Sinh Capybara - 5 Ô Ly - 96 Trang..2', discountedPrice: '12.640 đ', discount: '-21%', originalPrice: '16.000 đ' },
  { src: AA09, title: 'Thú Bông Capybara Đeo Balô Rùa 30 cm -..', discountedPrice: '190.680 đ', discount: '-16%', originalPrice: '227.000 đ' },
  { src: AA10, title: 'Tập Học Sinh Capybara - 4 Ô Ly - 96 Trang..', discountedPrice: '12.640 đ', discount: '-21%', originalPrice: '16.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide3 = [
  { src: AA11, title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: AA12 , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: AA13, title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: AA14, title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: AA15, title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideAll = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012035-mau2.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau4.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012035-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/2/0/2000214266450.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012042-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/4/7/4738669065479.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6942423181819.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000225366.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941984715723.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012042-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012042-mau4.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/z/5/z5780538353135_19bab17dc375655b827375661913b128.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideNew = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936221880386.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/u/n/untitled-1_27.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936228951928_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936228951843.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936228950051.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997291-mau4.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997291-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997291-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997291-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997284-mau4.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997284-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997284-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997284-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/1/8/1880000997277-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936190513124.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlidePaper = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau1.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012042-mau3.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012042-mau4.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012035-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau4.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012035-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012042-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/4/7/4738669065479.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012059-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000225366.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941984715723.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/7/8738962004362.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012028_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8934986012004_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideKey = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/2/0/2000214264067.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240310124.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/2/0/2000214272246.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935306040936-mau2.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240318014.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240318007.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240311183.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6976845025109-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/4/6464000064815-mau1_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/4/6464000064815-mau1_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6959874240361-mau5.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/4/6463000014653-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/4/6466000015262.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/4/6464000064853.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920230310318.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideDoll = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/2/0/2000214266450.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/2/0/2000214273137.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000219808.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240603004.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240309012.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240426030.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/8/6869118240012.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/8/6869118240029_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/u/n/untitled-1_27.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6901458172124-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240326095-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240326101.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000222198-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240426016.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6920240423008.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const Capybara = () => {
  return (
    <Layout>
      <div className="feature-product" style={{backgroundColor:'#FA8072', marginTop:'10px',borderRadius:'10px'}}>
        <div className="container pt-3 pb-3">
          <div className="header bg-white pt-1 pb-1" style={{borderRadius:'10px'}}>
          <h2 style={{marginLeft:'15px', fontSize:"18px"}}>Sản phẩm nổi bật</h2>
          </div><br/>
          <Carousel>
                        {/* Slide 1 */}
            <Carousel.Item>
              <Row xs={2} md={5} className="g-4">
                {/* Lặp lại hoặc thay đổi danh sách sản phẩm cho slide 2 */}
                {imagesSlide1.map((product, idx) => (
                  <Col key={idx}>
                    <Card style={{border:'none', width:'210px', height:'280px'}}>
                    <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
                      <Card.Body>
                        <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
              <Row xs={1} md={5} className="g-4">
                {/* Lặp lại hoặc thay đổi danh sách sản phẩm cho slide 2 */}
                {imagesSlide2.map((product, idx) => (
                  <Col key={idx}>
                    <Card style={{border:'none', width:'210px', height:'280px'}}>
                    <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
                      <Card.Body>
                        <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
                        {/* Slide 3 (có thể thêm slide khác nếu cần) */}
            <Carousel.Item>
              <Row xs={1} md={5} className="g-4">
                {/* Lặp lại hoặc thay đổi danh sách sản phẩm cho slide 2 */}
                {imagesSlide3.map((product, idx) => (
                  <Col key={idx}>
                    <Card style={{border:'none', width:'210px', height:'280px'}}>
                    <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
                      <Card.Body>
                        <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
        </div>
      </div>
      <div><br/>

    <div className="container bg-white pt-3 mb-3" style={{borderRadius:'10px'}}>
    <h2 style={{fontSize:"18px", marginBottom:'10px',fontWeight:'bold'}}><FcMms size={35} style={{marginRight:'10px'}}/>Tất cả sản phẩm</h2>
      <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example" style={{border:'none'}}>

     {/* Tab 1:  */}
<Tab eventKey="tab1" title="Tất cả" >
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideAll.map((product, idx) => (
          <Col key={idx}>
             <Link to="/product" style={{ textDecoration: 'none' }}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
  </Carousel>
</Tab>

        {/* Tab 2: */}
<Tab eventKey="tab2" title="Mới nhất">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideNew.map((product, idx) => (
          <Col key={idx}>
             <Link to="/product" style={{ textDecoration: 'none' }}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
  </Carousel>
</Tab>

        {/* Tab 3: */}
<Tab eventKey="tab3" title="Sản phẩm về giấy">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlidePaper.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
<Tab eventKey="tab4" title="Móc khóa">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideKey.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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

{/* Tab 5:  */}
<Tab eventKey="tab5" title="Búp bê - Gấu bông">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideDoll.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
{/* Tab 6:  */}
<Tab eventKey="tab6" title="Lưu Niệm">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideDoll.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
{/* Tab 7:  */}
<Tab eventKey="tab7" title="Gương - Lược">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 7 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideDoll.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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
{/* Tab 8:  */}
<Tab eventKey="tab8" title="Dụng cụ văn phòng">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 8 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideDoll.map((product, idx) => (
          <Col key={idx}>
            <Card style={{border:'none'}}>
              <Card.Img variant="top" src={product.src} style={{width:'80%'}}/>
              <Card.Body>
                <Card.Title style={{fontSize:'14px'}}>{product.title}</Card.Title>
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

      </div>
    </Layout>
  );
};

export default Capybara;
