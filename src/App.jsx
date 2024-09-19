import cheese1 from './images/cheese1.jpg'
import cheese2 from './images/cheese2.jpg'
import cheese3 from './images/cheese3.jpg'
import cheese4 from './images/cheese4.jpg'
import cheese5 from './images/cheese5.jpg'
import ImageSlider from './components/ImageSlider.jsx'
import './css/variables.css'


const IMAGES = [cheese1, cheese2, cheese3, cheese4, cheese5]

function App() {
  return (
    <ImageSlider imageUrls={IMAGES} />
  )
}

export default App