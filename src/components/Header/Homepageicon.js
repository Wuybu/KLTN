import React from 'react';
import '../styles/Homepageicon.css';
const categories = [
  { id: 1, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/Icon_TrungThuT9_120x120.png', name: 'Phá Cỗ Trăng Rằm' },
  { id: 2, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/IconT9_Logo%20NCC_ZenBooks_120x120.png', name: 'ZenBooks' },
  { id: 3, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Icon_Balo_120x120.png', name: 'Balo' },
  { id: 4, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-05-2024/Icon_GiamGia_120x120.png', name: 'Sản phẩm trợ giá' },
  { id: 5, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-06-2024/icon_ManngaT06.png', name: 'Manga' },
  { id: 6, icon: 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png', name: 'Flash Sale' },
  { id: 7, icon: 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png', name: 'Mã giảm giá' },
  { id: 8, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Icon_VanPhongPham_T6.png', name: 'Back to School' },
  { id: 9, icon: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2024/ChoDoCu.png', name: 'Phiên chợ sách cũ' },
  { id: 10, icon: 'https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png', name: 'Sản phẩm mới' }
  
];

const ProductCategories = () => {
  return (
    <div className='container pt-3 mb-3 bg-white ' style={{ borderRadius: '10px' }}>
      <div className="row">
      {categories.map(category => (
        <div key={category.id} className="col-md text-center">
          <a href="#"><img src={category.icon} alt={category.name} className="img-fluid" style={{ width: '50%' }}/></a>
          <p>{category.name}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductCategories;
