import Navbar from "./Navbar";
import { Box } from "./PhoneUi/PhoneUI";
import Card from "./form/form";

import "./background.css";

export default function MainForm() {
  return (
    <div id="main-page">
      <nav className=" fixed w-full">
        <Navbar />
      </nav>

      <div className="forms"
      >
        <div className="form-card">
          <Card />
        </div>
        <div>
          <Box />
        </div>
      </div>
    </div>
  );
}
