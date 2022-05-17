import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import Carousel from 'react-multi-carousel';

const OwnProfile = () => {

  return (
    <>
      <Container id='profilePage' className='mt-4'>
      <h1>Plantman 87</h1>
        <Row>
          <Col id='profileimg'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" alt="" />
          <p>Date Joined: 16/05/2022</p>
          </Col>
          <Col id='profileinfo'>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Plants in Collection<span><Badge>3</Badge></span></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                Big Plant
                  </li>
                  <li>
                Small Plant
                  </li>
                  <li>
                Medium Plant
                  </li>
                </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Plants Added<span><Badge>1</Badge></span></Accordion.Header>
                <Accordion.Body>
                  Big Plant
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Ratings<span><Badge>0</Badge></span></Accordion.Header>
                <Accordion.Body>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col id='following'>
          <div>
          <h2>People you follow</h2>
            <ul>
              <li>Jack</li>
              <li>Robert</li>
              <li>James</li>
            </ul>
          </div>
          </Col>
        </Row>
        <h2>Comments</h2>
        <div id='added_plants'>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="bigPlant" title="Big Plant">
            I really like the big plant. It's a lot bigger than I thought it would be!
            </Tab>
            <Tab eventKey="cheesePlant" title="Cheese Plant">
              Kinda does smell like cheese!
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  )
}

export default OwnProfile