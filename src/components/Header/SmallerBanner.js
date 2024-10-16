import React from "react";

const banners = [
    { id: 1, image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/TrangChuongTrinhThang9_%20Block06_TuSachTrangRam_SmallBanner_310x210_2.jpg'},
    { id: 2, image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/BannerNgoaiVan_T09_SmallBanner_310x210_2.jpg'},
    { id: 3, image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/BannerHomePage_DoChoiTrungThu_Smallbanner_310x210.jpg'},
    { id: 4, image: 'https://cdn0.fahasa.com/media/wysiwyg/Thang-09-2024/MCbooks_KC_Smallbanner_T9_310x210.jpg'}
  ];
  
  const BannerProducts = () => {
    return (
        <div className=" pt-3">
        <div className="row">
                 {banners.map(banner => (
            <div className="col-md-3 mb-3">
              <a href="#" ><img src={banner.image} style={{ height: '203px', objectFit: 'cover',borderRadius: '10px' }} /></a>
            </div>
        ))}
        </div>
        </div>
        );
  };
  
  export default BannerProducts;