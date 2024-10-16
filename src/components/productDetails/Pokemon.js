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
  { src: 'https://cdn0.fahasa.com/media/catalog/product/b/i/bia_conan_tau-ngam-sat-den.jpg' , title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-dac-biet---fbi-collection---tb-2023.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham_tu_lung_danh_conan_vs_to_ch.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '72.000 đ', discount: '-4%', originalPrice: '75.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet_amuro-toru-selection_tb-2023.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '72.000 đ', discount: '-4%', originalPrice: '75.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet---vs.kaito-kid-perfect-edition-_-tap-2.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập..', discountedPrice: '76.200 đ', discount: '-4%', originalPrice: '70.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide2 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182818.jpg', title: 'Thám Tử Lừng Danh Conan - Vs.Tổ Chức Áo..', discountedPrice: '33.600 đ', discount: '-4%', originalPrice: '35.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_50183_1.jpg', title: 'Thám Tử Lừng Danh Conan - Phần Đặc..', discountedPrice: '40.500 đ', discount: '-10%', originalPrice: '45.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-2---tb-2023.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Fan..', discountedPrice: '48.000 đ', discount: '-4%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-1---tb-2023.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Fan..', discountedPrice: '38.400 đ', discount: '-4%', originalPrice: '48.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_16903.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết -..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide3 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5077.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182819.jpg' , title: `Thám Tử Lừng Danh Conan - Vs.Tổ Chức Áo..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/conan-tieu-thuyet_con-ac-mong-den-toi.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5078.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_185452.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideAll = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182818.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_50183_1.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-2---tb-2023.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-1---tb-2023.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_16903.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5077.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182819.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/conan-tieu-thuyet_con-ac-mong-den-toi.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/b/i/bia_conan_tau-ngam-sat-den.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-dac-biet---fbi-collection---tb-2023.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham_tu_lung_danh_conan_vs_to_ch.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet_amuro-toru-selection_tb-2023.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet---vs.kaito-kid-perfect-edition-_-tap-2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5078.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_185452.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideNew = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_50183_1.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet_amuro-toru-selection_tb-2023.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/conan-tieu-thuyet_nhung-giay-phut-cuoi-toi-thien-duong.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/conan-tieu-thuyet_con-ac-mong-den-toi.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/b/i/bia_conan_tau-ngam-sat-den.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262354_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262347_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262026_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262019.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134261661.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936130671525-dd.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262149.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725993.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725955.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725917.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlidePaper = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038725832.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038725979_1.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038725917_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262149.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725993.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725955.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725917.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038725832.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_224638.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_224637.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038726938.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038725993.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038725955_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideMC = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-dac-biet---fbi-collection---tb-2023.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham_tu_lung_danh_conan_vs_to_ch.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet_amuro-toru-selection_tb-2023.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-tuyen-tap-dac-biet---vs.kaito-kid-perfect-edition-_-tap-2.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182818.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-2---tb-2023.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-1---tb-2023.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_182819.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_185452.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/conan-tuyen-tap-dac-biet---vs.-kaito-kid-perfect-edition-t_p-1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_185451.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_47302.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
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
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-2---tb-2023.jpg' , title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan---tuyen-tap-fan-binh-chon---tap-1---tb-2023.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const Pokemon = () => {
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
<Tab eventKey="tab4" title="Manga - Comic">
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
<Tab eventKey="tab5" title="Sản phẩm Hội Sách">
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
<Tab eventKey="tab6" title="Thám Tử Lừng Danh Conan Tuyển Tập Fan Bình Chọn">
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

export default Pokemon;
