import "./BioPage.css";
import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import 'rsuite/dist/rsuite.min.css';
import React from 'react';
import Button from '@mui/material/Button';
import logo from '../public/cahrger.jpg';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


const BioPage2=()=>{

    const [expanded, setExpanded] = React.useState(true);
    const [activeKey, setActiveKey] = React.useState('1');



    return(
        <>
        <div class="container-biopage2">


            <div className="first-biopage2" style={{ marginLeft: 0 }}>
                
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
            <Nav.Item eventKey="1"  icon={<DashboardIcon />}>
               Home
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              Templates
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              Payments
            </Nav.Item>
            
           
           
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
      </Sidenav>
    </div>
            </div>



            <div className="second-biopage2">


            <MDBCard  style={{height:'10vh' ,width:'10vw'}}>
      <MDBCardImage src={logo} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle style={{marginLeft:'2vw'}}>Charger</MDBCardTitle>
        {/* <MDBCardText>
          This is the product
        </MDBCardText> <br /> */}
        <Button variant="contained" style={{marginLeft:'1vw'}}>But Now</Button>
      </MDBCardBody>
    </MDBCard>



            </div>
            <div className="third-biopage3">
  <h1>dsadsad</h1>
            </div>
        </div>
        
        </>
    );
}
export default BioPage2;