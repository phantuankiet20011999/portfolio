import * as React from 'react'
import './App.css'
import { Slide1 } from './components/Slide1'
import { Slide2 } from './components/Slide2'

const appSlides = [<Slide1 />, <Slide2 />]

function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const onNext = () => setCurrentSlide(currentSlide !== appSlides.length - 1 ? currentSlide + 1 : 0)
  const onPrev = () => setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : appSlides.length - 1)

  return (
    <div style={{ position: 'relative' }}>
      <div className="absolute-button" onClick={onPrev} style={{ position: 'absolute', top: '50%' }}>Prev</div>
      <div className="absolute-button" onClick={onNext} style={{ position: 'absolute', top: '50%', right: 0 }}>Next</div>
      {appSlides[currentSlide]}
    </div>
  );
}

export default App
