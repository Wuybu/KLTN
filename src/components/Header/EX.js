import React, { useState } from 'react';
import { Container, Row, Col, Card, Tabs, Tab, Button } from 'react-bootstrap';

import V01 from '../../assets/images/BXH/VanHoc/V01.png';
import V02 from '../../assets/images/BXH/VanHoc/V02.png';
import V03 from '../../assets/images/BXH/VanHoc/V03.png';
import V04 from '../../assets/images/BXH/VanHoc/V04.png';
import V05 from '../../assets/images/BXH/VanHoc/V05.png';

import K1 from '../../assets/images/BXH/KinhTe/K1.png';
import K2 from '../../assets/images/BXH/KinhTe/K2.png';
import K3 from '../../assets/images/BXH/KinhTe/K3.png';
import K4 from '../../assets/images/BXH/KinhTe/K4.png';
import K5 from '../../assets/images/BXH/KinhTe/K5.png';



const productsVanHoc = [
  { id: 1, title: "Góc Nhỏ Có Nắng", author: "Little Rainbow",point:"4334 điểm", price: "55,760 đ ", oldPrice: "60,000 đ", discount: "-18%", image: V01, 
    description: `Với 30 chủ đề tô màu phong phú đa dạng, mỗi bức tranh như là một lời thủ thỉ tâm tình gửi đến bạn.\n
- Thư giãn và chữa lành: Với những hình ảnh đẹp mắt và đơn giản, tô màu sẽ là một phương pháp hiệu quả giúp bạn chữa lành và nuôi dưỡng tâm hồn.\n
- Khám phá sự sáng tạo: Bạn đừng ngại vẽ thêm, tô thêm màu sắc để thể hiện cảm xúc của riêng mình.\n
- Chất liệu giấy dày, mịn, đẹp sẽ đem đến cho bạn trải nghiệm tô màu thú vị.`, NXB:"Nhà xuất bản: Thanh niên" },
  { id: 2, title: "Tô Bình Yên Vẽ Hạnh Phúc ( Tái bản 2022 )", author: "Kulzsc",point:"1837 điểm", price: "68,640 đ", oldPrice: "88,000 đ", discount:"-22%", image: V02, description: `Sau thành công của cuốn sách đầu tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên: "Tô bình yên - vẽ hạnh phúc” – sắc nét phong cách cá nhân với một chút “thơ thẩn, rất hiền”.\n
Không giống với những cuốn sách chỉ để đọc, “Tô bình yên vẽ hạnh phúc” là một cuốn sách mà độc giả vừa tìm được “Hạnh phúc to to từ những điều nho nhỏ” vừa được thực hành ngay lập tức. Một sự kết hợp mới lạ đầy thú vị giữa thể loại sá...`,NXB:"Nhà xuất bản: NXB Phụ Nữ Việt Nam" },
  { id: 3, title: "999 Lá Thư Gửi Cho Chính Minh - Tô Màu Cuộc Sống", author: "Miêu Công Tử, Hà Trang (Tahtag)",point:"1727 điểm", price: "74,250 đ",oldPrice:"99,000 đ", discount:"-25%", image: V03, description: `Chúng mình đều biết những sắc màu của cuộc sống đều bắt nguồn từ những điều bình dị và thường nhật nhất xung quanh mà ta vẫn thường tiếp xúc mỗi ngày: như bầu trời xanh ngát, như áng mây trắng tinh, như ánh nắng phủ vàng lên những đóa hoa hồng ngọt… Thế nhưng nhịp sống hàng ngày của chúng ta luôn trôi qua trong sự vội vã, những bộn bề hóa thành “bộ lọc” biến bức tranh cuộc sống muôn màu kia trở nên ảm đạm và phủ đầy âu lo, khiến ta dường như quên lãng việc phải khám phá ra những vẻ đẹp thuần khiết của vạn vật, quên mất rằng thế giới mà chúng ta đang sống cũng có ...`, NXB:"Nhà xuất bản: Thanh niên" },
  { id: 4, title: "Doraemon - Tiểu Thuyết - Nobita Và Bản Giao Hưởng Địa Cầu", author: "Fujiko F Fujio, Teruko Utsumi, Kazuaki Imai",point:"1260 điểm", price: "54,000 đ",oldPrice:"60,000 đ",discount:"-10%", image: V04, description: `Nobita đang tập sáo để chuẩn bị cho buổi hòa nhạc ở trường thì bất ngờ gặp cô bé Micca bí ẩn có giọng hát tuyệt vời. Micca rất thích nốt No nhẹ nhõm vô ưu Nobita thổi, bèn mời nhóm bạn đến Cung Điện Farre kì lạ, nơi sử dụng âm nhạc làm năng lượng. Cung Điện “ngủ đông” vì cạn nhiên liệu, và Micca đang tìm kiếm bậc thầy âm nhạc để cùng trình diễn nhằm hồi sinh nó. Doraemon và nhóm bạn địa cầu dùng bảo bối chứng chỉ chuyên viên âm nhạc để chọn nhạc cụ diễn tấu với Micca. Cung Điện Farre vừa dần phục hồi thì...\n
---\n
Tác giả`, NXB:"Nhà xuất bản: Kim Đồng" },
  { id: 5, title: "Trốn Lên Mái Nhà Để Khóc - Tặng Kèm Bookmark", author: "Lam",point:"1210 điểm", price: "150,000 đ",oldPrice:"95,000 đ",discount:"-22%", image: V05, description: `Những cơn gió heo may len lỏi vào từng góc phố nhỏ, mùa thu về gợi nhớ bao yêu thương đong đầy, bao xúc cảm dịu dàng của ký ức. Đó là nỗi nhớ đau đáu những hương vị quen thuộc của đồng nội, là hoài niệm bất chợt khi đi trên con đường cũ in dấu bao kỷ niệm... để rồi ta ước có một chuyến tàu kỳ diệu trở về những năm tháng ấy, trở về nơi nương náu bình yên sau những tháng ngày loay hoay để học cách trở thành một người lớn. Bạn sẽ được đắm mình trong những cảm xúc đẹp đẽ xen lẫn những tiếc nuối đầy lắng đọng trong “Trốn lên mái nhà đẻ khóc” của Lam.\n
Có nhiều câu chuyện luôn nằm trong k...`, NXB:"Nhà xuất bản: Dân Trí" },
];

