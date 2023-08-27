import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <>
    <div className='home'>
      <h1> Hi, My name is Gopinaresh </h1>
      <h5> A software developer with a passion for <br></br>learning and creating</h5>
        <a href='resume.pdf' download='Gopinaresh resume'>
        <Button  variant="outline-secondary">Resume Download</Button>
        </a>
    </div>
    </>
  )
}
 export default Home