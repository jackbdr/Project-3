import { useState } from "react"

export const ProjectBrief = () => {
  return (
    <section className='aboutus-left'>
      <h2>Project Brief </h2>
      <hr />
      <h4>Technical Requirements </h4>
      <ol>
        <li>Build a full-stack application by making your own backend and your own front-end</li>
        <li>Use an Express API to serve your data from a Mongo database. Consume your API with a separate front-end built with React</li>
        <li>Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models</li>
        <li>Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut</li>
        <li>Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients and employers.</li>
        <li>Be deployed online so it's publicly accessible.</li>
      </ol>
      <h4>Necessary Deliverables</h4>
      <ol>
        <li>A working app hosted on the internet</li>
        <li>A link to your hosted working app in the URL section of your Github repo</li>
        <li>A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project</li>
      </ol>
    </section>
  )
}

export const DayBreakdown = () => {
  const [activeSection, setActiveSection] = useState()

  const handleClick = (e) => {
    setActiveSection(e.target.value)
    console.log(e.target.value)
  }

  const sectionDisplay = () => {
    if (activeSection === 'Mon1') {
      return (
        <>
          <h3>Day 1</h3>

          <p>The first day of the project!</p>
          <p>We spent most of the first morning {'&'} afternoon going through different ideas
            on what projects we could do and planning the different features we wanted to include.
          </p>
          <p>We decided on doing a house plant encyclopedia where we could add {'&'} edit all of our favorite house plants</p>
          <p>The rest of the day {'&'} evening was spent getting a general skeleton designed for our front-end pages and setting up the git repositories,
            making sure all it was working.</p>
        </>
      )
    } else if (activeSection === 'Tues1') {
      return (
        <>
          <h3>Day 2</h3>
          <p>We decided to spend the second day getting started on the backend and each worked on different functionality. Robert worked on the router {'&'} different controllers,
            Jack worked on the secure routes {'&'} login/registration handlers {'&'} James worked on the models.
          </p>
          <p>During the day, we set-up the routes, secure routes {'&'} the base models we would need for our data.
            The models we used were user models to store data on their favorite {'&'} added plants, and a plants model
            which would store all the info on each plant. We ended up going very in-depth on the plants model including
            information such as care tips, general information and filter info.
          </p>
          <p>During the Evening, we worked on starting to populate the Database and get as many plants in as we could.</p>
        </>
      )
    } else if (activeSection === 'Wed1') {
      return (
        <>
          <h3>Day 3</h3>
          <p>We spent the morning back on excalidraw. We wanted to regroup and re-think about how we were planning on displaying the plant details on page because
            whilst we were pooling information for the database, we realised it would have just been a large info dump without much use.
            We also wanted to rethink one of the features we had planned for: a kind of tinder type feature but for plants.
            We decided there wasn't enough functionality to it as … and also didn't fit with our quite serious website.
          </p>
          <p>Afterwards, we finished data entry and started connecting the back-end with the front-end. This was a strugle as we didn't
            have the best knowledge of setting up proxies {'&'} mixed up where we use them in the front-end and the back. Another issue we also had
            was that we forgot to have '/api' in our router: app.use('/api', router). Because of these issues, we focused on smaller tasks for the rest of the day/evening.
          </p>
          <p>
            We created a cloudinary to store all our images and let users submit their own. We then seeded the database with 1 to 2 entries so we could test page population.
          </p>
          <p>

          </p>
        </>
      )
    } else if (activeSection === 'Thur1') {
      return (
        <>
          <h3>Day 4</h3>
          <p>This was the day we started seeing the site come together.</p>
          <p>We made final decisions on the overall design and asthetic we were going for.
            We also sourced/created images for the different filter icons {'&'} logo so we
            could start styling the site.
          </p>
          <p>We had another mini-excalidraw session today to finalise the backend structure {'&'} models structure. One of which was deciding how the 'problems' {'&'} 'solution' data
            would be stored.</p>
          <p>The features we added were the footer, search, index {'&'} plant overview pages.</p>
        </>
      )
    } else if (activeSection === 'Fri1') {
      return (
        <>
          <h3>Day 5</h3>
          <p>We did some more work on the backend today by starting to implement a favorites feature</p>
          <p>For Front-end the major feature we implemented was the filter function. We had gone through
            multiple iterations of the filter but had finally decided on one that we all liked. This filter was
            more complex than the ones we had used on previous labs/projects and took a while to figure out.
            The code is functional however it isn't very DRY so if we have time, would like to revisit it to see if we can refactor it to be more managable.
          </p>
          <p>
            We also worked on styling the final front-end look of the site. This was mostly for the plants index page {'&'} the plant overview page.
          </p>
        </>
      )
    } else if (activeSection === 'Weekend') {
      return (
        <>
          <h3>Day 6 {'&'} 7</h3>
          <p>We didn't have set plans for the weekend. We mostly continued on what we were working on from Friday. This includes the plant overview pages,
            the index page/filter function {'&'} the profile page.
          </p>
        </>
      )
    } else if (activeSection === 'Mon2') {
      return (
        <>
          <h3>Day 8</h3>
          <p>We finished the styling on most of the pages {'&'} some more back-end functionality. </p>
          <p>The favorites function on the back-end that plagued us for hours was finally solved when it turned out we were using a broken version of
            Mongoose Unique Validator. The profile page, login/signup page {'&'} index pages were finalised. We then started working on the Aboutus page {'&'}
            the comments functionality.
          </p>
        </>
      )
    } else if (activeSection === 'Tues2') {
      return (
        <>
          <h3>Day 9</h3>
          <p>We got the last of the functionality sorted. The favourites {'&'} comments functionality are now working and displaying on the profile page correctly. You
            can also now add a new plant to the database and all of it is functioning as expecting.</p>
          <p>We finished up the final styling decisions and started working on the styling we had left. This included redoing the profile page and some of the about-us page.
            We also have an issue where we can't seem to get the navbar to disappear on the homepage but we think it's becuase the nav is a global component in App.js. Not too
            sure how to fix this.
          </p>
          <p>Finishing the last of our tasks over the evening and hoping to get everything fully functional by tomorrow. Leaving all of tomorrow to try and get the website responsivite to mobile
            but we might run out of time before the deadline.
          </p>
        </>
      )
    }
  }



  return (
    <section className='aboutus-right'>
      <h2>Daily Breakdown</h2>
      <hr />
      <div id='day-titles'>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/16th.png" alt="16th" />
          </div>
          <button value='Mon1' onClick={handleClick}>Day 1</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/17th.png" alt="16th" />
          </div>
          <button value='Tues1' onClick={handleClick}>Day 2</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/18th.png" alt="16th" />
          </div>
          <button value='Wed1' onClick={handleClick}>Day 3</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/19th.png" alt="16th" />
          </div>
          <button value='Thur1' onClick={handleClick}>Day 4</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/20th.png" alt="16th" />
          </div>
          <button value='Fri1' onClick={handleClick}>Day 5</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/21st.png" alt="16th" />
          </div>
          <button value='Weekend' onClick={handleClick}>Day 6{'&'}7</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/23rd.png" alt="16th" />
          </div>
          <button value='Mon2' onClick={handleClick}>Day 8</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/24th.png" alt="24th" />
          </div>
          <button value='Tues2' onClick={handleClick}>Day 9</button>
        </div>
        <div className='calendar'>
          <div className="calendar-icon">
            <img src="/images.png/25th.png" alt="25th" />
          </div>
          <button value='Wed2' onClick={handleClick}>Day 10</button>
        </div>
      </div>
      <div id='daily-text'>
        {sectionDisplay()}
      </div>
    </section>
  )
}

