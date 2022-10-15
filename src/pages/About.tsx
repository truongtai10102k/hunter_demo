import React from "react";
import Main from "../components/Main";
import "../assets/css/pages/about.css";
import ss5 from "../assets/image/ss5.jpg";
import ButtonCommon from "../components/common/ButtonCommon";
import { BsPatchCheckFill } from "react-icons/bs";

const About = () => {
  return (
    <Main>
      <div style={{marginTop:'100px'}}></div>
      <div className="mt-5">
        <AbSession1 />
        <AbSession2 />
        <AbSession3 />
        <AbSession4 />
      </div>
    </Main>
  );
};

export default About;

const AbSession1 = () => {
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
          />
          <div className="row my-3">
            <div className="col-4">
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundImage: `url(${ss5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="col-4">
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundImage: `url(${ss5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="col-4">
              <div
                style={{
                  height: "150px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundImage: `url(${ss5})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <h2 className="fw-bold ">GIỚI THIỆU</h2>
          <div className="session2-line"></div>
          <span
            className="pt-3 pb-2 d-block mx-auto"
            style={{ color: "#303030", maxWidth: "80%" }}
          >
            Lorem Ipsum chỉ đơn giản là một đoạn văn bản giảLorem Ipsum chỉ đơn
            giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn
            trang phục vụ cho in ấn.
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
          <div className="text-start mx-auto mt-3" style={{ maxWidth: "80%" }}>
            <h3>Sứ mệnh của chúng tôi</h3>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Cung cấp một loại dịch vụ
              khác nhau cho gia đình và các chuyên gia
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Cung cấp chất lượng cao và
              dịch vụ phù hợp
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Sử dụng các sản phẩm làm sạch
              thân thiện với môi trường
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Cung cấp công việc ổn định
              với mức lương cộng hưởng
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Tập trung nguồn lực của chúng
              tôi vào việc duy trì các tiêu chuẩn
            </div>
            <div className="my-1">
              <BsPatchCheckFill color="#56B665" /> Làm cho bạn một khách hàng
              cực kỳ hài lòng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AbSession2 = () => {
  return (
    <div
      style={{
        // height: "450px",
        width: "100%",
        overflow: "hidden",
        backgroundImage: `url(${ss5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="container h-100 py-5">
        <div className="row h-100 g-3 py-5">
          <div className="col-12 col-md-4">
            <div className="text-center abss2-card">
              <div className="fw-bold py-4">Icon</div>
              <h4 style={{ color: "#111", fontWeight: 500 }}>
                Thanh toán dễ dàng
              </h4>
              <div style={{ color: "#303030", fontWeight: 100 }}>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center abss2-card">
              <div className="fw-bold py-4">Icon</div>
              <h4 style={{ color: "#111", fontWeight: 500 }}>
                Thanh toán dễ dàng
              </h4>
              <div style={{ color: "#303030", fontWeight: 100 }}>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="text-center abss2-card">
              <div className="fw-bold py-4">Icon</div>
              <h4 style={{ color: "#111", fontWeight: 500 }}>
                Thanh toán dễ dàng
              </h4>
              <div style={{ color: "#303030", fontWeight: 100 }}>
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
                việc trình bày và dàn trang phục vụ cho in ấn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AbSession3 = () => {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-12 col-md-8">
          <div style={{ maxWidth: "90%" }}>
            <h5>Chúng tôi quan tâm đến căn nhà của bạn</h5>
            <div className="mt-3 mb-5">
              Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào
              việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được
              sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những
              năm 1500
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  CÔNG NGHỆ LÀM SẠCH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  CÔNG NGHỆ LÀM SẠCH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  CÔNG NGHỆ LÀM SẠCH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  CÔNG NGHỆ LÀM SẠCH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  CÔNG NGHỆ LÀM SẠCH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="fw-bold">Icon</div>
                <div
                  className="my-3"
                  style={{ color: "#111", fontWeight: 500 }}
                >
                  CÔNG NGHỆ LÀM SẠCH
                </div>
                <div style={{ color: "#303030", fontWeight: 100 }}>
                  Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng
                  vào việc trình bày và dàn trang phục vụ cho in ấn.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="my-3"
            style={{
              height: "50%",
              minHeight: "300px",
              width: "100%",
              overflow: "hidden",
              backgroundImage: `url(${ss5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              position: "relative",
            }}
          >
            {" "}
            <div
              // style={{ height: "250px" }}
              className="ss7-card-over  d-block"
            >
              <div className=" h-100 text-center d-flex align-items-center justify-content-center text-white ">
                <div>
                  <div>Dọn dẹp nhà</div>
                  <button className="ss7-btn px-4 py-2 mt-3">Click me</button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "50%",
              minHeight: "300px",
              width: "100%",
              overflow: "hidden",
              backgroundImage: `url(${ss5})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              backgroundPosition: "bottom",
            }}
          >
            {" "}
            <div
              // style={{ height: "250px" }}
              className="ss7-card-over d-block"
            >
              <div className=" h-100 text-center d-flex align-items-center justify-content-center text-white ">
                <div>
                  <div>Dọn dẹp nhà</div>
                  <button className="ss7-btn px-4 py-2 mt-3">Click me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AbSession4 = () => {
  return (
    <div className="AbSession4 py-5">
      <div className="container">
        <div className="row g-5 ">
          <div className="col-12 col-md-6">
            <h4 className="mb-5">Các thương hiệu liên kết</h4>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="box-image py-3">
                  <img
                    width="100%"
                    src="http://mauweb.monamedia.net/cleanmate/wp-content/uploads/2019/11/logo_03-1.png"
                    className="gt-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4 className="mb-5">Các thương hiệu liên kết</h4>
            <div className=" bg-white">
              <div className="py-4 px-3 position-relative">
                Lorem Ipsum chỉ đơn giản là một đoạn văn bản giảLorem Ipsum chỉ
                đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày
                và dàn trang phục vụ cho in ấn. khi một họa sĩ vô danh ghép
                nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản.
                Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được
                áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị
                thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán
                những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây
                hơn
              </div>
            </div>
            <div className="AbSession4-text text-black pt-4 ps-4 fw-bold position-relative">
              Trần Nhật Tân -Nhà lá villa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
