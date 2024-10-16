import React from 'react';
import B1 from '../../assets/images/BSTNB/B1.png';
import B2 from '../../assets/images/BSTNB/B2.png';
import B3 from '../../assets/images/BSTNB/B3.png';
import B4 from '../../assets/images/BSTNB/B4.png';
import B5 from '../../assets/images/BSTNB/B5.png';
import B6 from '../../assets/images/BSTNB/B6.png';
import B7 from '../../assets/images/BSTNB/B7.png';
import B8 from '../../assets/images/BSTNB/B8.png';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, icon: B1, name: 'Capybara', link:'/capybara' },
  { id: 2, icon: B2, name: 'Conan', link:'/conan'},
  { id: 3, icon: B3, name: 'One Piece', link:'/onepiece'},
  { id: 4, icon: B4, name: 'Panda - Gấu trúc', link:'/panda' },
  { id: 5, icon: B5, name: 'Disney', link:'/disney'},
  { id: 6, icon: B6, name: 'Sanrio' , link:'sanrio'},
  { id: 7, icon: B7, name: 'Doraemon' ,link:'/doraemon'},
  { id: 8, icon: B8, name: 'Pokémon', link:'/pokemon' },
];

const ProductCategories = () => {
  return (
    <div className='container pt-3 mb-3 bg-white' style={{ borderRadius: '10px' }}>
      <div className="header" style={{ backgroundColor: '#FFE4E1', padding: '10px', borderRadius: '10px' }}>
        <p style={{ fontSize: '19px', fontWeight: 'bold', margin: 0 }}>BỘ SƯU TẬP NỔI BẬT</p>
      </div>
      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-md text-center">
            <Link to={category.link} aria-label={category.name}>
              <img src={category.icon} alt={category.name} className="img-fluid" style={{ width: '120%' }} />
            </Link>
            <p style={{ fontSize: '14px', fontFamily: 'Nunito, sans-serif'}}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
