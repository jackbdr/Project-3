import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

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
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="plantCollection" title="Number of plants in collection">
    <p>4</p>
  </Tab>
  <Tab eventKey="profile" title="Profile">
    
  </Tab>
</Tabs>
            
            
            <h3>Number of Plants in Collection:</h3>
            <p>3</p>
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
      </Container>
    </>
  )
}

export default OwnProfile