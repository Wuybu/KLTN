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
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece_-_tap_101_-_ban_bia_ao_bia_gap_bia_1__1_2.jpg' , title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece---tap-100---bia-r_i-_-obi.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '52.800 đ', discount: '-4%', originalPrice: '55.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece---tap-99---ban-bia-gap_3.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '72.000 đ', discount: '-4%', originalPrice: '75.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-98-_bia-roi_bia-gap_.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '72.000 đ', discount: '-4%', originalPrice: '75.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece----tap-97-_bia-gap-_-bia-roi__1_1.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập..', discountedPrice: '76.200 đ', discount: '-4%', originalPrice: '70.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide2 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865653.jpg', title: 'Thám Tử Lừng Danh Conan - Vs.Tổ Chức Áo..', discountedPrice: '33.600 đ', discount: '-4%', originalPrice: '35.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865110.jpg', title: 'Thám Tử Lừng Danh Conan - Phần Đặc..', discountedPrice: '40.500 đ', discount: '-10%', originalPrice: '45.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865097.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Fan..', discountedPrice: '48.000 đ', discount: '-4%', originalPrice: '50.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866001.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Fan..', discountedPrice: '38.400 đ', discount: '-4%', originalPrice: '48.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865103.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết -..', discountedPrice: '45.000 đ', discount: '-10%', originalPrice: '50.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlide3 = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866032.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866018_1_.jpg' , title: `Thám Tử Lừng Danh Conan - Vs.Tổ Chức Áo..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866018_1_.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866025.jpg', title: 'Thám Tử Lừng Danh Conan - Tiểu Thuyết..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865875.jpg', title: 'Thám Tử Lừng Danh Conan - Tuyển Tập Đặc..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideAll = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865653.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865110.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865097.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866001.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865103.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866032.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866018_1_.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865882.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244866025.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244865875.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece_-_tap_101_-_ban_bia_ao_bia_gap_bia_1__1_2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece---tap-100---bia-r_i-_-obi.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece---tap-99---ban-bia-gap_3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-98-_bia-roi_bia-gap_.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece----tap-97-_bia-gap-_-bia-roi__1_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];

const imagesSlideNew = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece_episode_a_bia_tap_2_1_1_1.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece_episode_a_bia_tap_1_1_1_1.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935339403746.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935339403722.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-heroines_mockup-03.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_186904_1_thanh_ly.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-bep-chien-sanji_bia.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/4/5/4570117961519.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244855982.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244855975.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-novel_chuyen-ve-law_bia_card-1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038724774.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038723609.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_2170_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244858884.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlidePaper = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8938545655008.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038724750_1.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038724774.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-8936038723609.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6974776205263-mau4.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6974776205263-mau2.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6974776205263-mau3.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/6/9/6974776205263-mau1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8938545655503.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038724774.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038723609_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936038723593_4.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideMC = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/a/n/anime-comics-one-piece-stampede_bia_tap-2.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/a/n/anime-comics-one-piece-stampede_bia_tap-1.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one-piece-bep-chien-sanji_bia.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/c/o/combo-anime-comics-one-piece-stampede-2-tap.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872682.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872699.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872675.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872712.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244872705.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece_episode_a_bia_tap_1_1_1_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/o/n/one_piece_episode_a_bia_tap_2_1_1_1.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935244858877.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideKey = [
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262521.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935339403746.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8935339403722.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262576.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262583.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262590.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262606.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  { src: 'https://cdn0.fahasa.com/media/catalog/product/8/9/8936134262552.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
  // Thêm các sản phẩm khác nếu cần
];
const imagesSlideOL = [
    { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9784087926040.jpg', title: 'Capybara Funny Time - Thời Gian Vui Vẻ', discountedPrice: '55.900 đ', discount: '-35%', originalPrice: '186.000 đ' },
    { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9784089084458.jpg' , title: `Bút Chì Bấm Capybara - Kuki KK-8183 (Mẫu..`, discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
    { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9784087925975.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8213 -..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '33.000 đ' },
    { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9784087925982.jpg', title: 'Chuốt Chì Capybara - Kuki KK-8181 (Mẫu..', discountedPrice: '23.040 đ', discount: '-28%', originalPrice: '32.000 đ' },
    { src: 'https://cdn0.fahasa.com/media/catalog/product/9/7/9784087925968.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
    { src: 'https://cdn0.fahasa.com/media/catalog/product/i/m/image_85342.jpg', title: 'Bút Gel Capybara 0.5 mm - Kuki KK-8179 - ..', discountedPrice: '23.760 đ', discount: '-28%', originalPrice: '32.000 đ' },
    // Thêm các sản phẩm khác nếu cần
  ];
  

const OnePiece = () => {
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
<Tab eventKey="tab5" title="Other Languages">
  <Carousel interval={null} controls={true} indicators={false}>
    
    {/* Slide 1 */}
    <Carousel.Item>
      <Row xs={1} md={5}>
        {imagesSlideOL.map((product, idx) => (
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
<Tab eventKey="tab6" title="Móc Khóa">
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


</Tabs>
<div className="more-btn">
        <Button variant="outline-danger" size="lg">Xem thêm</Button>
     </div>
</div>  

      </div>
    </Layout>
  );
};

export default OnePiece;