const productsKinhTe = [
  { id: 1, title: "MBA Bằng Hình - The Usual MBA", author: "Jason Barron, MBA",point:"600 điểm", price: "151,200 đ ", oldPrice: "189,000 đ", discount: "-20%", image: K1, 
    description: `Jason Barron, MBA, là một nhà lãnh đạo đầy sáng tạo tập trung vào chiến lược sản phẩm số và trải nghiệm người dùng. Ông cũng là đồng sự sáng lập nên công ty khởi nghiệp LowestMed, vốn được RetailMeNot thâu tóm vào năm 2018, và hiện nay đang làm quản lý cấp cao cho một tổ chức phi lợi nhuận lớn chuyên về các sản phẩm số cung cấp cho hàng triệu người dùng trên khắp thế giới.\n
Ông nhận bằng cử nhân từ Đại học Southern Virginia năm 2007 và bằng Thạc sĩ Quản trị Kinh doanh từ Đại học Brigham Young vào năm 2017.\n
Hiện tại Jason đang sống gần Salt Lake City, Utah, với vợ và năm người con. Tìm hiểu thêm ...`, NXB:"Nhà xuất bản: Công Thương" },
  { id: 2, title: "Kế Toán Vỉa Hè - Thực Hành Báo Cáo Tài Chính Căn Bản Từ Quầy Bán Nước Chanh", author: "Darrell Mullis, Judith Orioff",point:"589 điểm", price: "169,000 đ", oldPrice: "199,000 đ", discount:"-15%", image: K2, description: `Đã bao lần bạn cầm trên tay bảng báo cáo tài chính doanh nghiệp của mình, nhưng chẳng thể nào hiểu nổi?

Kế toán và tài chính là nỗi đau chung của rất nhiều doanh nghiệp nhỏ. Ngôn ngữ tài chính dường như là điều bí ẩn nhất của thế giới. Vô số tính toán và ý đồ được cài cắm sau các con số, mà thậm chí người kinh doanh nhiều năm cũng không thể nào bóc tách nổi.\n
Nếu bạn vẫn cảm thấy mù mờ với bảng báo cáo t&agr...`,NXB:"Nhà xuất bản: Thế Giới" },
  { id: 3, title: "48 Nguyên Tắc Chủ Chốt Của Quyền Lực ( Tái Bản 2020 )", author: "Robert Greene",point:"528 điểm", price: "164,000 đ",oldPrice:"200,000 đ", discount:"-18%", image: K3, description: `Quyền lực có sức hấp dẫn vô cùng mạnh mẽ đối với con người trong mọi thời, ở mọi nơi, với mọi giai tầng. Lịch sử xét cho cùng là cuộc đấu tranh triền miên để giành cho bằng được quyền lực cai trị của các tập đoàn thống trị, từ cổ chí kim, từ đông sang tây.\n
Quyền lực là thứ mà rất nhiều người mong muốn nhưng không phải ai cũng dễ dàng đạt được. Vươn lên những vị trí cao hơn trong thang bậc xã hội thường được xem là một khát khao rất con người. Nhưng, liệu có phải chỉ những tài năng xuất chúng mới có thể đạt được điều đó? Không hẳn vậy. Bởi ít ai biết rằng, để giành được một vị trí quyền lực thực tế vẫn mang tính công thức.\n
Qua nghiên cứu lịch sử nhâ...`, NXB:"Nhà xuất bản: NXB Trẻ" },
  { id: 4, title: "Chiến Trang Tiền Tệ - Phần 1 - Ai Thực Sự Là Người Giàu Nhất Thế Giới? (Tái bản 2022)", author: "Song Hong Bing",point:"506 điểm", price: "123,750 đ",oldPrice:"165,000 đ",discount:"-25%", image: K4, description:`Một khi đọc “Chiến tranh tiền tệ - Ai thật sự là người giàu nhất thế giới” bạn sẽ phải giật mình nhận ra một điều kinh khủng rằng, đằng sau những tờ giấy bạc chúng ta chi tiêu hàng ngày là cả một thế lực ngầm đáng sợ - một thế lực bí ẩn với quyền lực siêu nhiên có thể điều khiển cả thế giới rộng lớn này.\n
“Chiến tranh tiền tệ - Ai thật sự là người giàu nhất thế giới” đề cập đến một cuộc chiến khốc liệt, không khoan nhượng và dai dẳng giữa một nhóm nhỏ các ông trùm tài chính – đứng đầu là gia tộc Rothschild – với các thể chế tài chính của nhiều quốc gia. Đ&oacu...`, NXB:"Nhà xuất bản: NXB Lao Động" },
  { id: 5, title: "Thuế Và Kế Toán Thuế Trong Doanh Nghiệp - Lý Thuyết Và Thực Hành ( Tái Bản 2023 )", author: "Nhiều Tác Giả",point:"462 điểm", price: "225,420 đ",oldPrice:"289,000 đ",discount:"-22%", image: K5, description: `Đã bao lần bạn cầm trên tay bảng báo cáo tài chính doanh nghiệp của mình, nhưng chẳng thể nào hiểu nổi?\n
Kế toán và tài chính là nỗi đau chung của rất nhiều doanh nghiệp nhỏ. Ngôn ngữ tài chính dường như là điều bí ẩn nhất của thế giới. Vô số tính toán và ý đồ được cài cắm sau các con số, mà thậm chí người kinh doanh nhiều năm cũng không thể nào bóc tách nổi.\n
Nếu bạn vẫn cảm thấy mù mờ với bảng báo cáo t&agr...`, NXB:"Nhà xuất bản: Thế Giới" },
];

