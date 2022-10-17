import React from "react";
import "./VideoList.css";

const videos = [
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/V8G0ILBE-Ok",
    title: "React : Chapitre 2 Nos premiers pas avec React  ",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/SFFZ0hpIk5Q",
    title: "React : Chapitre 3 La syntaxe JSX ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/dSarn49JYQo",
    title: "React : Chapitre 4 Notre premier composant",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/AkEtv7J4kA8",
    title: "React : Chapitre 5 Les évènements",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/V8G0ILBE-Ok",
    title: "React : Chapitre 2 Nos premiers pas avec React  ",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/SFFZ0hpIk5Q",
    title: "React : Chapitre 3 La syntaxe JSX ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/dSarn49JYQo",
    title: "React : Chapitre 4 Notre premier composant",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/AkEtv7J4kA8",
    title: "React : Chapitre 5 Les évènements",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/V8G0ILBE-Ok",
    title: "React : Chapitre 2 Nos premiers pas avec React  ",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/SFFZ0hpIk5Q",
    title: "React : Chapitre 3 La syntaxe JSX ",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/dSarn49JYQo",
    title: "React : Chapitre 4 Notre premier composant",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/AkEtv7J4kA8",
    title: "React : Chapitre 5 Les évènements",
  },
  {
    id: Math.random(),
    vid: "https://www.youtube.com/embed/SMgQlTSoXf0",
    title: "React : Chapitre 1 Introduction",
  },
  {
    id: Math.random(),

    vid: "https://www.youtube.com/embed/V8G0ILBE-Ok",
    title: "React : Chapitre 2 Nos premiers pas avec React  ",
  },
];

const VideoList = () => {
  return (
    <div className="videoscontainer">
      {videos.map((el) => (
        <div className="littlevid" key={el.id}>
          <iframe src={el.vid} frameborder="0"></iframe>
          <h4>{el.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
