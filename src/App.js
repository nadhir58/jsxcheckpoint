
import './App.css';
import photo from "./imageInSrc.jpg"
import "./style.css"
 function Home() {
  return (
    <div>
      <img src={photo} alt="BigCo Inc. logo"/>
    </div>
  );
}


function App() {
  return (
    <div className="App">
       <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Nadhir Ben Amor</h1>
    <br />
    
  </div>
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
  <Home/>
     
    </div>
  );
}

export default App;
