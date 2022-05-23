import { Link } from "react-router-dom"


const Home = () => {
  return (
    <>
      <section className="home-page">
        <div className="home-content">
          <div className='title'>
            <h1>Welcome to Seeded.</h1>
          </div>
          <div className='navigation'>
            <Link to={'/plants'}><h4 className="zoom">Plants</h4></Link>
            <Link to={'/glossary'}><h4 className="zoom">Glossary</h4></Link>
            <Link to={'/login'}><h4 className="zoom">Login/ register</h4></Link>
            <Link to={'/aboutus'}><h4 className="zoom">About Us</h4></Link>
          </div>


        </div>


      </section>

    </>
  )
}

export default Home