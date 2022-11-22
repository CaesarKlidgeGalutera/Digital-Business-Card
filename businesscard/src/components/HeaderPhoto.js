import profilePic from "../Images/profilePic.jpg";
import "./HeaderPhoto.css";

function HeaderPhoto() {
  return (
    <div className="picture-container">
      <img className="header-profile" src={profilePic} />
    </div>
  );
}

export default HeaderPhoto;
