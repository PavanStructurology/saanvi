import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Team from './pages/Team';
// import { useEffect } from 'react';
// import { eight, eleventh, fifteenth, fifth, first, fourteenth, fourth, ninth, second, seventh, sixteenth, sixth, tenth, third, thirteen, twelfth } from '../public/js/util';
import useWebflowReinit from './components/useWebflowReinit';
import useWebflowOnLoad from './components/useWebflowReinit';
import Team_page from './pages/Team_page';
// import { useEffect } from 'react';
// import { webflow } from '../public/js/webflow';


function App() {
  // useEffect(()=>{
  //   first();
  //   second();
  //   third();
  //   fourth();
  //   fifth();
  //   sixth();
  //   seventh();
  //   eight();
  //   ninth();
  //   tenth();
  //   eleventh();
  //   twelfth();
  //   thirteen();
  //   fourteenth();
  //   fifteenth();
  //   sixteenth();
  // },[])

  // useEffect(()=>{
  //   weblfow
  // },[])

  useWebflowOnLoad(); 
  // useWebflowReinitOnRouteChange();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team_page" element={<Team_page/>}/>

    </Routes>
  );
}

export default App;
