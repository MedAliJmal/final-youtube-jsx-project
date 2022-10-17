import "./App.css";
import "./components/navbar/NavBar";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import VideoList from "./components/videoList/VideoList";
import Profile from "./components/profile/Profile";
import Description from "./components/description/Description";
import Comments from "./components/comments/Comments";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="videos-container">
        <div id="MainBlock">
          <VideoPlayer />
          <Profile />
          <Description />
          <Comments />
        </div>
        <VideoList />
      </div>
    </div>
  );
}

export default App;
