import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'

function App() {
  return (
    <div className="App">
      <body>
        <Container>
          <Row>
            <Col sm={12} md={4} className="col_card">
              TEST
            </Col>
            <Col sm={12} md={8} className="col_data">
              TEST
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
