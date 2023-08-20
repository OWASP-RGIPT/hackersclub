import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro/Intro';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Rewind from './pages/Rewind';
import About from './pages/About';
import Perks from './pages/Perks';
import Event from './pages/Event';
import Collab from './pages/collab';
import Form from './Registeration-Typeform/Form';
import { Provider } from 'react-redux';
import store from './Registeration-Typeform/store/index';
import Footer from './components/Footer';
import { BleepsProvider } from '@arwes/react-bleeps';
import TC from './pages/T&C';

const bleepsSettings = {
    // Shared global audio settings.
    master: {
      volume: 1.25
    },
    bleeps: {
      // A transition bleep sound to play when the user enters the app.
      intro: {
        sources: [
          { src: 'https://arwes.dev/assets/sounds/intro.mp3', type: 'audio/mpeg' }
        ]
      },
      // An interactive bleep sound to play when user clicks.
      click: {
        sources: [
          { src: 'https://arwes.dev/assets/sounds/click.mp3', type: 'audio/mpeg' }
        ]
      }
    }
  };



  


function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <BrowserRouter>
            <BleepsProvider {...bleepsSettings}>
           
                <Navbar />
              
                <Routes>
                    <Route
                        index
                        element={
                            <Home showIntro={showIntro} />
                        }
                    />
                    <Route exact path="contactus" element={<ContactUs />} />
                    <Route exact path="rewind" element={<Rewind />} />
                    <Route exact path="about" element={<About />} />
                    <Route exact path="perks" element={<Perks />} />
                    <Route exact path="events" element={<Event />} />
                    <Route exact path="collab" element={<Collab />} />
                    <Route exact path="t&c" element={<TC/>}/>
                 
                    
                    <Route exact path="form" element={
                        <Provider store={store}>
                            <Form />
                        </Provider>
                    }/>
                      
                </Routes>
                <Footer/>
                </BleepsProvider>
              
            </BrowserRouter>
        </>
    );
}


export default App;
