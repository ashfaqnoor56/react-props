import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import Images from './components/Images';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


let banner = "https://ashfaqnoor56.github.io/bootstrap1/assets/banner%20boy.svg"
let image1 = "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png"
let image2 = "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png"
let image3 = "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png"
let image4 = "https://ashfaqnoor56.github.io/bootstrap1/assets/pf4.png"
let image5 = "https://ashfaqnoor56.github.io/bootstrap1/assets/pf5.png"
let image6 = "https://ashfaqnoor56.github.io/bootstrap1/assets/pf6.png"

function App() {
  return (
    <div>
      <div className='one'>
        <Images style="banner" link={banner} />
        <Text style="text1" text="START BOOTSTRAP" />
        <Text style="text1" text="_________ * __________" />
        <Text style="text2" text="Graphic Artist-Web Designer-Illustrator" />
      </div>

      <div>
        <Text style="text3" text="PORTFOLIO" />
        <Text style="text4" text="_________ * __________" />
          
      </div>
      <Container>
      <Row>
        <Col lg={4}>
      <Images style="port" link={image1} />
      </Col>
      <Col lg={4}>
      <Images style="port" link={image2} />
      </Col>
      <Col lg={4}>
      <Images style="port" link={image3} />
      </Col>
     
      </Row>

      <Row>
        <Col lg={4}>
      <Images style="port" link={image4} />
      </Col>
      <Col lg={4}>
      <Images style="port" link={image5} />
      </Col>
      <Col lg={4}>
      <Images style="port" link={image6} />
      </Col>
     
      </Row>
      </Container>
      <div>
        
      </div>
    </div>
  );
}

export default App;
