import Select from 'react-select'



const PlantOverview = () => {

  const options = [
    { value: 'petsafe', label: 'Safe for pets' },
    { value: 'small-in', label: 'Small Indoor' },
    { value: 'medium-in', label: 'Medium Indoor' },
    { value: 'large-in', label: 'Large Indoor' },
    { value: 'small-out', label: 'Small Outdoor' },
    { value: 'medium-out', label: 'Medium Outdoor' },
    { value: 'large-out', label: 'Large Outdoor' }
  ]


  return (
    <section>
      <div className="filter">
        <input type="text" placeholder="Search..." id="search" />
        <select className="sort-by">
          <option selected value="all">All</option>
          <option value="price">Price: low to high</option>
          <option value="care">Ease of care</option>
          <option value="clout">Most popular</option>
        </select>
      </div>
      <div>
        <Select
          options={options}
          isMulti
          // onChange={(selected) => handleMultiChange(selected, 'findMyPlant')}
        />
        <div>
          <div>
            <img src='../images/camel.png' alt='camel'></img>
          </div>
          <div className="grid-wrapper">
            
          </div>
        </div>
      </div>
    </section >
  )
}

// what's a nicer way of writing 'Price: low to high'

export default PlantOverview