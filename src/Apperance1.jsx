import "./Apperance1.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "./Navbar.jsx";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import PhoneUI from "./PhoneUI.jsx";
import axios from "axios";
import BioPage2 from "./Biopage2";
import Payment from "./Payment";
import Analytics from "./Analytics";
import img from "../public/defaultImage.jpg";
import * as React from 'react';
import Chip from '@mui/material/Chip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


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

 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const options = [
  "Facebook",
  "Instagram",
  "Whatsapp",
  "Telegram",
  "Github",
  "Reddit",
  "Twitch",
  "WeChat",
  "YouTube",
  "Tumblr",
  "Medium",
  "Flickr",
  "LinkedIn",
  "TikTok",
  "Pinterest",
];




const Apperance1 = () => {
  const [template, setTemplate] = useState(0);
  
  const [outline, setOutline] = useState("");
  const [fontColor, setFontColor] = useState("black");
  const [fontfamily, setfontfamily] = useState("");

  const [backgnd, setbackgnd] = useState(0);


  const [Name, setNameValue] = useState("");
  const [listoflinks, setListOfLinks] = useState([]);
  const [username, setUsername] = useState("");
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [about, setAbout] = useState("");
  const [productdata, setproductdata] = useState([]);
  const [selectedimage, setSelectedImage] = useState(null);
  const [open5, setOpen5] = React.useState(false);

  const [selectedBgColor, setSelectedBgColor] = useState("#fffff");

  const handleClickOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };


 

  
 




  const textstyle = [
    { label: "sans-serif", Number: 1 },
    { label: "Kanit", Number: 2 },
    { label: "Lato", Number: 3 },
    { label: "cursive", Number: 4 },
    { label: "Oswald", Number: 5 },
    { label: "Poppins", Number: 6 },
    { label: "Roboto", Number: 7 },
  ];
  const handleClickSave = () => {
    const data1 = {
      selectedBgColor: selectedBgColor,
      outline: outline,
      fontfamily: fontfamily,
      fontColor: fontColor,
     
    };
    console.log(data1);
    const token = localStorage.getItem("token");
    axios
    .post("http://192.168.0.108:8080/user/set-appearance",
    { outline: outline, fontColor: fontColor,fontStyle:fontfamily,background:selectedBgColor },
    {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then( (response)  => {
      console.log(response);
      setOutline(response.data.outline);
      setFontColor(response.data.fontColor);
      setfontfamily(response.data.fontStyle);
      setSelectedBgColor(response.data.background);
     
      
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
 
 

  useEffect(() => {
   
      callGetUserDetails();
    
  }, []);

  const callGetUserDetails =  () => {
    const token = localStorage.getItem("token");

    axios
      .get("http://192.168.0.108:8080/user/get-user-info", {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then( (response)  => {
        setNameValue(response.data.name);
        setListOfLinks(response.data.listOfLinks);
        setUsername(response.data.username);
        setListOfOtherLinks(response.data.listOfOtherLinks);
        setAbout(response.data.bio);
        setproductdata(response.data.listOfProducts);
        setOutline(response.data.outline);
        setFontColor(response.data.fontColor);
        setfontfamily(response.data.fontStyle);
        setSelectedBgColor(response.data.background);
        if (response.data.image) {
          setSelectedImage(response.data.image);
        } else {
          setSelectedImage(img);
        }
        console.log(response);
        console.log("radhe radhe");

        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

    const form = new FormData();
    form.append("image", file);
    setFormData(formData);

    const token = localStorage.getItem("token");

    axios
      .post("http://192.168.0.108:8080/user/upload-image", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data) {
          setSelectedImage(response.data``);
        } else {
          setSelectedImage(img);
        }
        // setSelectedImage(response.data);
        // Handle the response
      })
      .catch((error) => {
        console.log(error);
        // Handle the error
      });
  };

  return (
    <>
      <div className="containerappear">
        <div className="nav" >
          <Navbar selectedImage={selectedimage} />
        </div>

        <br />

        <div className="parent" style={{marginTop:'9vh',paddingTop:'3vh'}}>
          <div className="form">
            <div className="temp-container" style={{display:'none'}}>
              <h2> <b> Templates </b></h2>

              <div className="template">
                <div className="temp">
                  <div href="#">
                    
                    <img
                    src="/Themes/t1.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t1");
                      }}
                    />
                  </div>
                </div>
                <div className="temp">
                  <div href="#">
                    
                    <img
                      src="/Themes/t2.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t2");
                      }}
                    />
                  </div>
                </div>
                <div className="temp">
                  <div href="#">
                    
                    <img
                      src="/Themes/t3.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t3");
                      }}
                    />
                  </div>
                </div>
                <div className="temp">
                  <div href="#">
                    
                    <img
                      src="/Themes/t4.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate("t4");
                        
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div className="bg">
              <h2 style={{marginLeft:'2vw'}}>  <b> Background </b></h2>
              <div className="bg-options">
                <div
                  className="bgc"
                  style={{ backgroundColor: "#ffb703" }}
                  onClick={() => {
                    setSelectedBgColor("#ffb703");
                    setbackgnd(1);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#588157" }}
                  onClick={() => {
                    setSelectedBgColor("#588157");
                    setbackgnd(2);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#8d99ae" }}
                  onClick={() => {
                    setSelectedBgColor("#8d99ae");

                    setbackgnd(3);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#669bbc" }}
                  onClick={() => {
                    setSelectedBgColor("#669bbc");
                    setbackgnd(4);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#708d81" }}
                  onClick={() => {
                    setSelectedBgColor("#708d81");
                    setbackgnd(5);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#e07a5f" }}
                  onClick={() => {
                    setSelectedBgColor("#e07a5f");
                    setbackgnd(6);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#57cc99" }}
                  onClick={() => {
                    setSelectedBgColor("#57cc99");
                    setbackgnd(7);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#a5a58d" }}
                  onClick={() => {
                    setSelectedBgColor("#a5a58d");
                    setbackgnd(8);
                  }}
                ></div>
              </div>
            </div>

            <br />

            <div className="shape-container">
              <h2 style={{marginLeft:'2vw'}}> <b>Border </b></h2>
              <div className="shape">
                <div className="head">
                  <p>Outline</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1"
                    onClick={() => {
                      setOutline("g");
                    }}
                  ></div>
                  <div
                    className="opt2"
                    onClick={() => {
                      setOutline("h");
                    }}
                  ></div>
                  <div
                    className="opt3"
                    onClick={() => {
                      setOutline("i");
                    }}
                  ></div>
                </div>

                <br />

                <div className="head">
                  <p>Soft Shadow</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline("d");
                    }}
                  ></div>
                  <div
                    className="opt2 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline('e');
                    }}
                  ></div>
                  <div
                    className="opt3 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline("f");
                    }}
                  ></div>
                </div>

                <br />

                <div className="head">
                  <p>Dark Shadow</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1 darkshadow"
                   
                    onClick={() => {
                      // setBorderRadius("none");
                      setOutline("a");
                    }}
                  ></div>
                  <div
                    className="opt2 darkshadow"
                    onClick={() => {
                      setOutline("b");
                    }}
                  ></div>
                  <div
                    className="opt3 darkshadow"
                    onClick={() => {
                      setOutline("c");
                    }}
                  ></div>
                </div>

                <br />

                <div></div>
              </div>
            </div>

            <br />

            <div className="font-container">
              <h2 style={{marginLeft:'2vw'}}> <b> Fonts </b></h2>

              <div className="font">
                <div className="font-option">
                  <p>Font Style</p>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={textstyle}
                    sx={{ width: "30vw" }}
                    renderInput={(params) => (
                     
                      <TextField {...params} label="Fonts" 
                      inputProps={{ ...params.inputProps, readOnly: true }}
                      autoComplete="off"
                      onSelect={(e)=>{setfontfamily(e.target.value)}}

                      
                     />
                    )}
                  />
                </div>

                <br />

                <div className="font-option">
                  <p>Font Color</p>
                  <div className="ofont">
                    <div
                      className="color-option-1"
                      onClick={() => {
                        
                        setFontColor("rgb(0, 0, 0)");
                      }}
                    ></div>
                    <div
                      className="color-option-2"
                      onClick={() => {
                        setFontColor("rgb(87, 78, 78)");
                      }}
                    ></div>
                    <div
                      className="color-option-3"
                      onClick={() => {
                        setFontColor('rgb(207, 200, 200)');
                      }}
                    ></div>
                    <div
                      className="color-option-4"
                      onClick={() => {
                        setFontColor('rgb(255, 255, 255)');
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex  justify-center py-3">
              <Button variant="contained" onClick={handleClickSave}>
                Save
              </Button>


              <div className="flex sm:hidden" 
              
              style={{marginLeft:'3vh'}}>
              <Chip icon={<VisibilityIcon />} label="Preview" variant="outlined" onClick={handleClickOpen5}
               style={{ border: "2px solid black", fontWeight: "bolder" }} />

              <Dialog
        fullScreen
        open={open5}
        onClose={handleClose5}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}
        style={{backgroundColor:'#006d77'}}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose5}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Preview
            </Typography>
         
          </Toolbar>
        </AppBar>
        <div style={{marginRight:'50vw'}}>
        <PhoneUI
    name={Name}
    lstoflinks={listoflinks}
    lstofotherlinks={listOfOtherLinks}
    lstofproducts={productdata}
    username={username}
    selectedImage={selectedimage}
    handleImageChange={handleImageChange}
    about={about}
    bgColor={selectedBgColor} 
    fontColor={fontColor}
    fontfamily={fontfamily}
    outline={outline}
    
  
  /> </div>
      </Dialog>
                 
              </div>
            </div>
          </div>

          <div className="phone">
            <div className="pphone">
              
              <PhoneUI
    name={Name}
    lstoflinks={listoflinks}
    lstofotherlinks={listOfOtherLinks}
    lstofproducts={productdata}
    username={username}
    selectedImage={selectedimage}
    handleImageChange={handleImageChange}
    about={about}
    bgColor={selectedBgColor} 
    fontColor={fontColor}
    fontfamily={fontfamily}
    outline={outline}

  />


            
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apperance1;
