import React from "react";
import { Card, Image } from "react-bootstrap";
import Main from "../components/Main";
import homeHeader from "../assets/image/home-header.png";
import imageSlider from "../assets/image/imageSlider.jpg";
import ss5 from "../assets/image/ss5.jpg";
import ButtonCommon from "../components/common/ButtonCommon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/pages/home1.css";

import { Pagination } from "swiper";

const Home = () => {
  return (
    <Main>
      <div
        className="session-1"
        style={{ backgroundImage: `url(${homeHeader})` }}
      >
        <div className="text-white vw-100 vh-100 d-flex justify-content-center align-items-center">
          <div>
            <div
              className="fs-1"
              style={{ fontWeight: "bold", maxWidth: "80vw" }}
            >
              Nơi đào tạo và cung cấp Nhân Sự - KOL cho Thị Trường Blockchain
            </div>
          </div>
        </div>
      </div>
      <Session2 />
      <Session3 />
      <Session4 />
      <Session5 />
      <Session6 />
      <Session7 />
      {/* <Session8 /> */}
    </Main>
  );
};

export default Home;

const Session2 = () => {
  return (
    <div className="session2 container">
      <h2 className="pt-5 text-center fw-bold">LÝ DO CHỌN CHÚNG TÔI </h2>
      <div className="session2-line"></div>
      <div className="py-5 text-center">
        Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
        trình bày và dàn trang phục vụ cho in ấn.
      </div>
      <div className="row mb-4">
        {dataSession2.map((item, key) => (
          <div key={key} className="col-12 col-md-6 g-4">
            <div className="fw-bold fs-4">{item.title}</div>
            <div className="fs-5">{item.content}</div>
          </div>
        ))}
      </div>
      <div className="text-center pb-5">
        <ButtonCommon>Xem Thêm</ButtonCommon>
      </div>
    </div>
  );
};

