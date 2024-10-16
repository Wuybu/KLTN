import React from "react";
import Layout from "../Layout";
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../styles/CB.css';
import { FcMms } from "react-icons/fc";


// Dữ liệu các sản phẩm cho carousel
const imagesSlide1 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935324007744.jpg' , title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_187413.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497744145.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '72.000 đ', discount: '-4%', originalPrice: '75.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941848254726.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '72.000 đ', discount: '-4%', originalPrice: '75.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000187145-qt.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập..', discountedPrice: '76.200 đ', discount: '-4%', originalPrice: '70.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide2 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9780241562284.jpg', title: 'Thám Tử Lừng Danh Conan - Vs.Tổ Chức Áo..', discountedPrice: '33.600 đ', discount: '-4%', originalPrice: '35.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5454.jpg', title: 'Thám Tử Lừng Danh Conan - Phần Đặc..', discountedPrice: '40.500 đ', discount: '-10%', originalPrice: '45.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5452.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Fan..', discountedPrice: '48.000 đ', discount: '-4%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5435.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Fan..', discountedPrice: '38.400 đ', discount: '-4%', originalPrice: '48.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6925172943600.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết -..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide3 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6925172943600.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_241884.jpg' , title: `Thám Tử Lừng Danh Conan - Vs.Tổ Chức Áo..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_13249.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5463.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5459.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideAll = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9780241562284.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5454.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5452.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5435.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6925172943600.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497742424.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_241884.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935324007744.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_187413.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497744145.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941848254726.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000187145-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_13249.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5463.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5459.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideNew = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000218467.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935337514840.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941848261922.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781368095075.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781368094078.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781426374708.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941250577215.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941250576393.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941250576379.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941250570544.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941250541308.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000221528.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111463427-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111497040-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111466367-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideCB = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9780241562284.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5454.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5452.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5435.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_241884.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_13249.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9780241688229.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781368093446.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781368092456.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781368055352.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781368065788.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781803685168.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781803684833.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781839030680.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9781801081108.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },

  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideMC = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497744145.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497742424.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111456788-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/4/8412497744428.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111463427-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111497040-qt.jpgg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111466367-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111466350-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111463410-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111457105-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111486488-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111480981-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111480967-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111480974-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6922111480530-qt.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },

  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideSP = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262019.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134261302.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134261661.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134261296.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936130671525-dd.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262354_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262026_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936130671129.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262347_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038726075.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9784091990471.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideVote = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941848254726.jpg' , title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/3/9/3900000187145-qt.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941848233233.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6941848261922.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6958985024259_2.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_43429_thanh_ly.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_43430_thanh_ly.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935271237614_3__thanh_ly.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_43428_thanh_ly.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6958985023955.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6958985023382.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const Disney = () => {
  return (
    <Layout>
      <div className="feature-product" style={{backgroundColor:'#FA8072', marginTop:'10px',borderRadius:'10px'}}>
        <div className="container pt-3 pb-3">
          <div className="header bg-white pt-1 pb-1" style={{borderRadius:'10px'}}>
          <h2 style={{marginLeft:'15px', fontSize:"18px"}}>Lựa chọn hàng đầu của fan</h2>
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
<Tab eventKey="tab3" title="Children's Books">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideCB.map((product, idx) => (
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
<Tab eventKey="tab4" title="Nhà Cửa - Đời Sống">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideMC.map((product, idx) => (
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
<Tab eventKey="tab5" title="Thiếu nhi">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideSP.map((product, idx) => (
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
<Tab eventKey="tab6" title="Mô Hình Các Loại">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideVote.map((product, idx) => (
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

export default Disney;
