import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Main">
      <header id="home">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <nav id="nav-wrap" class="nav-wrap">
         <ul id="nav" class="nav">
            <li><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
	          <li><a class="smoothscroll" href="#resume">Resume</a></li>
            <li><a class="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a class="smoothscroll" href="#activities">Activities</a></li>
            <li><a class="smoothscroll" href="#stats">Statistics</a></li>
            <li><a class="smoothscroll" href="#contact">Contact</a></li>
         </ul>
         <hr/>
        </nav>
        <div class="row banner">
         <div class="banner-text">
            <h1 class="responsive-headline">Sean Sy</h1>
            <h3><span>Software Engineer</span></h3>
            <hr />
         </div>
      </div>
      </header>
      
    </div>
    
    
  );
}

export default App;
