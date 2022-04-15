//import logo from './logo.svg';
import './App.css';
import image from './imageInSrc.jpg';
import './style.css'

function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="titlered">Anoir Taktak</h1>
          <br />
          <img src={image} alt="logo" />
          <br />
          <img src={process.env.PUBLIC_URL + '/imageInPublic.jpg' } alt="logo"/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
