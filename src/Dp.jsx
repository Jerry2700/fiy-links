import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import "./Dp.css";
import img from "../public/defaultImage.jpg";

const Dp = () => {
  const { fname } = useParams();
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [listoflinks, setlistOflinks] = useState([]);
  const [listofotherlinks, setlistOfotherlinks] = useState([]);
  const [Image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://192.168.0.106:8080/user/auth/get-user-details?username=" + fname
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setname(response.data.name);
        setusername(response.data.username);
        setlistOflinks(response.data.listOfLinks);
        setlistOfotherlinks(response.data.listOfOtherLinks);
        if(response.data.image){
          setImage("http://192.168.0.106:8080/user/auth/get-user-image/"+response.data.image);
        }
        else{
          setImage(img);
          
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

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
    <>
      <div className="backgrounddp"  >
        <div class="background" style={{height:'100%'}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className="main-dp2"
        style={{
          background: "rgb(2,48,71)",
          background:
            "linear-gradient(143deg, rgba(2,48,71,1) 0%, rgba(33,158,188,1) 35%, rgba(142,202,230,1) 69%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "2vh",
          paddingBottom: "2vh",
          height:'auto',
        }}
      >
        <div
          className="main-dp"
          style={{
            backgroundColor: "green",

            height: "auto",
            width: "fit-content",
            paddingRight: "2vw",
            minWidth: "50%",
            borderRadius: "2%",
            background: "rgba(227, 227, 227, 0.48)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(11.4px)",
            WebkitBackdropFilter: "blur(11.4px)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
          }}
        >
          <div className="basic-info-dp">
           
            <br />
          <div className="image-dp" >
            <img src={Image}  alt="dp" height={100} width={100} style={{borderRadius:'50%'}} /> </div>
            
            <h1 className="username-dp"> @{username}</h1>
            {/* <h1>{listoflinks}</h1> */}
          </div>

          <div className="card-div-dp">
            <div className="social-container-dp">
              {listoflinks.map((link) => (
                <a
                  className="social-icon-dp"
                  key={link.index}
                  target="_blank"
                  href={link.link}
                >
                  {renderSocialMediaIcon(link.name)}
                </a>
              ))}
            </div>


            <div className="about">
              
            </div>


            

            {listofotherlinks.map((link, index) => (
              <div key={index}>
                <div className="card-bar-dp">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-card-dp"
                    style={{
                      fontWeight: "600",

                      fontFamily: "Roboto",
                      color: "#353535",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3vh",
                      fontWeight: "bold",
                      color: "white",
                      flexWrap:'wrap'
                    }}
                  >
                    <span>{link.name} </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Dp;