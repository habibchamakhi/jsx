
import './App.css';
import art from './koora.png';


function App() {
  return (
    <><div style={{ border: "solid 1 black", maxWidth: "100vw" }}>np
   
         <h1 className="title red">habib chamakhi</h1>
   
         <br />
   
         <img src={art} alt="koora" />
   
         <br />
   
         <img src="/music.jpg" alt="music" />
   
       </div><video width={320} height={240} controls>
           <source src="./myVideo.mp4" type="video/mp4" />
         </video></>
   
   
  )}

export default App;
