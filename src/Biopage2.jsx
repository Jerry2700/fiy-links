

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "./BioPage.css";

import "./App.css";
import "./card.css";
import "./Main.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Input, Stack } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";
import * as React from "react";
import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "../public/cahrger.jpg";
import template1 from "../public/template1.png";
import template2 from "../public/template2.png";
import template3 from "../public/template3.png";
import { Component } from "react";
import ReactSearchBox from "react-search-box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import img2 from "../public/socialmedia.jpg";
import Analytics from "./Analytics";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import PhoneUI from "../src/Components/PhoneUi/PhoneUI";

import img from "../public/defaultImage.jpg";
import Navbar from './Navbar.jsx';

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

import { Diversity1Rounded } from '@mui/icons-material';

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




const BioPage2=()=>{

  const [sharedState, setSharedState] = useState("");

  

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [toggleState, setToggleState] = useState(1);
  const [Name, setNameValue] = useState("");
  const [username, setUsername] = useState("");
  const [Social, setsocial] = useState([]);
  const [color, setColor] = useState("white");
  const [About, setAbout] = useState("");
  const [val, setval] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinkss] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState("");
  const [selectedLink, setSelectedLink] = useState("");
  const [listOfLinks, setListOfLinks] = useState([]);
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [name1, setName1] = useState("");
  const [about1, setAbout1] = useState("");
  const navigate = useNavigate();
  const [template, settemplate] = useState("");

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  const [producturl, setproducturl] = useState("");
  const [productname, setproductname] = useState("");
  const [productvideo, setproductvideo] = useState("");
  const [productimage, setproductimage] = useState();
  const [productdata, setproductdata] = useState([]);

  const [open1, setOpen1] = React.useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const data = [
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

  const inputRef = useRef(null);

  // token check
  //       useEffect(() => {
  //           const token = localStorage.getItem("token");

  //         if (!token) {
  //            window.location.href = "/";
  //           } else {
  // }
  //         }, []);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  function handleSocialLink() {
    setActiveButton("social");

    console.log("clicked social");
  }

  function handleOtherLink() {
    setActiveButton("other");
    console.log("clicked other");
  }

  function handleProductLink() {
    setActiveButton("product");
    console.log("clicked product");
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAbout1(About);
    setName1(Name);
  };
  

  const handleUpdateInfo = () => {
    setOpen(false);
    const token = localStorage.getItem("token");

    const obj = {
      name: Name,
      about: About,
    };

    axios
      .post("http://192.168.0.108:8080/user/update-info", obj, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setNameValue(response.data.name);
        setAbout(response.data.about);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleproduct = (event) => {
    const file = event.target.files[0];
    setproductimage(file);

    // setFormData(formData)
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
          setSelectedImage(
            "http://192.168.0.108:8080/user/auth/get-user-image/" +
              response.data
          );
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

  const addproductlink = () => {
    const token = localStorage.getItem("token");

    const form = new FormData();
    form.append("productImage", productimage);
    form.append("productName", productname);
    form.append("productUrl", producturl);
    form.append("productVideo", productvideo);

    axios
      .post("http://192.168.0.108:8080/user/add-product", form, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);

        setproductdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        setNameValue(response.data.name);
        setListOfLinks(response.data.listOfLinks);
        setUsername(response.data.username);
        setListOfOtherLinks(response.data.listOfOtherLinks);
        setAbout(response.data.bio);
        setproductdata(response.data.listOfProducts);
        if (response.data.image) {
          setSelectedImage(
            "http://192.168.0.108:8080/user/auth/get-user-image/" +
              response.data.image
          );
        } else {
          setSelectedImage(img);
        }
      })
      .catch((error) => {
        console.log("error...");
      });
  };

  const handlesubmit = () => {
    navigate(`/${username}`);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const addLink = () => {
    if (name.trim() === "" || url.trim() === "") {
      alert("fill something");
    }
    const token = localStorage.getItem("token");

    const newLink = { name, url };
    setLinkss([...links, newLink]);
    setName("");
    setUrl("");

    axios
      .post(
        "http://192.168.0.108:8080/user/add-other-link",
        { name: name, url: url },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setListOfOtherLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLink = (name, link) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.108:8080/user/delete-link",
        { name: name, link: link },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setListOfLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteotherLink = (name, url) => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.108:8080/user/delete-other-link",
        { name: name, url: url },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setListOfOtherLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (product) => {
    const token = localStorage.getItem("token");
    axios
      .post("http://192.168.0.108:8080/user/delete-product", product, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response);
        setproductdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleanalytics = () => {
    navigate("/anaytics");
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

   const handleAddButtonClick = (evt) => {
    if (selectedSocialMedia && selectedLink) {
      const updatedSocialMedia = {
        name: selectedSocialMedia,
        icon: renderSocialMediaIcon(selectedSocialMedia),
        link: selectedLink,
      };
      setsocial((prevSocial) => [...prevSocial, updatedSocialMedia]);
      setSelectedSocialMedia("");
      setSelectedLink("");
      setValue("");
    }

    const token = localStorage.getItem("token");

    axios
      .post(
        "http://192.168.0.108:8080/user/add-link",
        { name: selectedSocialMedia, link: selectedLink },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setListOfLinks(response.data);
      })
      .catch((error) => {
        console.log(error);
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
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const signout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


 

    return(
        <> 

<div className="parent">
<div className="div1"> 
   <Navbar clickopen={handleClickOpen}  imagechange={handleImageChange}
   name={Name} about={About}  updateinfo={handleUpdateInfo}
    signout={signout} setNameValue={setNameValue} setAbout={setAbout} setAbout1={setAbout1} setName1={setName1}
    about1={about1} name1={name1} username={username}/>

<div className="navbar-bio"  >
       
      </div> 
</div>


<div className="div2"  >
    <div className=" justify-center mx-2 sm:ml-4 "   >
     <div 
          className="bg-[#eeeeee] rounded-[13px] justify-between items-center h-full mt-8 "
          
        >
          <div className="flex justify-center gap-2 p-8">
            <button
              type="button"
              className={` rounded-none h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                activeButton === "social"
                  ? " bg-blue-600 text-white"
                  : "bg-zinc-50"
              }`}
              onClick={handleSocialLink}
            >
              Social Links
            </button>

            <button
              type="button"
              className={` rounded-none  h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                activeButton === "other"
                  ? " bg-blue-600 text-white"
                  : "bg-zinc-50"
              }`}
              onClick={handleOtherLink}
            >
              Other Links
            </button>
            <button
              type="button"
              className={`rounded-none  h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2 ${
                activeButton === "product"
                  ? " bg-blue-600 text-white"
                  : "bg-zinc-50"
              }`}
              onClick={handleProductLink}
            >
              Product Links
            </button>
          </div>
          <div className="flex justify-center">
            <Stack spacing={4}>
              {activeButton === "social" && (
                <>
                  <div className="autocomplete" >
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        selectedSocialMedia={inputValue}
        onInputChange={(event, newInputValue) => {
          setSelectedSocialMedia(newInputValue);
        }}
        id="controllable-states-demo"
        options={data}
        
        renderInput={(params) => <TextField {...params} label="Social Media Name"   className="autocomplete-field"
        style={{marginTop: "4vh"}}
         value={data}
         
         />}
      />   </div>
                  <br />
                  <Input
                    className=" w-[240px] mx-14 sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Social Media Link"
                    onChange={(evt) => setSelectedLink(evt.target.value)}
                  />
                  <div className=' flex justify-center w-[40vh] sm:w-[35vw]'>
                  <button
                    className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg mt-2 mb-2" 
                    onClick={handleAddButtonClick}
                  >
                    ADD
                  </button>
                  </div>

                  <div className="links-container">
                    {listOfLinks.map((link, index) => (
                      <div key={index} className="links-div">
                        <div
                          className="label-div"
                          style={{ marginTop: "1vh", fontWeight: "600" }}
                        >
                          <label>{link.name}</label>
                          <br />
                          {/* <label>{link.link}</label> */}
                        </div>
                        <div
                          className="delete-div"
                          onClick={() => deleteLink(link.name, link.link)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeButton === "other" && (
                <>
                  <Input
                    className=" w-[240px] mx-14 sm:w-[35vw] h-14"
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Other Media Platform"
                    onChange={handleNameChange}
                  />
                  <br />
                  <Input
                    className=" w-[240px] mx-14 sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Other Link"
                    onChange={handleUrlChange}
                  />
                   <div className=' flex justify-center w-[40vh] sm:w-[35vw]'>
                  <button
                    className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg  mt-2 mb-2 "
                    onClick={addLink}
                  >
                    ADD
                  </button>
                  </div>

                  <div className="links-container">
                    {listOfOtherLinks.map((link, index) => (
                      <div key={index} className="links-div">
                        <div className="label-div">
                          <label
                            style={{
                              fontWeight: "600",
                              marginTop: "1vh",
                              fontFamily: "Roboto",
                              color: "#353535",
                            }}
                          >
                            {link.name}
                          </label>
                          <br />
                          {/* <label>{link.url}</label> */}
                        </div>
                        <div
                          className="delete-div"
                          onClick={() => deleteotherLink(link.name, link.url)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeButton === "product" && (
                <>
                  <Input
                    className=" w-[240px] mx-14 sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Product Platform"
                    onChange={(evt) =>
                      setproductname(evt.target.value)}
                  />
                  <br />
                  <Input
                    className="w-[240px] mx-14 sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Product URL"
                    o
                    onChange={(evt) => setproducturl(evt.target.value)}
                  /> <br />

                  <Input
                    className="w-[240px] mx-14 sm:w-[35vw] h-14 "
                    htmlSize={4}
                    variant="filled"
                    placeholder="   Product video url"
                    onChange={(evt) => setproductvideo(evt.target.value)}
                  /> <br />

                  <input type="file" name="productimage" id="" style={{marginLeft:'7.7vw'}} 
                   onChange={handleproduct}  />
                  <div className=' flex  justify-center w-[40vh] sm:w-[35vw]'>
                  <button
                    className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg  mt-2 mb-2"
                    onClick={addproductlink}
                  >
                    ADD
                  </button>
                  </div>

                  <div className="links-container">
                    {productdata.map((product, index) => (
                      <div key={index} className="links-div">
                        <div className="label-div">
                          <label
                            style={{
                              fontWeight: "600",
                              marginTop: "1vh",
                              fontFamily: "Roboto",
                              color: "#353535",
                            }}
                          >
                            {product.productName}
                          </label>
                          <br />
                          {/* <label>{link.url}</label> */}
                        </div>
                        <div
                          className="delete-div"
                          onClick={() => deleteProduct(product)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
          
            </Stack>

          </div>
       
          <br />
          <div className="flex justify-center"></div>
        </div>
        <div className=' ml-[33vw] mt-[2vh] block sm:hidden'>
        <Fab variant="extended">
            <RemoveRedEyeIcon/>
              Preview
      </Fab>
      </div>
     </div>
     
     <div className="div2-second">
         
         
         <PhoneUI name={Name} data={data} lstoflinks={listOfLinks} 
         lstofotherlinks={listOfOtherLinks}
         lstofproducts={productdata} username={username}
          selectedImage={selectedImage} handleImageChange={handleImageChange} setSelectedImage={setSelectedImage}
         />  </div>
        
       
     

     

</div>



</div>

      
     

          
        
        </>
    );
}
export default BioPage2;