const dataSession2 = [
  {
    title: "Kinh nghiệm, Chuyên nghiệp, và Nhiệt tình.",
    content:
      "Chúng Tôi là Đội Ngũ dày dặn kinh nghiệm, chuyên nghiệp, và nhiệt tình.",
  },
  {
    title: "Đào tạo ",
    content:
      "Đội Ngũ Chuyên Gia dày dặn kinh nghiệm của ENB sẽ trực tiếp cầm tay chỉ việc cho từng Học Viên, vừa học lý thuyết vừa thực hành công việc, đảm bảo mỗi Nhân Sự sau khi đào tạo xong, đều đem lại sự hài lòng cho Quý Đổi Tác.",
  },
  {
    title: "title 3",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
  {
    title: "title 4",
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.",
  },
];

const Session3 = () => {
  return (
    <div className="parallax">
      <div className="parallax__layer parallax__layer--back">
        <div className="title"></div>
      </div>
      <div className="parallax__layer parallax__layer--base">
        <div className="title text-white">This is the foreground</div>
      </div>
    </div>
  );
};
const Session4 = () => {
  return (
    <div className="ss4 pb-5">
      <div className="container pb-5">
        <h2 className="pt-5 text-center fw-bold">CÁC DỊCH VỤ TUYỆT VỜI </h2>
        <div className="session2-line"></div>
        <div className="py-5 text-center">
          Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
          trình bày và dàn trang phục vụ cho in ấn.
        </div>
        <div className="row">
          <Slider />
        </div>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 1000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            // width: 576,
            slidesPerView: 2,
          },
          1028: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
      >
        {dataSlider.map((slider) => {
          return (
            <SwiperSlide>
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={slider.image} />
                <Card.Body>
                  <Card.Title>{slider.title}</Card.Title>
                  <div className="line"></div>
                  <Card.Text className="mt-4">{slider.content}</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

const dataSlider = [
  { title: "Title 1", image: imageSlider, content: "content 1" },
  { title: "Title 2", image: imageSlider, content: "content 2" },
  { title: "Title 3", image: imageSlider, content: "content 3" },
  { title: "Title 4", image: imageSlider, content: "content 4" },
  { title: "Title 5", image: imageSlider, content: "content 5" },
  { title: "Title 6", image: imageSlider, content: "content 6" },
  { title: "Title 7", image: imageSlider, content: "content 7" },
  { title: "Title 8", image: imageSlider, content: "content 8" },
  { title: "Title 9", image: imageSlider, content: "content 9" },
];

const Session5 = () => {
  return (
    <div className="container">
      <div className="row py-5 g-3 align-items-center">
        <div className="col-12 col-md-6">
          <div
            style={{
              height: "450px",
              width: "100%",
              overflow: "hidden",
              backgroundImage: `url(${ss5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <h2 className="fw-bold ">GIỚI THIỆU</h2>
          <div className="session2-line"></div>
          <span className="pt-5 pb-3 d-block" style={{ color: "#303030" }}>
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả
          </span>
          <br />
          <h6 style={{ maxWidth: "80%" }} className="d-block mx-auto h6-text">
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
            trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử
            dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm
            1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo
            thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại
            năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của
            nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm
            1960
          </h6>
          <ButtonCommon>Xem Thêm</ButtonCommon>
        </div>
      </div>
    </div>
  );
};

const Session6 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeHeader})`,
        // height: "400px",
        width: "100%",
        backgroundPosition: "center",
      }}
      className="py-5"
    >
      <div className="container h-100">
        <div className="row text-white align-items-center w-100 h-100 text-center">
          <div className="col-12 col-md-6 col-xl-3  py-5 ss6-card">
            <div className="fw-bold fs-2">1500</div>
            <div style={{ fontWeight: "500" }}>Khách Hàng</div>
          </div>
          <div className="col-12 col-md-6 col-xl-3  py-5  ss6-card">
            <div className="fw-bold fs-2">1500</div>
            <div style={{ fontWeight: "500" }}>Khách Hàng</div>
          </div>
          <div className="col-12 col-md-6 col-xl-3  py-5  ss6-card">
            <div className="fw-bold fs-2">1500</div>
            <div style={{ fontWeight: "500" }}>Khách Hàng</div>
          </div>
          <div className="col-12 col-md-6 col-xl-3  py-5  ss6-card">
            <div className="fw-bold fs-2">1500</div>
            <div style={{ fontWeight: "500" }}>Khách Hàng</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Session7 = () => {
  return (
    <div style={{ background: "#f6f6f6" }}>
      <div className="py-5 container text-center">
        <h2 style={{ fontWeight: "bold" }}>CÁC DỊCH VỤ TUYỆT VỜI</h2>
        <div className="session2-line"></div>
        <div className="py-4">
          Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
          trình bày và dàn trang phục vụ cho in ấn.
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            autoplay={{
              delay: 1000,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              1028: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
          >
            {dataSlider.map((slider) => {
              return (
                <SwiperSlide>
                  <Card
                    style={{ width: "100%", height: "250px" }}
                    className="ss7-image"
                  >
                    <Card.Img variant="top" src={slider.image} />
                    <div
                      // style={{ height: "250px" }}
                      className="ss7-card-over d-none"
                    >
                      <div className=" h-100 text-center d-flex align-items-center justify-content-center text-white ">
                        <div>
                          <div>Dọn dẹp nhà</div>
                          <button className="ss7-btn px-4 py-2 mt-3">
                            Click me
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Session8 = () => {
  return (
    <div className="py-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-md-6 fs-3">
            Xem thêm các dịch vụ của chúng tôi
          </div>
          <div className="col-12 col-md-6 text-center">
            <ButtonCommon>Xem Thêm</ButtonCommon>
          </div>
        </div>
      </div>
      <div>
        <div className="parallax">
          <div className="parallax__layer parallax__layer--back">
            <div className="title"></div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div className="title text-white">This is the foreground</div>
          </div>
        </div>
      </div>
    </div>
  );
};
