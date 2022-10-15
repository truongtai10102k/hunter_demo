import React from "react";
import { Card } from "react-bootstrap";
import Main from "../components/Main";
import imageSlider from "../assets/image/imageSlider.jpg";
import "../assets/css/pages/service.css";

const Service = () => {
  return (
    <Main>
      <div className="mt-5">
        <SvSession1 />
      </div>
    </Main>
  );
};

export default Service;

const SvSession1 = () => {
  return (
    <div className="container pt-5 ">
      <h2 className="text-center fw-bold">CÁC DỊCH VỤ TUYỆT VỜI</h2>
      <div className="session2-line"></div>
      <p
        className="pt-4 text-center"
        style={{
          color: "#303030",
          fontSize: "16px",
          fontWeight: "100",
          lineHeight: "32px",
        }}
      >
        Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
        trình bày và dàn trang phục vụ cho in ấn.
      </p>
      <div className="row py-5 g-4">
        {dataSlider.map((slider) => {
          return (
            <div className="col-12 col-md-4 border-none ">
              <Card
                style={{ width: "100%", height: "250px" }}
                className="ss7-image"
              >
                <Card.Img
                  variant="top"
                  style={{ height: "250px" }}
                  src={slider.image}
                />
                <div className="ss7-card-over d-none">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

const dataSlider = [
  {
    title: "Title 1",
    image: imageSlider,
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày .",
  },
  {
    title: "Title 2",
    image: imageSlider,
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày .",
  },
  {
    title: "Title 3",
    image: imageSlider,
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày .",
  },
  {
    title: "Title 4",
    image: imageSlider,
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày .",
  },
  {
    title: "Title 5",
    image: imageSlider,
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày .",
  },
  {
    title: "Title 6",
    image: imageSlider,
    content:
      "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày .",
  },
];
