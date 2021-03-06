import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";

export default function carousel() {
    return (
        <Carousel>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-150"
                    src={"/Images/carousel/canicas.jpeg"}
                    alt="First slide"
                    width="100%"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-250"
                    src={"/Images/carousel/canicas.jpeg"}
                    alt="Second slide"
                    width="100%"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-300"
                    src={"/Images/carousel/canicas.jpeg"}
                    alt="Third slide"
                    width="100%"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};