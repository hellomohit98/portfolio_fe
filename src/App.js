import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import axios from "axios";

function App() {

  const [portfolioData, setPortfolioData] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPortfolioData()
  }, [])

  const getPortfolioData = async() => {
    setIsLoading(() => true)
    try{
      let res = await axios.get('http://35.173.132.135:3000/api/portfolio')
      if(res.status == 200) {
        setPortfolioData(() => res.data)
      } else {

      }
      console.log('suss',res)
    } catch(error) {
      console.log('error',error)
    }
    setIsLoading(() => false)
  }

  return (
    <>
    {isLoading ? (
      <></>
    ) : (
      <Container>
        <Header portfolioData={portfolioData} />
        <About portfolioData={portfolioData} />
        <Skills portfolioData={portfolioData} />
        <Experience portfolioData={portfolioData} />
        <Projects portfolioData={portfolioData} />
        <Education portfolioData={portfolioData} />
      </Container>
    )}
    
    </>
    
  );
}

export default App;
