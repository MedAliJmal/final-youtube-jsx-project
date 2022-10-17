import React from "react";
import "./Profile.css";
import { Button } from "react-bootstrap";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoCutOutline } from "react-icons/io5";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Channel = {
  Imageurl: "https://jamaity.org/wp-content/uploads/2022/05/gomycode.jpg",
  ChannelName: "Gomycode",
  SubNumber: "100K",
};

const Profile = () => {
  return (
    <div className="profcont">
      <img src={Channel.Imageurl} alt="logo" />
      <div className="profdetails">
        <h5>{Channel.ChannelName}</h5>
        <p>{Channel.SubNumber}</p>
      </div>
      <Button variant="danger">S'ABONNER</Button>
      <div className="barre-outils">
        <AiOutlineLike
          style={{ width: "30px", height: "30px", margin: "0px 10px" }}
        />
        <h4>J'Aime</h4>
        <AiOutlineDislike
          style={{ width: "30px", height: "30px", margin: "0px 10px" }}
        />
        <h4>J'aime pas</h4>
        <RiShareForwardLine
          style={{ width: "30px", height: "30px", margin: "0px 10px" }}
        />
        <h4>Partager</h4>
        <IoCutOutline
          style={{ width: "30px", height: "30px", margin: "0px 10px" }}
        />
        <h4>Extrait</h4>
        <BiDotsHorizontalRounded
          style={{ width: "30px", height: "30px", margin: "0px 15px" }}
        />
      </div>
    </div>
  );
};

export default Profile;