function ProductList() {
  const [hoveredProduct, setHoveredProduct] = useState(productsVanHoc[0]);
  const [activeTab, setActiveTab] = useState("Van Hoc");

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const products = activeTab === "Van Hoc" ? productsVanHoc : productsKinhTe;

  return (
    <div className="container bg-white pt-3 mb-3" >
      <div className="header bg-black pt-2 pb-2" style={{borderRadius:'10px'}}>
      <h5 style={{color:'white', marginLeft:'5px'}}>Bảng xếp hạng bán chạy tuần</h5>
      </div><br/>
      <Tabs
        id="product-tabs"
        activeKey={activeTab}
        onSelect={(key) => {
          setActiveTab(key);
          setHoveredProduct(key === "Van Hoc" ? productsVanHoc[0] : productsKinhTe[0]);
        }}
        className="mb"
      >
        <Tab eventKey="Van Hoc" title="Văn Học">
          <Row>
            {/* Bên trái: Danh sách sản phẩm */}
            <Col md={5} className="product-list">
              <div className="product-items">
                {products.map((product, index) => (
                  <Card 
                    key={index} 
                    onMouseEnter={() => handleMouseEnter(product)}
                    className="mb"
                    style={{ cursor: 'pointer', width: '100%', height: '100px',border: 'none',boxShadow: 'none'}}>
                    <Row className="align-items-center">
                      <Col xs={1}>
                        <span>{index + 1}</span>
                      </Col>
                      <Col xs={2}>
                        {/* Điều chỉnh kích thước ảnh trong danh sách sản phẩm */}
                        <Card.Img 
                          src={product.image} 
                          alt={product.title} 
                          style={{ width: '80px', height: '100px', objectFit: 'cover',border: 'none' }}
                        />
                      </Col>
                      <Col xs={9}>
                        <Card.Body>
                          <Card.Title style={{ fontSize: '13px', lineHeight:'1'}}>{product.title}</Card.Title>
                          <Card.Text style={{ fontSize: '12px' , lineHeight:'0.8'}}>{product.author}</Card.Text>
                          <Card.Text style={{ fontSize:'12px' ,color: 'blue', lineHeight:'0.2' }}>{product.point}</Card.Text>

                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            </Col>

            {/* Bên phải: Chi tiết sản phẩm */}
            <Col md={7}>
              {hoveredProduct ? (
                <Card
                style={{ width: '100%', height: '540px',border: 'none'}}>
                  <Card.Body>
                    <Row>
                      <Col md={5}>
                        {/* Điều chỉnh kích thước ảnh trong chi tiết sản phẩm */}
                        <Card.Img 
                          src={hoveredProduct.image} 
                          alt={hoveredProduct.title} 
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col md={7}>
                        <Card.Title style={{ fontSize: '18px' }}>{hoveredProduct.title}</Card.Title>
                        <Card.Text style={{ fontSize: '14px' , lineHeight:'0.5'}}>{hoveredProduct.author}</Card.Text>
                        
                        <Card.Text style={{ fontSize: '14px' , lineHeight:'0.5'}}>{hoveredProduct.NXB}</Card.Text>
                        <Card.Text 
                        className="text-danger" style={{ fontSize: '16px' , fontWeight: 'bold', lineHeight:'0.5' }}>{hoveredProduct.price}</Card.Text>
                        {hoveredProduct.oldPrice && (
                          <div>
                            <span className="text-muted" style={{ fontSize: '14px', lineHeight:'0.5'  }}><del>{hoveredProduct.oldPrice}</del></span>
                            <span className="badge bg-warning" style={{ fontSize: '14px', marginLeft:'5px'}}>{hoveredProduct.discount}</span>
                          </div>
                        )}
                        <Card.Text style={{ fontSize: '14px' }}>{hoveredProduct.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ) : (
                <div>Di chuyển chuột vào sản phẩm để xem chi tiết</div>
              )}
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="Kinh Te" title="Kinh Tế">
          <Row>
            {/* Bên trái: Danh sách sản phẩm */}
            <Col md={5} className="product-list">
              <div className="product-items">
                {products.map((product, index) => (
                  <Card 
                    key={index} 
                    onMouseEnter={() => handleMouseEnter(product)}
                    className="mb"
                    style={{ cursor: 'pointer',width: '100%', height: '100px',border: 'none',boxShadow: 'none'}}>
                    <Row className="align-items-center">
                      <Col xs={1}>
                        <span>{index + 1}</span>
                      </Col>
                      <Col xs={2}>
                        {/* Điều chỉnh kích thước ảnh trong danh sách sản phẩm */}
                        <Card.Img 
                          src={product.image} 
                          alt={product.title} 
                          style={{ width: '80px', height: '100px', objectFit: 'cover',border: 'none' }}
                        />
                      </Col>
                      <Col xs={9}>
                        <Card.Body>
                          <Card.Title style={{fontSize: '13px', lineHeight:'1'}}>{product.title}</Card.Title>
                          <Card.Text style={{fontSize: '12px' , lineHeight:'0.8'}}>{product.author}</Card.Text>
                          <Card.Text style={{ fontSize:'12px' ,color: 'blue', lineHeight:'0.2' }}>{product.point}</Card.Text>

                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            </Col>

            {/* Bên phải: Chi tiết sản phẩm */}
            <Col md={7}>
              {hoveredProduct ? (
                <Card
                style={{ width: '100%', height: '540px',border: 'none'}}>
                  <Card.Body>
                    <Row>
                      <Col md={5}>
                        {/* Điều chỉnh kích thước ảnh trong chi tiết sản phẩm */}
                        <Card.Img 
                          src={hoveredProduct.image} 
                          alt={hoveredProduct.title} 
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col md={7}>
                        <Card.Title style={{ fontSize: '18px' }}>{hoveredProduct.title}</Card.Title>
                        <Card.Text style={{ fontSize: '14px' , lineHeight:'0.5'}}>{hoveredProduct.author}</Card.Text>
                        
                        <Card.Text style={{ fontSize: '14px' , lineHeight:'0.5'}}>{hoveredProduct.NXB}</Card.Text>
                        <Card.Text 
                        className="text-danger" style={{ fontSize: '16px' , fontWeight: 'bold'}}>{hoveredProduct.price}</Card.Text>
                        {hoveredProduct.oldPrice && (
                          <div>
                            <span className="text-muted" style={{ fontSize: '14px', lineHeight:'0.5'  }}><del>{hoveredProduct.oldPrice}</del></span>
                            <span className="badge bg-warning" style={{ fontSize: '14px', marginLeft:'5px'}}>{hoveredProduct.discount}</span>
                          </div>
                        )}
                        <Card.Text style={{ fontSize: '14px' }}>{hoveredProduct.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ) : (
                <div>Di chuyển chuột vào sản phẩm để xem chi tiết</div>
              )}
            </Col>
          </Row>
        </Tab>

        <Tab eventKey="Tam Ly - Ky Nang Song" title="Tâm lý - Kỹ Năng sống">
          <Row>
            {/* Bên trái: Danh sách sản phẩm */}
            <Col md={5} className="product-list">
              <div className="product-items">
                {products.map((product, index) => (
                  <Card 
                    key={index} 
                    onMouseEnter={() => handleMouseEnter(product)}
                    className="mb"
                    style={{ cursor: 'pointer', width: '100%', height: '100px',border: 'none',boxShadow: 'none'}}>
                    <Row className="align-items-center">
                      <Col xs={1}>
                        <span>{index + 1}</span>
                      </Col>
                      <Col xs={2}>
                        {/* Điều chỉnh kích thước ảnh trong danh sách sản phẩm */}
                        <Card.Img 
                          src={product.image} 
                          alt={product.title} 
                          style={{ width: '80px', height: '100px', objectFit: 'cover',border: 'none' }}
                        />
                      </Col>
                      <Col xs={9}>
                        <Card.Body>
                          <Card.Title style={{ fontSize: '13px', lineHeight:'1'}}>{product.title}</Card.Title>
                          <Card.Text style={{ fontSize: '12px' , lineHeight:'0.8'}}>{product.author}</Card.Text>
                          <Card.Text style={{  fontSize:'12px' ,color: 'blue', lineHeight:'0.2' }}>{product.point}</Card.Text>

                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            </Col>

            {/* Bên phải: Chi tiết sản phẩm */}
            <Col md={7}>
              {hoveredProduct ? (
                <Card
                style={{width: '100%', height: '540px',border: 'none'}}>
                  <Card.Body>
                    <Row>
                      <Col md={5}>
                        {/* Điều chỉnh kích thước ảnh trong chi tiết sản phẩm */}
                        <Card.Img 
                          src={hoveredProduct.image} 
                          alt={hoveredProduct.title} 
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </Col>
                      <Col md={7}>
                        <Card.Title style={{ fontSize: '18px' }}>{hoveredProduct.title}</Card.Title>
                        <Card.Text style={{ fontSize: '14px' , lineHeight:'0.5'}}>{hoveredProduct.author}</Card.Text>
                        
                        <Card.Text style={{ fontSize: '14px' , lineHeight:'0.5'}}>{hoveredProduct.NXB}</Card.Text>
                        <Card.Text 
                        className="text-danger" style={{ fontSize: '16px' , fontWeight: 'bold'}}>{hoveredProduct.price}</Card.Text>
                        {hoveredProduct.oldPrice && (
                          <div>
                            <span className="text-muted"><del>{hoveredProduct.oldPrice}</del></span>
                            <span className="badge bg-warning" style={{ fontSize: '14px', marginLeft:'5px'}}>{hoveredProduct.discount}</span>
                          </div>
                        )}
                        <Card.Text style={{ fontSize: '14px' }}>{hoveredProduct.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ) : (
                <div>Di chuyển chuột vào sản phẩm để xem chi tiết</div>
              )}
            </Col>
          </Row>
        </Tab>

      </Tabs>
      <div className="more-btn">
        <Button variant="outline-danger" size="lg">Xem thêm</Button>
      </div>
    </div>
  );
}

export default ProductList;
