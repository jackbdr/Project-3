import { ProjectBrief, DayBreakdown } from './AboutusComponents'

const Aboutus = () => {

  return (
    <div id='aboutus-page'>
      <h1 id='aboutus-header'>Seeded - General Assembly Project 3</h1>
      <div id='aboutus-wrapper'>
        <ProjectBrief />
        <DayBreakdown />
      </div>
      <div id='credits'>
        <h5>Links to Team Members:</h5>
        <hr />
        <a target='_blank' rel='noreferrer' href='https://github.com/jackbdr'>Jack Robinson</a>
        <a target='_blank' rel='noreferrer' href='https://github.com/jdkuligowski'>James Kuligowski</a>
        <a target='_blank' rel='noreferrer' href='https://github.com/robertwmorgan'>Robert Morgan</a>
      </div>
    </div>
  )
}

export default Aboutus