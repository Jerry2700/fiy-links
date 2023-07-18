import React, { useState,useEffect } from 'react';
import "./Main.css"; 
import { TextField, Button } from "@mui/material";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaGithub, FaReddit, FaTwitch, FaWeixin, FaYoutube, FaTumblr, FaMedium, FaFlickr, FaLinkedin, FaTiktok, FaPinterest } from "react-icons/fa";
import axios from 'axios';
import { FaBars  } from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import {MdPayments} from "react-icons/md";
import {BiLogOut} from "react-icons/bi";
import { CSSTransition } from 'react-transition-group';
import './navbar.css';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';








const Maindiv = () => {
  const [Name, setNameValue] = useState("");
  const [username, setUsername] = useState("");
  const [Social, setsocial] = useState([]);
  const [color, setColor] = useState('white');
  const [About, setAbout] = useState("");
  const [val, setval] = useState('');
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinkss] = useState([]);
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState('');
  const [selectedLink, setSelectedLink] = useState('');
  const [listOfLinks,setListOfLinks] = useState([]);
  const [listOfOtherLinks, setListOfOtherLinks] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [name1, setName1] = useState('');
  const [about1,setAbout1] = useState('');


  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');

 

  const data = ['Facebook', 'Instagram', 'Whatsapp', 'Telegram', 'Github', 'Reddit', 'Twitch', 'WeChat', 'YouTube', 'Tumblr', 'Medium', 'Flickr', 'LinkedIn', 'TikTok', 'Pinterest'];


  

  const handleClickOpen = () => {
    setOpen(true);
    setAbout1(About);
    setName1(Name);
  };
  const handleClose = () => {
    setAbout(about1);
    setNameValue(name1);
    setOpen(false);

  }

  const handleUpdateInfo = () => {
    setOpen(false);
    const token = localStorage.getItem("token");
    
    
    const obj = {
      
      "name"  : Name,
      "about" : About
    }

      axios.post("http://192.168.0.105:8080/user/update-info",obj, {
      headers: {
           "content-type": "application/json",
            "Authorization": "Bearer " + token,
      }
    })
    .then( (response) => {
       setNameValue(response.data.name);
        setAbout(response.data.about);
        console.log(response);

      }
    )
    .catch((error) => {
      console.log(error);
    });

      
  };



  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };
  

   
  useEffect(() => {
  
    if(username==="") {
      callGetUserDetails();
    }
    
  }, []); 

  const callGetUserDetails = () => {
    const token = localStorage.getItem("token");
    
    

    axios.get("http://192.168.0.105:8080/user/get-user-info",{
      headers: {
           "content-type": "application/json",
            "Authorization": "Bearer " + token,
      }
    })
    .then( (response) => {
       setNameValue(response.data.name);
       setListOfLinks(response.data.listOfLinks);
       setUsername(response.data.username);
        setListOfOtherLinks(response.data.listOfOtherLinks);
        setAbout(response.data.bio);

      }
    )
    .catch((error) => {
      console.log('error...')
    });
  }


  
 
  
  




    const handlesubmit = () => {
  
    localStorage.setItem('Name', Name);
    localStorage.setItem('About', About);
    localStorage.setItem('color', color);
    localStorage.setItem('Social', JSON.stringify(Social));
    localStorage.setItem('OtherLinks', JSON.stringify(links));
    const token = localStorage.getItem("token");


    const obj = {
      "name"  : Name,
      "about" : About,
      "listOfLinks" : Social,
      "listOfOtherLinks" : links
    }


    console.log(obj);
     
    axios.post("http://192.168.0.105:8080/user/save-user-info",obj, {
      headers: {
           "content-type": "application/json",
            "Authorization": "Bearer " + token,
      }
    })
    .then( (response) => {
        console.log(response.status);
        console.log(response.data);
      }
    )
    .catch((error) => {
      console.log('error...')
    });

  };





  const handleNameChange = (event) => {
    setName(event.target.value);
    
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const addLink = () => {
    if (name.trim() === '' || url.trim() === '') {
      return;
    }
    const token = localStorage.getItem("token");


    const newLink = { name, url };
    setLinkss([...links, newLink]);
    setName('');
    setUrl('');
    

    axios
    .post(
      "http://192.168.0.105:8080/user/add-other-link",
      { "name":name,
        "url" : url  },
      {
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
         
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


    axios.post("http://192.168.0.105:8080/user/delete-link",
    {"name":name,"link":link},
    {
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
       
      },
    }
    )
    .then((response) => {
      console.log(response);
      setListOfLinks(response.data)
    })
    .catch((error) =>{  
      console.log(error); 
    });
  }



  const deleteotherLink=(name,url)=>{
    const token = localStorage.getItem("token");


    axios.post("http://192.168.0.105:8080/user/delete-other-link",
    {"name":name,"url":url},
    {
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
       
      },
    }
    )
    .then((response) => {
      console.log(response);
      setListOfOtherLinks(response.data)
    })
    .catch((error) =>{
      console.log(error); 
    });

  }



  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinkss(updatedLinks);
  };




  const changeColor = (newColor) => {
    setColor(newColor);
  };

  





  const handleSocialMediaChange = (e) => {
    setSelectedSocialMedia(e.target.value);
  };
 


  const handleAddButtonClick = (evt) => {
    if (selectedSocialMedia && selectedLink) {
      const updatedSocialMedia = {
        name: selectedSocialMedia,
        icon: renderSocialMediaIcon(selectedSocialMedia),
        link: selectedLink
      };
      setsocial((prevSocial) => [...prevSocial, updatedSocialMedia]);
      setSelectedSocialMedia('');
      setSelectedLink('');
     
    }
    
    const token = localStorage.getItem("token");


    axios
    .post(
      "http://192.168.0.105:8080/user/add-link",
      { "name":selectedSocialMedia,
        "link" : selectedLink  },
      {
        headers: {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
         
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
      case 'Facebook':
        return <FaFacebook />;
      case 'Instagram':
        return <FaInstagram />;
      case 'Whatsapp':
        return <FaWhatsapp />;
      case 'Telegram':
        return <FaTelegram />;
      case 'Github':
        return <FaGithub />;
      case 'Reddit':
        return <FaReddit />;
      case 'Twitch':
        return <FaTwitch />;
      case 'WeChat':
        return <FaWeixin />;
      case 'YouTube':
        return <FaYoutube />;
      case 'Tumblr':
        return <FaTumblr />;
      case 'Medium':
        return <FaMedium />;
      case 'Flickr':
        return <FaFlickr />;
      case 'LinkedIn':
        return <FaLinkedin />;
      case 'TikTok':
        return <FaTiktok />;
      case 'Pinterest':
        return <FaPinterest />;
      default:
        return null;
    }
    
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      
 <div className="main-container" >
      <div>

     
      <div style={{ width: 240 }}>
      <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      />
      <hr />
      <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Menu placement="rightStart" eventKey="3" title="Advanced" icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu
              placement="rightStart"
              eventKey="4"
              title="Settings"
              icon={<GearCircleIcon />}
            >
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
    
      </div>
       
       
       



        <div className="second-box">
        <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent> 
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField autoFocus margin="dense"id="name"label="Name"type="text" defaultValue={Name} fullWidth variant="standard"  onChange={(evt) => setNameValue(evt.target.value)}/>
           <br /> <br />

           

<TextField autoFocus margin="dense"  id="name" label="About" 
defaultValue={About} type="text"fullWidth variant="standard"  onChange={(evt) =>
                              setAbout(evt.target.value)} />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdateInfo}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>

         
        

          <div>
              <div className="labels">
                <div className="Profile-box">
                  <h1 id="pi">Social Media Information</h1>
                  <br />
                  <div className="main">
                  <input
    className="search-box"
    list="data"
    onChange={handleSocialMediaChange}
    placeholder="Social Media Name"
    value={val}
  />

  <datalist id="data">
    {data.map((op) => (
      <option key={op}>{op}</option>
    ))}
  </datalist>


                  </div>
                  <br />
                 <TextField id="outlined-basic" label="Profile Url"style={{ borderColor: '#FCA311', width: '80%', fontSize: 42, borderRadius: 10 }}
                            variant="outlined"
                           value={selectedLink}
                             onChange={(evt) =>
                              setSelectedLink(evt.target.value)}
/>
                  <br />

                  <Button
                   variant="contained"
  color="success"
  style={{ backgroundColor: '#00B4D8', width: '80%', marginBottom: 20, borderRadius: 10 }}
  onClick={handleAddButtonClick}
>
  Add
</Button>


<div className='links-container'>
    {listOfLinks.map((link,index) =>(
      <div key={index} className='links-div' >
        <div className='label-div'><label><b> {link.name} </b></label>
        <br />
        <label>{link.link}</label>
        </div>
        <div className='delete-div' onClick={()=>deleteLink(link.name,link.link)} >
          Delete
        </div>
      </div>

    ))}
</div>
                  
                    
                </div>
              </div>
           
          </div>



          <div>
            
           
              <div className="labels">
                <div className="Profile-box">
                  <h1 id="pi">Others Links</h1>
                  <br />
                  <TextField id="outlined-basic" label="Label" value={name} name='labelname' style={{ borderColor: '#FCA311', width: '100%', fontSize: 42, borderRadius: 10 }} variant="outlined" onChange={handleNameChange}/>

                  <br />
                  <TextField id="outlined-basic" label="Links"  value={url} style={{ borderColor: '#FCA311', width: '80%', fontSize: 42, borderRadius: 10 }} variant="outlined" onChange={handleUrlChange} />
                  <br />
                   <br />
                  <Button variant="contained" color="success" style={{ backgroundColor: '#00B4D8', width: '80%', marginBottom: 20, borderRadius: 10 }} onClick={addLink}>
                    Add Link
                  </Button>
                  

      <div className='links-container'>
    {listOfOtherLinks.map((link,index) =>(
      <div key={index} className='links-div' >
        <div className='label-div'><label><b> {link.name} </b></label>
        <br />
        <label>{link.url}</label>
        </div>
        <div className='delete-div' onClick={()=>deleteotherLink(link.name,link.url)} >
          Delete
        </div>
      </div>

    ))}
</div>
                </div>
              </div>
          

          </div>
         


         <div>
          
         </div>
 




        


          



 <br />

          <div>
            
              <div className="button-container">
                <button className="btn-1" onClick={() => changeColor('red')}>Red</button>
                <button className="btn-1" onClick={() => changeColor('green')}>Green</button>
                <button className="btn-1" onClick={() => changeColor('blue')}>Blue</button>
                <button className="btn-1" onClick={() => changeColor('yellow')}>Yellow</button>
                <button className="btn-1" onClick={() => changeColor('purple')}>Purple</button>
                <button className="btn-1" onClick={() => changeColor('orange')}>Orange</button>
                <button className="btn-1" onClick={() => changeColor('White')}>white</button>
                <button className="btn-1" onClick={() => changeColor('grey')}>Grey</button>
              </div>
            
          </div> <br />
          <Button variant="contained" color="success" style={{ backgroundColor: '#00B4D8', width: '80%', marginBottom: 20, borderRadius: 10 }} onClick={handlesubmit}>
                        Submit
                  </Button>
        </div>
        




        <div className="third-box"> 

           <h1 style={{color:'white'}} > </h1>
          
          <h1 className="Heading" style={{ backgroundColor: color}}>
            

            <div className='top-image'>

        
                 
              
                <span className="Name" > <b> {Name} </b> </span>
              
           </div>



          
            
            
           

    
           <div className="social-container">
  {listOfLinks.map((link) =>(
    <a  key={link.index} target="_blank" href={link.link}>{renderSocialMediaIcon(link.name)}</a>
  ))}
</div>





            <hr />

<span className="about-container">
  <em>{About} </em></span>  <hr />

  

 
            <div className='card-div'>
        {listOfOtherLinks.map((link, index) => (
          <div  key={index}>
            <div className='card-bar'>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              
              {link.name}
            </a></div>
                      
            
          </div>
        ))}
      </div>

     

      

          


          </h1>


        </div>
      </div>
    </>
  );
}


export default Maindiv;
