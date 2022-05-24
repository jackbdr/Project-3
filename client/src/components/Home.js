import { Link } from "react-router-dom"
import { isUserAuth, getUserToken } from "./helpers/Auth"


const Home = () => {
  return (
    <>
      <section className="home-page">
        <div className="home-content">
          <div className='title'>
            <h1>Welcome to Seeded.</h1>
          </div>
          <div className='sub-title'>
            <h3>Seeded is a community of plant lovers sharing tips and tricks to keep your plants in good shape. Looking to learn more about plants? Come on in. Already know your stuff? Dive in and share your knowledge.</h3>
          </div>
          <div className='navigation'>
            <Link to={'/plants'}><h4 className="zoom">Plants</h4></Link>
            <Link to={'/glossary'}><h4 className="zoom">Glossary</h4></Link>
            {isUserAuth() ?
              <Link to={`/profile/${getUserToken()}`}><h4 className='zoom'>Profile</h4></Link>
              :
              <Link to={'/login'}><h4 className="zoom">Login/ register</h4></Link>
            }
            <Link to={'/aboutus'}><h4 className="zoom">About Us</h4></Link>
          </div>


        </div>


      </section>

    </>
  )
}

export default Home