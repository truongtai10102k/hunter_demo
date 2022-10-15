import React from "react";
import { Card } from "react-bootstrap";
import Main from "../components/Main";
import imageSlider from "../assets/image/imageSlider.jpg";
import "../assets/css/pages/service.css";

const Service = () => {
  return (
    <Main>
      <div style={{ marginTop: "100px" }}></div>

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
                className="sv-card"
                style={{ width: "100%", border: "none" }}
              >
                <Card.Img variant="top" src={slider.image} />
                <Card.Body>
                  <Card.Title>{slider.title}</Card.Title>
                  <div className="line"></div>
                  <Card.Text
                    className="mt-4 mx-auto text-center"
                    style={{ maxWidth: "80%" }}
                  >
                    {slider.content}
                  </Card.Text>
                </Card.Body>
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
