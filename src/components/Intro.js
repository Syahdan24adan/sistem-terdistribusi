import { Col, Container, Row, Button } from 'react-bootstrap';
const Intro = () => {
    return (
        <div className='tengah'>
          <Container className="text-white d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className='title'>WELCOME TO CHINEMA XXI FILM</div>
                <div className='tombol mt-2 text-center'>
                    <Button variant='danger'>Tampilkan List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
export default Intro;