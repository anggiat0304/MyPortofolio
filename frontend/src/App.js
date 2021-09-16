import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import MyPortofolio from './components/MyPortofolio';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <div>
            <Header/>
      </div>
     <div className="portofolio">
     <div>
            <MyPortofolio/>
      </div>
      <div>
            <Profile/>
      </div>
      <div>
            <Education/>
      </div>
      <div>
            <Projects/>
      </div>
      <div>
            <Skills/>
      </div>
      <div>
            <WorkExperience/>
      </div>
     </div>
    </div>
  );
}

export default App;
