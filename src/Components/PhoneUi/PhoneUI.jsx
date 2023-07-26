import { Card } from "../../components/PhoneUi/components/card/card";
import "../PhoneUi/style.css";


export const Box = () => {
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
                  <img
                    className="PFP"
                    alt="Pfp"
                    src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/pfp-1.svg"
                  />
                  <div className="bio">
                    <div className="title">
                      <h1 className="h-1">AstroFunk</h1>
                      <img
                        className="badge-user-normal"
                        alt="Badge user normal"
                        src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/badge---user---normal-vision---on-2@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="socials"
                    alt="Socials"
                    src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/socials-1.svg"
                  />
                </div>
                <div className="section">
                  <div className="product-links">Product Links</div>
                  <div className="link">
                    <div className="text-wrapper-2 items-center"><input className=" bg-transparent w-full border-none" placeholder="SEARCH ANYTHING..."></input></div>
                    <img
                      className="thumbnail"
                      alt="Thumbnail"
                      src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/thumbnail-8.svg"
                    />
                  </div>
                </div>
                <div className="links-wrapper">
                  <div className="links">
                    <div className="link-2">
                      <div className="text-wrapper-2">Latest YouTube Video</div>
                      <img
                        className="thumbnail-2"
                        alt="Thumbnail"
                        src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/thumbnail-3.svg"
                      />
                    </div>
                    <div className="link-2">
                      <div className="text-wrapper-2">Book Me on Cameo</div>
                      <div className="add-wrapper">
                        <div className="add">
                          <div className="text-wrapper-3">🤳</div>
                        </div>
                      </div>
                    </div>
                    <div className="link-2">
                      <div className="text-wrapper-2">Latest YouTube Video</div>
                      <img
                        className="thumbnail-3"
                        alt="Thumbnail"
                        src="https://generation-sessions.s3.amazonaws.com/342598c3d7d2a185d6318fb5c89fed72/img/thumbnail-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-4">Bio</div>
              </div>
            </div>
            <Card className="card-variant5" overlapGroupClassName="card-instance" />
          </div>
        
      
    </div>
  );
};
