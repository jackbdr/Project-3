// import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup'
import { getToken, getUserToken, isUserAuth } from '../helpers/Auth'
import Button from 'react-bootstrap/Button'


const PlantDetail = () => {

  const navigate = useNavigate()

  const { id } = useParams()

  const [plants, setPlants] = useState()
  const [errors, setErrors] = useState(false)

  const [profileInfo, setProfileInfo] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)

  // Setting state and handles for detele plant modal
  const [showDelete, setShowDelete] = useState(false)
  const handleCloseDelete = () => setShowDelete(false)
  const handleShowDelete = () => setShowDelete(true)

  useEffect(() => {

    const getPlants = async () => {
      try {
        const { data } = await axios.get(`/api/plants/${id}`)
        setPlants(data)
        console.log(data)
        // console.log(data.problems)
        // console.log(data.problems[0])
        // console.log(data.problems[0][0].problem)
      } catch (err) {
        setErrors(true)
      }
    }
    getPlants()
  }, [id])


  // Setting up profile data to check favorites

  useEffect(() => {
    const checkFavorite = () => {
      if (profileInfo) {
        const checkExists = profileInfo.favorites.filter(fav => {
          return fav.plantId._id === id
        })
        if (checkExists.length > 0) {
          setIsFavorited(true)
        }
      } else {
        setIsFavorited(false)
      }
    }
    checkFavorite()

  }, [profileInfo])


  // Getting User Data
  useEffect(() => {
    if (isUserAuth()) {
      try {
        const getUserData = async () => {
          const { data } = await axios.get(`/api/profile/${getUserToken()}`)
          console.log(data)
          setProfileInfo(data)
        }
        getUserData()
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  // Favorite button handler
  const postFavorite = async () => {
    try {
      const formData =
      {
        "plantId": id
      }
      const { data } = await axios.put(`/api/favorites/${getUserToken()}`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
      console.log(data)
      if (isFavorited === true) {
        setIsFavorited(false)
      } else setIsFavorited(true)
    } catch (error) {
      console.log(error)
    }
  }

  // Setting state and handles for add comment modal
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    window.location.reload()
  }
  const handleShow = () => setShow(true)

  // setting state and handles for all comments modal
  const [allComments, setAllComments] = useState(false)
  const closeComments = () => setAllComments(false)
  const showComments = () => setAllComments(true)

  // * Uploading comments
  // Setting form information for submitting comments
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    rating: '',
  })

  // Updating form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, "plantName": plants.name, "plantImg": plants.imageTrans, "plantId": plants._id })
    // console.log(e.target.value, e.target.name)
    setErrors({ ...errors, [e.target.name]: '' })
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/api/plants/${id}/comments`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        }
      })
    } catch (err) {
      setErrors(err.response.data)
    }
    handleClose()
  }

  // Date change function
  const changeDate = (isoDate) => {
  const newDate = new Date(isoDate)
  return newDate.toISOString().substring(0, 10)
  }

  const deletePlant = async() => {
    try {
      await axios.delete(`/api/plants/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      navigate('/plants')
    } catch (error) {
      
    }
  }
  


  return (
    <>
      {isUserAuth() ? 
      plants ?
        <section className="overall-container">
          {/* SPLITTING UP THE PAGE INTO SECTIONS FOR SCROLLING - TOP SECTION */}
          <section className="top-page">
            <section className="left-page">
              <Carousel variant='dark' className='plant-pic'>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={plants.imageTrans}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-75"
                    src={plants.imageHome}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="seeded-rating">
                <div className='seeded-title'>
                  <h4>{plants.seededEaseRating} <span><img src='/images.png/favourite.png' alt="star"/></span> Seeded Ease Rating</h4>
                </div>
              </div>
            </section>
            <section className="right-page">
              <div className="key-content">
                <h1>{plants.name}</h1>
                <div className='comment-section'>
                  <h3>{plants.sciName}</h3>
                  <button className="modal-launch" onClick={handleShow}>
                    <img src='/images.png/comment.png' alt='comment' />
                    <span className='hover-message'>Add a comment</span>
                  </button>
                  <Modal show={show} onHide={handleClose}>

                    <Modal.Header className="comments-header" closeButton>
                      <Modal.Title className="comments-title" >Tell us what you think about the {plants.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Comment title</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder=""
                            autoFocus
                            onChange={handleChange}
                            name='title' />
                        </Form.Group>
                        <div className="form-group">
                          <label for="rating">How easy is this plant to look after?</label>
                          <select className="form-control" id="rating" placeholder='---' onChange={handleChange} name='rating'>
                            <option>---</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Comment</Form.Label>
                          <Form.Control as="textarea" rows={3} onChange={handleChange} name='text' />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className="comments-footer">
                      <button className='comments-save' onClick={handleSubmit}>
                        Save Changes
                      </button>
                      <button className='comments-close' onClick={handleClose}>
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>

                  <button className="load-comments" onClick={showComments}>
                    (Show comments)
                  </button>
                  <Modal show={allComments} onHide={closeComments} className="comments-detail">
                    <Modal.Header className="comments-header" closeButton>
                      <Modal.Title className="comments-title">{plants.name}: Community reviews </Modal.Title>
                      {plants.comments.length < 1 ? "" :
                        <h2>Our users give this plant an average ease rating of {plants.avgRating}/5</h2>
                      }
                    </Modal.Header>
                    <Modal.Body>

                      {plants.comments.length < 1 ?
                      
                        <div className='comment-card'>
                          <h4>No one has reviewed this plant yet</h4>
                        </div>
                        :
                        plants.comments.map(comment => (
                          
                          <>
                            <div className='comment-card'>
                              <div className='comment-left'>
                                <h4>{comment.title}</h4>
                                <h5>Added on {changeDate(comment.createdAt)}</h5>
                                <p>{comment.text}</p>
                              </div>
                              <div className='comment-right'>
                                <h1>{comment.rating} </h1>
                                <img src='/images.png/favourite.png' alt='star' />
                              </div>
                            </div>
                            <hr />
                          </>
                        ))}
                    </Modal.Body>
                    <Modal.Footer className='comments-footer'>
                      <button className='comments-close' onClick={closeComments}>
                        Close
                      </button>
                    </Modal.Footer>
                  </Modal>
                  <>
                    {isFavorited ?
                      <button id='btn-favorited' onClick={postFavorite}>
                        💚
                        {/* <img src='/images.png/heart-filled.png' alt='Heart with color' /> */}
                      </button>
                      :
                      <button id='btn-notfavorited' onClick={postFavorite}>
                        🤍
                        {/* <img src='/images.png/heart.png' alt='Heart' /> */}
                      </button>
                    }
                  </>
                </div>

                <div className="description">
                  <h4>About Me</h4>
                  <p>{plants.description}</p>
                </div>
                <hr />
              </div>
              <div className="care-ratings">
                <div className="rating-title">
                  <h4>Care tips</h4>
                </div>
                <div className="tips-details">
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/watering-can.png" alt="water-logo" />
                    </div>
                    <small>{plants.wateringLevel}</small>
                  </div>
                  <hr />
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/temperature.png" alt="temp-logo" />
                    </div>
                    <small>{plants.tempRange}</small>
                  </div>
                  <hr />
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/sunny.png" alt="light-logo" />
                    </div>
                    <small>{plants.lightType} sunlight</small>
                  </div>
                  <hr />
                  <div className="rating-logo">
                    <div className="logo-image">
                      <img src="/images.png/light-bulb.png" alt="bright-logo" />
                    </div>
                    <small>{plants.lightType} brightness</small>
                  </div>
                </div>
              </div>
              <div className='user-buttons'>
                <Button onClick={handleShowDelete} className='delete-edit-buttons delete'>Delete</Button>
                <Link className='btn delete-edit-buttons edit' to={`/plants/${plants._id}/edit`}>Edit</Link>
              </div>
              <Modal show={showDelete} onHide={handleCloseDelete} className='modal-delete'>
                <Modal.Header className='delete-modal-header'>
                  <h2>Delete Plant</h2>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete your plant?
                </Modal.Body>
                <Modal.Footer>
                  <Button className='close-btn-modal delete-edit-buttons' onClick={handleCloseDelete}>cancel</Button>
                  <Button className='delete-btn-modal delete-edit-buttons' onClick={deletePlant}>Delete</Button>
                </Modal.Footer>
              </Modal>
            </section>
          </section>
          {/* SMALL MIDDLE SECTION FOR THE PAGE BREAK */}
          <section className="middle-section">
            <img src='/images.png/ivy.png' alt='ivy separator' />
          </section>

          {/* BOTTOM SECTION CONTAINING ADDITIONAL DETAIL */}
          <section className="bottom-section">
            <section className="bottom-content">
              <div className="left-page">
                <div className='plant-pic'>
                  <img src={plants.imageWild} alt={plants.name} />
                </div>
                <div className="plant-text">
                  <h4>{plants.name} can grow up to {plants.maxGrowth && plants.maxGrowth} tall in the wild</h4>
                </div>
              </div>
              <div className="right-page">
                <div className="facts">
                  <div className='facts-title'>
                    <h4>Key facts</h4>
                  </div>
                  <div className="facts-detail">
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/location.png" alt="origin-logo" />
                      </div>
                      <small>{plants.origin}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/spider-plant.png" alt="height-logo" />
                      </div>
                      <small>{plants.maxGrowth && plants.maxGrowth}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/calendar.png" alt="calendar-logo" />
                      </div>
                      <small>{plants.annualGrowth && plants.annualGrowth}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/price-tag.png" alt="price-logo" />
                      </div>
                      <small>{plants.priceRange && plants.priceRange}</small>
                    </div>
                    <hr />
                    <div className="fact-logo">
                      <div className="fact-image">
                        <img src="/images.png/toxic.png" alt="price-logo" />
                      </div>
                      <small>{plants.poisonous && plants.poisonous}</small>
                    </div>
                  </div>

                </div>
                <div className="problem-section">

                  {plants.problems[0][0].problem.length < 2 ? "" :
                    <>
                      <hr />
                      <div className='problem-title'>
                        <h4>Typical problems</h4>
                      </div>
                    </>
                  }
                  {plants.problems[0][0].problem.length < 2 ? "" :
                    <>
                      <div className='problem-detail'>
                        <img src="/images.png/prob-icon1.png" alt="leaf" />
                        <div className="problem-box">
                          <h3>{plants.problems[0][0].problem}</h3>
                        </div>
                        <div className="solution-box">
                          <h3>{plants.problems[0][0].solution}</h3>
                        </div>
                      </div>
                    </>
                  }
                  {plants.problems[1][0].problem.length < 2 ? "" :
                    <>
                      <div className='problem-detail'>

                        <img src="/images.png/prob-icon2.png" alt="leaf" />
                        <div className="problem-box">
                          <h3>{plants.problems[1][0].problem}</h3>
                        </div>
                        <div className="solution-box">
                          <h3>{plants.problems[1][0].solution}</h3>
                        </div>
                      </div>
                    </>
                  }
                  {plants.problems[2][0].problem.length < 2 ? "" :
                    <>
                      <div className='problem-detail'>
                        <img src="/images.png/prob-icon3.png" alt="leaf" />
                        <div className="problem-box">
                          <h3>{plants.problems[2][0].problem}</h3>
                        </div>
                        <div className="solution-box">
                          <h3>{plants.problems[2][0].solution}</h3>
                        </div>
                      </div>
                    </>
                  }

                  <div className="seeded-says">
                    <hr />
                    <h3>Seeded says</h3>
                    <p>{plants.seededSays}</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
        :
        <h2>{errors ? 'Sorry, something went wrong with the connection, try reloading' : ''}</h2>
        :
        <div className="no-auth-page">
          <div ClassName="access-denied">
            <h1>Sorry! This content is for our members only. If you want to see more, then join the community. Follow the link below to sign up.</h1>
            <Link to={`/register`}>
              <button>Join Seeded</button>
            </Link>
          </div>
        </div>
      }
    </>
  )
}

export default PlantDetail









