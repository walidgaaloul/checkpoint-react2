import logo from './logo.svg';
import imageInSrc from './imageInSrc.jpg';
import './App.css';

function App() {
  return (
    <div className="App" style={{border:'solid 1px black',maxWidth:'100vw'}}>
       <h1 className="title red"  style={{color:'red'}}>Your name here</h1>
       <br/>
       <div>
       <img src={imageInSrc} alt="src" />
       <br/>
       <img src='./imageInPublic.jpg'alt='public' />
       </div>
       <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" />

</video>      
    </div>
  );
}

export default App;
