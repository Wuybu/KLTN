import React, { useState } from "react";
import Layout from "./Layout";
import Button from 'react-bootstrap/Button';
import MG03 from '../assets/images/Manga/MG03.png';
import { LuTicket } from "react-icons/lu";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";



const GioHang = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tân Ninja Hattori - Tập 8',
      price: 25000,
      discountedPrice: 24000,
      quantity: 1,
      image: {MG03}, // Đặt đường dẫn tới hình ảnh của sản phẩm
    },
  ]);

  const [isChecked, setIsChecked] = useState(false); // Theo dõi checkbox

  const handleQuantityChange = (itemId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Layout>
      <div className="container cart-page pt-2">
        <h5>GIỎ HÀNG ({cartItems.length} sản phẩm)</h5>

        <div className="row">
          <div className="col-8">

            <div className="header-cart-item ">
              <div className="row bg-white align-items-center pt-2 pb-2" style={{borderRadius:'10px'}}>
                <div className="col-1 check-box">
                  {/* Checkbox với màu đỏ */}
                  <input 
                    type="checkbox" 
                    style={{ width: '40px',height:'18px', accentColor: 'red', display:'flex'}} 
                    onChange={handleCheckboxChange} 
                  />
                </div>
                <div className="col">
                  <span>Chọn tất cả (1 sản phẩm)</span>
                </div>
                <div className="col-2" style={{width:'90px', marginRight:'10px', fontSize:'15px'}}>
                  <span style={{}}>Số lượng</span>
                </div>
                <div className="col-2" style={{width:'130px', textAlign:'center', fontSize:'15px', marginRight:'10px' }}>
                  <span>Thành tiền</span>
                </div>
                <div className="col-2" style={{width:'55px'}}></div>
              </div>
            </div>

            <div className="item-product-cart pt-2" >
              <div className="row bg-white align-items-center pt-3 pb-3" style={{borderRadius:'10px'}}>
                {cartItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <div className="col-1 check-box">
                      <input 
                        type="checkbox" 
                        style={{ width: '40px',height:'18px', accentColor: '#B22222', display:'flex' }} 
                        onChange={handleCheckboxChange} 
                      />
                    </div>
                    <div className="col-2">
                      <img src={MG03} alt={item.name} className="cart-item-image" style={{ width: '120px' }} />
                    </div>
                    <div className="col-5 cart-item-details" style={{width:'340px', height:'120px'}}>
                      <p className="cart-item-name" style={{fontSize:'14px'}}>{item.name}</p>
                      <p className="cart-item-price" style={{marginTop:'70px'}}>
                        <span style={{ fontWeight: 'bold', fontSize: '17px' }}>
                      {item.discountedPrice.toLocaleString()} đ
                </span>
                        <span style={{ textDecoration: 'line-through', color: 'gray', fontSize: '14px', marginLeft:'7px' }}>
                      {item.price.toLocaleString()} đ
                </span>
</p>

                    </div>
                    <div className="col-3 cart-item-quantity" style={{width:'220px'}}>
                      <button onClick={() => handleQuantityChange(item.id, -1)} style={{ marginRight: '5px' }}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)} style={{ marginLeft: '5px' }}>+</button>
                      <span style={{marginLeft:'50px', color:'#D00000	', fontWeight:'bold', fontSize:'16px'}}>{(item.discountedPrice * item.quantity).toLocaleString()} đ</span>

                    </div>
                    <div className="col-2" style={{width:'75px'}}>
                      <span style={{textAlign:'center', fontSize:'22px', display:'flex', justifyContent:'center'}}><FaRegTrashCan /></span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="col-4 cart-summary" style={{ marginLeft: '10px', width: '400px'}}>
            <div className="cart-discount pt-2 pb-1 bg-white" style={{ width: '400px', borderRadius:'10px' }}>
              <span style={{color:'#1E90FF', marginLeft:'20px', fontSize:'25px'}}><LuTicket /></span>
              <span style={{marginLeft:'10px',color:'#1E90FF' }}>KHUYẾN MÃI</span>
              <span style={{float: 'right', marginRight: '20px',color:'#1E90FF', fontSize:'14px', fontWeight:'bold',marginTop:'10px'}}>Xem thêm</span>
              <hr style={{width:'90%', margin: '10px auto'}}/>
              <span style={{fontWeight:'bold', marginLeft:'20px', marginBottom:'5px'}}>MÃ GIẢM 10K - ĐƠN HÀNG TỪ 130K</span>
              <p style={{color:'gray', margin:'20px', fontSize:'14px', marginBottom:'10px', marginTop:'5px'}}>Không Áp Dụng Cho Ngoại Văn, Manga, Phiếu Quà Tặng. Sách Giáo Khoa, Máy Tính và Giấy Photo và Một...</p>
                 
                  <div className="row" style={{width:'400px', marginLeft:'0px', height:'40px'}}>
                <div className="col-2 fhs-event-prommo" style={{width:'270px'}}>
              <hr style={{width:'95%', height:'5px', backgroundColor:'#1E90FF',marginLeft:'10px', borderRadius:'10px', marginBottom:'0', marginTop:'5px'}}/>
              <span style={{marginLeft:'10px',fontSize:'11px', color:'gray'}}>Mua thêm 130.000 đ để nhận mã</span>
              <span style={{fontSize:'11px', marginLeft:'20px', color:'gray'}}> 130.000 đ</span>
                </div>
                <div className="col fhs-btn-prommo" style={{width:'120px'}}>
              <button 
              style={{
                width:'100px',
                height:'40px',
                borderRadius:'10px',
                backgroundColor:'#1E90FF',
                color:'white',
                border:'none',
              }}
                >Mua thêm</button>
                </div></div>

              <hr style={{width:'90%', margin: '10px auto'}}/>
                <p style={{fontSize:'14px',marginLeft:'20px', color:'gray', fontWeight:'bold'}}>Có thể áp dụng đồng thời nhiề...</p>
            </div>

            <div className="gift-cart bg-white pt-3 pb-3" style={{
        alignItems: 'center',
        marginTop:'10px',
        justifyContent: 'space-between',
        background: 'linear-gradient(90deg,#d3a6ed, #FFFFFF)',
        borderRadius: '10px',
        padding: '15px 20px',
        width: '400px',
      }}>
            <FaGift style={{ color: '#8B5CF6', fontSize: '24px', marginRight: '10px' }}/>
            <span style={{fontWeight:'bold', fontSize:'17px'}}>Nhận quà</span>
              <span style={{fontSize:'14px',marginLeft:'170px', color:'#1E90FF'}}>Chọn quà</span>
              <span></span>
            </div>

            <div className="cart-total bg-white pt-1 " style={{ marginTop: '10px', width: '400px', borderRadius:'10px' }}>
              <span style={{marginLeft:'20px', color:'gray'}}>Thành tiền</span>
              <span style={{ float: 'right', marginRight: '20px',color:'gray' }}>{isChecked ? totalAmount.toLocaleString() : 0} đ</span>
              <hr style={{width:'90%', margin: '10px auto'}}/>
              <span style={{marginLeft:'20px', fontWeight:'bold'}}>Tổng Số Tiền (gồm VAT): </span>
              <span style={{ float: 'right', marginRight: '20px',fontWeight:'bold', fontSize:'26px',color:'#C00000' }}>{isChecked ? totalAmount.toLocaleString() : 0} đ</span>
              {/* Nút thanh toán với màu động */}
              <Button 
                variant="danger" 
                type="submit" 
                className="mt-3" 
                style={{ width: '90%', justifyContent: 'center', backgroundColor: isChecked ? '#B00000' : 'gray' , marginLeft:'20px', fontWeight:'bold', fontSize:'22px'}} 
                disabled={!isChecked} // Vô hiệu hóa nút nếu chưa chọn checkbox
              >
                THANH TOÁN 
              </Button>
              <p style={{marginLeft:'20px', fontSize:'14px', color:'red'}}>(Giảm giá trên web chỉ áp dụng cho bán lẻ)</p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GioHang;
