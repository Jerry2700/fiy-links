
import "../PhoneUi/style.css";
import '../background.css';
import { useState,useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import axios from "axios";


import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaGithub,
  FaReddit,
  FaTwitch,
  FaWeixin,
  FaYoutube,
  FaTumblr,
  FaMedium,
  FaFlickr,
  FaLinkedin,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";



 const PhoneUI = ({name, data, lstoflinks,lstofotherlinks,lstofproducts,username,selectedImage,handleImageChange,setSelectedImage}) => {

  
  const [About, setAbout] = useState("");
  






  useEffect(() => {
    if (username === "") {
      callGetUserDetails();
    }
  }, []);

  const callGetUserDetails = () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://192.168.0.108:8080/user/get-user-info", {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
       
        if (response.data.image) {
          setSelectedImage(
            "http://192.168.0.108:8080/user/auth/get-user-image/" +
              response.data.image
          );
        } 
      })
      .catch((error) => {
        console.log("error...");
      });
  };
  
  const renderSocialMediaIcon = (socialMedia) => {
    switch (socialMedia) {
      case "Facebook":
        return <FaFacebook />;
      case "Instagram":
        return <FaInstagram />;
      case "Whatsapp":
        return <FaWhatsapp />;
      case "Telegram":
        return <FaTelegram />;
      case "Github":
        return <FaGithub />;
      case "Reddit":
        return <FaReddit />;
      case "Twitch":
        return <FaTwitch />;
      case "WeChat":
        return <FaWeixin />;
      case "YouTube":
        return <FaYoutube />;
      case "Tumblr":
        return <FaTumblr />;
      case "Medium":
        return <FaMedium />;
      case "Flickr":
        return <FaFlickr />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "TikTok":
        return <FaTiktok />;
      case "Pinterest":
        return <FaPinterest />;
      default:
        return null;
    }
  };
  return (
    <div className="box">
      <div className="overlap-2">
        <div className="preview">
          <img
            className="menu"
            alt="Menu"
            src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/menu-2.svg"
          />
          <div className="content">
            <div className="group">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  onChange={handleImageChange}
                  className=" rounded-[50%] h-[5.5rem] w-[5.5rem] "
                />
              )}

              <div className="title">
                <div className="h-1">{name}</div>

                <div className="social-container">
                  {lstoflinks.map((link, index) => (
                    <a
                      rel="noreferrer"
                      key={link.link}
                      target="_blank"
                      href={link.link}
                      className="social-icon-container"
                      style={{ fontSize: "2vh", color: "black", margin: "0" }}
                    >
                      {renderSocialMediaIcon(link.name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="section">
              <div className="link">
                <div className="text-wrapper-2 items-center">
                  <input
                    className=" bg-transparent w-full border-none"
                    placeholder="SEARCH ANYTHING..."
                  ></input>
                </div>
                <img
                  className="thumbnail"
                  alt="Thumbnail"
                  src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/thumbnail-8.svg"
                />
              </div>
            </div>
            <div className="links-wrapper">
              <div className="links">
                <div
                  className="card-div"
                  style={{
                    flexWrap: "wrap",
                    overflowWrap: "break-word",
                    overflowY: "auto",
                  }}
                >
                  {lstofotherlinks.map((link, index) => (
                    <div key={index}>
                      <div className="card-bar">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-wrapper-4">{About}</div>
          </div>
          <div
            className="product-section"
            style={{ overflowWrap: "break-word", overflowY: "auto" }}
          >
            {lstofproducts.map((product, index) => (
              <div key={index}>
                <Card sx={{ display: "flex", flexDirection: "column" }}>
                  <CardMedia
                    component="img"
                    image={
                      product.productImage
                        ? "http://192.168.0.108:8080/user/auth/get-product-image/" +
                          product.productImage
                        : img2
                    }
                    alt="Live from space album cover"
                  />
                  <span style={{ alignSelf: "center" }}>
                    <b> {product.productName} </b>
                  </span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneUI;

