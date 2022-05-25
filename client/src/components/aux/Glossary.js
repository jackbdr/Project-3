import { useState } from 'react'

const Glossary = () => {
  
  const [ filter, setFilter ] = useState('')



  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const terms = [
  {name: 'Brightness', description: 'Brightness refers to how well lit a space is. Some plants can do well in a shady north facing garden like the Dragon Tree, whilst some will need a light environment throughout the day.'},
  {name: 'Crown', description: `The crown of a plant refers to the total of an individual plant's aboveground parts, including stems, leaves, and reproductive structures.`},
  {name: 'Die back', description: 'A plant begins to die back when it is under stress. Wilting at the tip of the shoots gradually moves down the stem and to the rest of the plant.'},
  {name: 'East facing garden', description: 'An east facing garden receives sun throughout the morning, with the sun rising over the bottom of the garden.'},
  {name: 'North facing garden', description: 'North facing gardens are typically in the shade for most of the day, as the house itself is blocking the sun.'},
  {name: 'Perennial', description: `A perrenial plant lives for more than two years (e.g. Foxgloves are perennial)`},
  {name: 'Plant Propagation', description: 'Plant propagation is the process by which new plants grow from a variety of sources: seeds, cuttings, and other plant parts. Plant propagation can also refer to the man-made or natural dispersal of seeds.'},
  {name: 'Prune', description: 'To prune a plant is to by cut away dead or overgrown branches or stems, especially to encourage growth.'},
  {name: 'South facing garden', description: 'A south facing garden receives sun all, day, long. If looking out to the garden, the sun rises on the left and sets on the right.'},
  {name: 'Sunlight', description: 'Sunlight refers to the amount of direct sunshine a plant enjoys. Whilst plants like to soak up as many rays as possible, others enjoy the sun in patches or short intervals.'},
  {name: 'West facing garden', description: `A west facing garden gets the afternoon sun along with 'golden hour' and a sunset at the bottom of the garden.`},
  ]




  const handleClick = (e) => {
    setFilter(e.target.value)
  }

  const handleFilter = () => {
    return terms.filter(term => {
      return term.name.includes(filter)
    })
  }


  return (
    <section className='glossary-container'>
      <h1>Glossary</h1>
      <div className="glossary-filter">
        {filter === '' ? 
        <button className='button-active' value={''} onClick={handleClick}>All</button>
        :
        <button value={''} onClick={handleClick}>All</button>
      }
        <>
        {letters.map((letter, index) => {
          return(
            letter === filter ? 
            <button className='button-active'>{letter}</button>
            :
            <button key={index} value={letter} onClick={handleClick}>{letter}</button>
          )
        })}
        </>
      </div>
      <div className='entries-container'>
        <>
        {handleFilter().length === 0 ?
        <div className='entry'>
        <h4>No Entries Found</h4>
        </div>
        :
        <>
        {handleFilter().map((term, index) => {
          return(
            <>
            <div className='entry' key={index}>
              <h4>{term.name}</h4>
              <p>{term.description}</p>
              </div>
              <hr />
              </>
          )
        })}
        </>
        }
      </>
      </div>
    </section>
  )
}

export default Glossary