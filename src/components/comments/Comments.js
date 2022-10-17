import React from "react";

const feedbacks = [
  {
    id: Math.random(),
    name: "Emna",
    comment: "c'est très interessant",
  },
  {
    id: Math.random(),
    name: "Aymen",
    comment: "Merci",
  },
  {
    id: Math.random(),
    name: "Sawssen",
    comment: "Trop contente de trouver ta formation REACT ! Un grand merci",
  },
  {
    id: Math.random(),
    name: "Amir",
    comment:
      "J'attaque React et je suis tout heureuse de réentendre cette voix qui m'a appris le HTML, le CSS et le JS. Que de souvenirs! Merci again !!!",
  },
  {
    id: Math.random(),
    name: "Ahmed",
    comment:
      "Toujours aussi bien foutu et pédagogique ! Mec t'es ma rockstar :-)",
  },
  {
    id: Math.random(),
    name: "Nizar",
    comment:
      "Ça tombe à pique, nous abordons React en ce moment même dans ma formation 😅",
  },
];

const Channel = {
  Imageurl: "https://jamaity.org/wp-content/uploads/2022/05/gomycode.jpg",
  ChannelName: "Gomycode",
  SubNumber: "100K",
};

const Comments = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <img
          style={{ height: "40px", borderRadius: "100%", margin: "0px 15px" }}
          src={Channel.Imageurl}
          alt="chanlogo"
        />
        <input
          style={{
            width: "800px",
            border: "none",
            outline: "none",
            borderBottom: "1px solid black",
          }}
          type="text"
          placeholder="Ajoutez un commentaire"
        />
      </div>
      {feedbacks.map((el) => (
        <div key={el.id} style={{ display: "flex", margin: "20px 15px" }}>
          <img
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="photo"
          />
          <div style={{ width: "700px", margin: "0px 20px" }}>
            <h4 style={{ fontSize: "13px", fontWeight: "bold" }}>{el.name}</h4>
            <p style={{ fontSize: "12px", marginTop: "-5px" }}> {el.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
