import {Carousel} from 'react-bootstrap' ;
import imge from './image/img1.jpeg';
import img2 from './image/img2.jpeg';
import img3 from './image/img3.jpg'

function  carou () {
     return (
<Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src= {imge}
      alt="First slide"
    />
    <Carousel.Caption>
      <p class="size-fon" style = {{color: 'black', fontSize: '1.2em', fontWeight: 'bold' }}> Le dessus de la chaussure est en microfibre et cuir.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {img2}
      alt="Second slide"
      width="10%" 
      
    />

    <Carousel.Caption>
      <p class=" size-font" style = {{color: 'black', fontSize: '1.2em', fontWeight: 'bold' }}> Un contrefort postérieur d'une bonne tenue assure une bonne stabilité de l'arrière-pied.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p class="size-font" style = {{color: 'black', fontSize: '1.2em', fontWeight: 'bold' }} >Largeur du talon permettant une bonne stabilité à la marche  </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
     )
}
export default carou