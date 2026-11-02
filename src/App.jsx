import { useState } from 'react'
import './index.css';
import {GeogData} from './assets/GeogData'
import GeogQuestions from './Components/GeogQuestions';
import HistoryQuestions from './Components/HistoryQuestions';
import Header from './Components/Header';
import ScienceQuestions from './Components/ScienceQuestions';
import MathsQuestions from './Components/MathsQuestions';
import Footer from './Components/Footer'
import OurMission from './Components/OurMission';
import { SiTrueup } from 'react-icons/si';
import WelcomeMessage from './Components/WelcomeMessage';
import ContactUs from './Components/ContactUs';

function App() {
const [activeGeogSubject, setActiveGeogSubject] = useState(false)
const [activeHistorySubject, setActiveHistorySubject] = useState(false)
const [activeScienceSubject, setActiveScienceSubject] = useState(false)
const [activeMathsSubject, setActiveMathsSubject] = useState(false)
const [activeOurMission, setActiveOurMission] = useState(false)
const [activeWelcomeMessage, setActiveWelcomeMessage] = useState(true)
const [activeContactUs, setActiveContactUs] = useState(false)

function toggleActiveWelcomeMessage() {
  if(activeGeogSubject || activeHistorySubject || activeScienceSubject || activeMathsSubject || activeOurMission || activeContactUs) {
    setActiveWelcomeMessage(true)
  } else {
    setActiveWelcomeMessage(false)
  }
}

function toggleActiveHistorySubject() {setActiveHistorySubject(!activeHistorySubject)
  setActiveGeogSubject(false)
  setActiveScienceSubject(false)
  setActiveMathsSubject(false)
  setActiveOurMission(false)
  setActiveWelcomeMessage(false)
  toggleActiveWelcomeMessage()
} 

function toggleActiveGeogSubject() {setActiveGeogSubject(!activeGeogSubject)
  setActiveHistorySubject(false)
  setActiveScienceSubject(false)
  setActiveMathsSubject(false)
  setActiveOurMission(false)
  setActiveWelcomeMessage(false)
  toggleActiveWelcomeMessage()
}

function toggleActiveScienceSubject() {setActiveScienceSubject(!activeScienceSubject)
  setActiveGeogSubject(false)
  setActiveHistorySubject(false)
  setActiveMathsSubject(false)
  setActiveOurMission(false)
  setActiveWelcomeMessage(false)
  toggleActiveWelcomeMessage()
}

function toggleActiveMathsSubject() {setActiveMathsSubject(!activeMathsSubject)
  setActiveGeogSubject(false)
  setActiveHistorySubject(false)
  setActiveScienceSubject(false)
  setActiveOurMission(false)
  setActiveWelcomeMessage(false)
  toggleActiveWelcomeMessage()
}
  
function toggleOurMission() {setActiveOurMission(!activeOurMission)
}

function toggleContactUs() {setActiveContactUs(!activeContactUs)
  
}



  return (
    <>
      <Header handleGeogClick={toggleActiveGeogSubject} handleHistoryClick={toggleActiveHistorySubject} handleScienceClick={toggleActiveScienceSubject} handleMathsClick={toggleActiveMathsSubject} />
      {activeWelcomeMessage && <WelcomeMessage />}
      {activeGeogSubject && <GeogQuestions />}
      {activeHistorySubject &&  <HistoryQuestions />}
      {activeScienceSubject &&  <ScienceQuestions />}
      {activeMathsSubject &&  <MathsQuestions />}
      {activeOurMission && <OurMission handleCloseMission={toggleOurMission} />}
      {activeContactUs && <ContactUs handleCloseContactUs={toggleContactUs} />}
      <Footer handleOurMissionClick={toggleOurMission} handleContactUsClick={toggleContactUs} />
    </> 
  )
}

export default App
