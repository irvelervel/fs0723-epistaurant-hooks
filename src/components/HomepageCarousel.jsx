import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import pastasciutte from '../data/menu.json'
import { useState } from 'react'
// pastasciutte è un array di oggetti

// per fornire HomepageCarousel di un oggetto di stato ("state object") è necessario
// convertirlo in un componente a CLASSE

const HomepageCarousel = () => {
  // qui posso mettere del JS!

  // ora che ho un componente a classe, posso creare uno state
  // con le sue proprietà e i suoi valori INIZIALI

  const [activePasta, setActivePasta] = useState(pastasciutte[0])
  // KISS -> keep it simple, stupid!

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Carousel
            onSlide={(slideIndex) => {
              // console.log('slide cambiata', slideIndex)
              // perfetto! mi serve per mantenere aggiornata la activePasta
              // dovrei cambiare il valore di activePasta con la slide attualmente mostrata
              // dovrei cambiare activePasta con pastasciutte[slideIndex]
              // l'oggetto state è READ-ONLY (sola lettura)
              setActivePasta(pastasciutte[slideIndex])
            }}
          >
            {pastasciutte.map((pasta) => {
              return (
                <Carousel.Item key={pasta.id}>
                  <img src={pasta.image} alt="pasta pic" />
                  <Carousel.Caption>
                    <h3>{pasta.name}</h3>
                    <p>{pasta.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={6} className="text-center">
          <ListGroup>
            {activePasta.comments.map((recensione) => {
              return (
                <ListGroup.Item key={recensione.id}>
                  {recensione.author} - {recensione.comment}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default HomepageCarousel
