import "./Apperance1.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Navbar from "../Navbar";
import Button from "@mui/material/Button";
import { useState } from "react";
//import axios from "axios";

const Page_1 = () => {
  const [template, setTemplate] = useState(0);
  const [backgnd, setbackgnd] = useState(0);
  const [outline, setOutline] = useState(0);
  const [forntColor, setForntColor] = useState(0);

  const textstyle = [
    { label: "sans-serif", Number: 1 },
    { label: "The Godfather", Number: 2 },
    { label: "The Godfather: Part II", Number: 3 },
    { label: "The Dark Knight", Number: 4 },
    { label: "12 Angry Men", Number: 5 },
    { label: "Schindler's List", Number: 6 },
    { label: "Pulp Fiction", Number: 7 },
  ];
  const handleClickSave = () => {
    const data = {
      template: template,
      background: backgnd,
      outline: outline,
      fontColor: forntColor,
      fontStyle: textstyle.Number,
    };

    // axios.post('', data)
    //   .then(response => {

    //   })
    //   .catch(error => {

    //   });
    console.log(data);
  };

  return (
    <>
      <div className="containerappear">
        <div className="nav">
          <Navbar />
        </div>

        <br />

        <div className="parent">
          <div className="form">
            <div className="temp-container">
              <h2>Templates</h2>

              <div className="template">
                <div className="temp">
                  <div href="#">
                    
                    <img
                    src="/Themes/t1.png"
                      alt=""
                      className="imgt"
                      onClick={() => {
                        setTemplate(1);
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
                        setTemplate(2);
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
                        setTemplate(3);
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
                        setTemplate(4);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />

            <div className="bg">
              <h2>Background</h2>
              <div className="bg-options">
                <div
                  className="bgc"
                  style={{ backgroundColor: "#ffb703" }}
                  onClick={() => {
                    setbackgnd(1);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#588157" }}
                  onClick={() => {
                    setbackgnd(2);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#8d99ae" }}
                  onClick={() => {
                    setbackgnd(3);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#669bbc" }}
                  onClick={() => {
                    setbackgnd(4);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#708d81" }}
                  onClick={() => {
                    setbackgnd(5);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#e07a5f" }}
                  onClick={() => {
                    setbackgnd(6);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#57cc99" }}
                  onClick={() => {
                    setbackgnd(7);
                  }}
                ></div>
                <div
                  className="bgc"
                  style={{ backgroundColor: "#a5a58d" }}
                  onClick={() => {
                    setbackgnd(8);
                  }}
                ></div>
              </div>
            </div>

            <br />

            <div className="shape-container">
              <h2>Border</h2>
              <div className="shape">
                <div className="head">
                  <p>Outline</p>
                </div>
                <div className="opt">
                  <div
                    className="opt1"
                    onClick={() => {
                      setOutline(1);
                    }}
                  ></div>
                  <div
                    className="opt2"
                    onClick={() => {
                      setOutline(2);
                    }}
                  ></div>
                  <div
                    className="opt3"
                    onClick={() => {
                      setOutline(3);
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
                      setOutline(4);
                    }}
                  ></div>
                  <div
                    className="opt2 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline(5);
                    }}
                  ></div>
                  <div
                    className="opt3 softshadow"
                    id="ss"
                    onClick={() => {
                      setOutline(6);
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
                    id="ds"
                    onClick={() => {
                      setOutline(7);
                    }}
                  ></div>
                  <div
                    className="opt2 darkshadow"
                    id="ds"
                    onClick={() => {
                      setOutline(8);
                    }}
                  ></div>
                  <div
                    className="opt3 darkshadow"
                    id="ds"
                    onClick={() => {
                      setOutline(9);
                    }}
                  ></div>
                </div>

                <br />

                <div></div>
              </div>
            </div>

            <br />

            <div className="font-container">
              <h2>Fonts</h2>

              <div className="font">
                <div className="font-option">
                  <p>Font Style</p>

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={textstyle}
                    sx={{ width: "30vw" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Fonts" />
                    )}
                  />
                </div>

                <br />

                <div className="font-option">
                  <p>Font Color</p>
                  <div className="ofont">
                    <div
                      className="color-option"
                      onClick={() => {
                        setForntColor(1);
                      }}
                    ></div>
                    <div
                      className="color-option"
                      onClick={() => {
                        setForntColor(2);
                      }}
                    ></div>
                    <div
                      className="color-option"
                      onClick={() => {
                        setForntColor(3);
                      }}
                    ></div>
                    <div
                      className="color-option"
                      onClick={() => {
                        setForntColor(4);
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
            </div>
          </div>

          <div className="phone">
            <div className="pphone">
              <a href="#">
                {" "}
                <img
                  src="./src/3.jpg"
                  alt=""
                  width="130px"
                  height="200px"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_1;
