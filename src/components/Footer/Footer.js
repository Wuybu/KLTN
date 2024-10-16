import React from 'react';
import '../styles/Footer.css';
import logo from '../../assets/images/logo.png';

import { PiMapPinFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import F01 from '../../assets/images/Footer/F01.png';
import { FaFacebook } from "react-icons/fa";
import logodtb from '../../assets/images/Footer/logodtb.png';
import FB from '../../assets/images/Footer/FB.png';
import YTB from '../../assets/images/Footer/YTB.png';
import TB from '../../assets/images/Footer/TB.png';
import X from '../../assets/images/Footer/X.png';
import INS from '../../assets/images/Footer/INS.png';
import PTR from '../../assets/images/Footer/PTR.png';
import AS from '../../assets/images/Footer/AS.png';
import GP from '../../assets/images/Footer/GP.png';

const Footer = () => {
    return (
        <footer className="footer mt-4" >
            <div className="col-3">
                <div className="footer-left pt-2">
                         <div className="address">
                    <img src={logo} style={{width:'275px' }}/>
                        <div className='p' style={{ lineHeight:'1.4', fontSize:'13px'}}>
                    <br/><p >Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
                        <p> Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60 </p>
                        <p>62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p><br/>
                    <p>Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</p>
                        <img src={logodtb} style={{width:'110px', height:'35px', marginTop:'10px',marginBottom:'15px'}}/><br/>
                        </div>
                            <img src={FB} alt='FacaBook'></img>
                            <img src={INS} alt='Instagram'></img>
                            <img src={YTB} alt='Youtube'></img>
                            <img src={TB} alt='Tumblr'></img>
                            <img src={X} alt='Twitter'></img>
                            <img src={PTR} alt='Pinterest'></img>

                            <img src={GP} alt='GooglePlay' style={{width:'130px', height:'40px', marginTop:'15px'}}></img>
                            <img src={AS} alt='AppStore' style={{marginLeft:'10px',width:'130px', height:'40px', marginTop:'15px'}}></img>
                        </div>
                 </div>
            </div>
            <div className='col-9'>
            <div className="footer-right">
                <div className="links">
                    <div className="link-group">
                        <h6><b>DỊCH VỤ</b></h6>
                        <ul>
                            <li><p href="/">Điều khoản sử dụng</p></li>
                            <li><p href="/">Chính sách bảo mật thông tin cá nhân</p></li>
                            <li><p href="/">Chính sách bảo mật thanh toán</p></li>
                            <li><p href="/">Giới thiệu Fahasa</p></li>
                            <li><p href="/">Hệ thống trung tâm - nhà sách</p></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h6><b>HỖ TRỢ</b></h6>
                        <ul>
                            <li><p href="/">Chính sách đổi - trả - hoàn tiền</p></li>
                            <li><p href="/">Chính sách bảo hành - bồi hoàn</p></li>
                            <li><p href="/">Chính sách vận chuyển</p></li>
                            <li><p href="/">Chính sách khách sỉ</p></li>
                            <li><p href="/">Phương thức thanh toán và xuất HĐ</p></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h6><b>TÀI KHOẢN CỦA TÔI</b></h6>
                        <ul>
                            <li><p href="/">Đăng nhập/Tạo mới tài khoản</p></li>
                            <li><p href="/">Thay đổi địa chỉ khách hàng</p></li>
                            <li><p href="/">Chi tiết tài khoản</p></li>
                            <li><p href="/">Lịch sử mua hàng</p></li>
                        </ul>
                    </div>
                </div>

                <div className='links'>
                <div className="link-group">
                        <h6><b>LIÊN HỆ</b></h6>
                <div className='contact-info'>
                    <div className="adress">
                        <p><PiMapPinFill size={18}/>60-62 Lê Lợi, Q.1, TP. HCM</p>
                    </div>
                    <div className="email">
                        <p><IoMdMail size={18}/>cskh@fahasa.com.vn</p>
                    </div>
                    <div className="phone">
                        <p><FaPhoneAlt size={18}/>1900636467</p>
                    </div>
                </div>
                <img src={F01} style={{width:'850px', height:'160px'}}></img>

                </div>
                </div>
                </div>

            </div>
            <ul style={{fontSize:'13px', color:'grey',textAlign:'center', width: '100%' }} >Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.</ul>
        </footer>

    );
};

export default Footer;
