# General Assembly Project 3 - Seeded

## Overview

Working in a group of three, this was my first opportunity to create a full stack react app using Node.js, Express and MongoDB. The project was developed over a week.

We created a site to share and view information about all different kinds of plants. 

Check out Seeded [here](https://project-seeded.herokuapp.com/)

### Technical requirements
* Build a full-stack application by making your own backend and your own front-end
* Use an Express API to serve your data from a Mongo database. Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients and employers.
* Be deployed online so it's publicly accessible.

### Technologies used
Front-end:
* React
* Bootstrap
* SASS
* React multi-carousel

Back-end:
* Node.js
* Mongodb
* Express
* Bcrypt
* Mongoose
* Jsonwebtoken
* Cloudinary


On the back-end, I largely worked on structuring our API and models in order to effectively integrate the back-end with our React app. On the front-end, I mainly worked on the plants page, glossary page, add/edit a plant page. Also, authorisation on front-end and back-end.

Please look here for a day to day breakdown of the project.
 
 
## Planning and working together
We made sure to plan as thoroughly as possible and I think this is the main reason we managed to produce a website with quite a few things going on!

### Excalidraw
After having looked at the brief, we spent the day all planning together on Excalidraw:

![Seeded excalidraw](https://user-images.githubusercontent.com/101710474/181002142-19d73a89-8043-49ed-a615-e5b6ceefcd33.png)


### Traffic light MVP
Using a traffic light system, we distinguished between “must-haves”, “should-haves” and “could-haves”. 

We also tried to split tasks as evenly as possible and would tick off a task once we had completed it.

This system allowed us to keep track of our progress and keep planning as we went along. We first set out to complete our MVP (our “must-haves”), before regrouping and splitting up tasks again.

### Daily standups
We made sure to keep in direct contact with daily standups. Some tasks would take longer than other tasks so this was very important as we could keep posted on where we were all at. Also, some days, if someone needed help, we would then spend the rest of the morning group coding to solve the problem. 


### Deciding on styling 

Early on we decided that we were going for a clean, professional looking website. We decided that our site would consist of only white, a light grey and a green. 



## Seeding the data 

On the first evening of our project, we all spent time gathering information about as many plants as possible. Referring to our plant model in the Excalidraw, we gathered information from the internet and placed it all into a google sheet. On the first evening, we had gathered information and images for around 35 plants. We felt this was a great way to get started as we now had a good amount of data we could use for seeding. 



https://user-images.githubusercontent.com/101710474/181003423-3250fe03-c656-4902-befc-f79d3d196515.mov



### Converting to Json

I dealt with converting all this data we added to a google sheet into Json. This was much more tricky than expected. We had found an online converter which got me halfway there but there was still a lot to be done before the Json could be used for seeding. 


Here is our first plant after it had been through the converter:
```
{
   "Seed #": 1,
   "name": "Broadleaf Lady Palm",
   "scientificName": "Rhapis Excelsa",
   "image (png)": "3",
   "origin": "China",
   "wateringLevel": "Every 7-10 days",
   "waterCategory": [
      "High",
      4
   ],
   "wateringDetail": "#N/A",
   "temperature": "6-37°C",
   "tempCategory": "Very Low to Very High",
   "tempDetail": "It is almost impossible to upset the temperature of the Broadleaf Lady Palm. It will happily tolerate a broad range of temperatures.",
   "light": "Enjoys indirect sunlight. Full sunlight will injure the leaves.",
   "lightType": "Indirect",
   "sunlightFilter": 1,
   "brightness": "Partially bright",
   "brightnessFilter": 4,
   "fertilizer": "This plant rarely requires fertilizer",
   "pruning": "Should be carried out as required to prevent plant from becoming overgrown. ",

   "potentialProblems": "Lower leaves become discoloured with age. \nBrown leaves are caused by extreme heat or lack of watering.\nBlack leaf tips are associated with over watering or over fertilizing.",
   "problemSolutions": "These should be pruned for the plants health.\nFix the problem by trimming the brown leaves from the plant.\nFix the problem by trimming the black leaves from the plant.",
   "maxGrowth": "4 metres",
   "annualGrowth": "20-30cm",
   "poisonous": "No",
   "linkToBuy": "",
   "seededEaseRating": 4,
   "description": "The Broadleaf Lady Palm is a multi-stemmed palm plant that is becoming very popular around the world because of it's air cleaning abilities. Unlike other plants that only make oxygen, it can remove dangerous chemicals in the air like carbon dioxide and ammonia. Broadleaf Lady Palms are popular both as indoor and outdoor plants but may need some extra pruning to be kept in check if kept indoors.",
   "priceRange": "£30-120",
   "categorisation": "",
   "favourited": "",
   "seededSays": "Broadleaf Lady Palms are great in most environments. Make sure to water them every 7 - 10 days to keep their soil constantly moist but never soggy! They enjoy indirect sunlight and are fine with almost all temperatures so you can place them anywhere. Just make sure to give them a bit of shade to keep them happy. They can get a little overgrown so you can prune them when they start to get too large to handle."
},

```

Here is our first plant the final Json form: 

```
{                                          
   seed: 1,                                           
   name: 'Broadleaf Lady Palm',                                           
   sciName: 'Rhapis Excelsa',
   imageTrans: 'https://res.cloudinary.com/dtzeqjcsa/image/upload/v1652892009/plant_pngs/ladypalm_xtw8bd.png',
   imageHome: 'https://res.cloudinary.com/dtzeqjcsa/image/upload/v1653038305/plant_pngs/lady-palm-house_winxod.jpg',
   imageWild: 'https://res.cloudinary.com/dtzeqjcsa/image/upload/v1653038312/plant_pngs/lady-palm-tree_zetygt.webp',
   origin: 'China',                                           
   wateringLevel: 'Every 7-10 days',                                          
   waterCategory: 4,                                          
   wateringDetail: 'N/A',                                           
   tempRange: '6-37°C',                                           
   tempCategory: 'Very Low to Very High',                                           
   tempDetail: 'It is almost impossible to upset the temperature of the Broadleaf Lady Palm. It will happily tolerate a broad range of temperatures.',                                          
   lightDetail: 'Enjoys indirect sunlight. Full sunlight will injure the leaves.',                                           
   lightType: 'Indirect',                                           
   sunlightFilter: 1,                                           
   brightType: 'Mainly bright',                                           
   brightnessFilter: 4,                                           
   fertilizer: 'This plant rarely requires fertilizer',                                           
   pruning: 'Should be carried out as required to prevent the plant from becoming overgrown. ',                                           
   problems: [
     [
       {
         problem: 'Leaf discolouring',
         solution: 'This can happen with age. The leaves in question should be pruned for the plants health.',
       }
     ],
     [
       {
         problem: 'Brown leaves',
         solution: 'Can be caused by extreme heat or lack of watering. Fix the problem by trimming the brown leaves from the plant.',
       }
     ],
     [
       {
         problem: 'Black tips',
         solution: 'Associated with over watering or over fertilizing. Trim the black leaves from the plant to sort this out.',
       }
     ]
   ],
   maxGrowth: '4 metres',                                           
   annualGrowth: '20-30cm',                                           
   poisonous: 'Non toxic to pets',                                          
   linkToBuy: '',                                           
   seededEaseRating: 4,                                           
   description: 'The Broadleaf Lady Palm is a multi-stemmed palm plant that is becoming very popular around the world because of it\'s air cleaning abilities. Unlike other plants that only make oxygen, it can remove dangerous chemicals in the air like carbon dioxide and ammonia. Broadleaf Lady Palms are popular both as indoor and outdoor plants but may need some extra pruning to be kept in check if kept indoors.',                                           
   priceRange: '£30-120',                                           
   categorisation: '',                                          
   favourited: '',                                          
   seededSays: 'Broadleaf Lady Palms are great in most environments. Make sure to water them every 7 - 10 days to keep their soil constantly moist but never soggy! They enjoy indirect sunlight and are fine with almost all temperatures so you can place them anywhere. Just make sure to give them a bit of shade to keep them happy. They can get a little overgrown so you can prune them when they start to get too large to handle.',                                           
 },

```

The search and replace feature in VS code was great for switching from double quotes to single quotes. Also, removing quotes from the keys. However, there was no shortcut for structuring the plant’s problems/ solutions in way which enabled effective integration with the frontend. 

### Structuring of each plant’s problems

Iconography plays a big part on our plant detail page: 

![plant detail 1](https://user-images.githubusercontent.com/101710474/181001917-cb58fbea-9366-46eb-9bf2-8fa77c7fb850.png)
![plant detail 2](https://user-images.githubusercontent.com/101710474/181001941-6c95726b-f779-485f-9301-668d7e74900e.png)


We needed to structure each problem and solution pairing so that we could use iconography here also. 

Some plants only have one or two problems so we also needed to structure in a way which means you can, on the front-end, check to see if a problem exists and only if it does, display an icon for it. 

Here is the final structure of the plants’s problems:
```
   problems: [
     [
       {
         problem: 'Leaf discolouring',
         solution: 'This can happen with age. The leaves in question should be pruned for the plants health.',
       }
     ],
     [
       {
         problem: 'Brown leaves',
         solution: 'Can be caused by extreme heat or lack of watering. Fix the problem by trimming the brown leaves from the plant.',
       }
     ],
     [
       {
         problem: 'Black tips',
         solution: 'Associated with over watering or over fertilizing. Trim the black leaves from the plant to sort this out.',
       }
     ]
   ],
```

Checking if a problem exists on front-end:

```ruby
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
```

## Plants page filtering

We thought we could also incorporate iconography into how the user filters through our selection of plants. Rob and I spoke about how best to do this which was great as it was something neither of us had done before.


https://user-images.githubusercontent.com/101710474/181001552-380019bf-8267-485b-8d09-550165413f30.mov


I will demonstrate how I did this with the watering-can filters.

I created a separate file “Buttons.js” to contain a component for each button. We could then use useState and ternaries to bring in a coloured version of the icon if that icon is clicked.

Here are the watering-can buttons in “Buttons.js”:

```ruby
export const Can1 = ({ handleCanChange }) => {
 return <button id='can1' className='can' name='water' value={1} onClick={handleCanChange}></button>
}

export const Can1Colour = ({ handleCanChange }) => {
 return <button id='can1' className='can-colour' name='water' value={1} onClick={handleCanChange}></button>
}

export const Can2 = ({ handleCanChange }) => {
 return <button id='can2' className='can' name='water' value={2} onClick={handleCanChange}></button>
}

export const Can2Colour = ({ handleCanChange }) => {
 return <button id='can2' className='can-colour' name='water' value={2} onClick={handleCanChange}></button>
}

export const Can3 = ({ handleCanChange }) => {
 return <button id='can3' className='can' name='water' value={3} onClick={handleCanChange}></button>
}

export const Can3Colour = ({ handleCanChange }) => {
 return <button id='can3' className='can-colour' name='water' value={3} onClick={handleCanChange}></button>
}

export const Can4 = ({ handleCanChange }) => {
 return <button id='can4' className='can' name='water' value={4} onClick={handleCanChange}></button>
}

export const Can4Colour = ({ handleCanChange }) => {
 return <button id='can4' className='can-colour' name='water' value={4} onClick={handleCanChange}></button>
}

export const Can5 = ({ handleCanChange }) => {
 return <button id='can5' className='can' name='water' value={5} onClick={handleCanChange}></button>
}

export const Can5Colour = ({ handleCanChange }) => {
 return <button id='can5' className='can-colour' name='water' value={5} onClick={handleCanChange}></button>
}
```
The “handleCanChange” function tracks which can-icon has been clicked. If the id of the can-icon you click is already set to the cans-useState, then cans-useState is set to false and the water filter is set to nothing. Otherwise, cans-useState is set to the id of the clicked can-icon and the water filter is set to the can-icon’s value (a number from 1 - 5):
```ruby
 const handleCanChange = (e) => {
   if (cans === e.target.id) {
     setCans(false)
     setWaterFilter({ water: '' })
   } else {
     const newObj = {
       ...waterFilter,
       [e.target.name]: e.target.value
     }
     setWaterFilter(newObj)
     setCans(e.target.id)
     console.log(e.target.id)
   }
 }

```
In the JSX I then used ternaries to only display a coloured version of a can if that can has been clicked:
```ruby
             <div className='cans label-icon'>
               <p>Watering</p>
               <div className='icons-container'>
                 {cans === 'can1' ?
                   <Can1Colour handleCanChange={handleCanChange} />
                   :
                   <Can1 handleCanChange={handleCanChange} />
                 }
                 {cans === 'can2' ?
                   <Can2Colour handleCanChange={handleCanChange} />
                   :
                   <Can2 handleCanChange={handleCanChange} />
                 }
                 {cans === 'can3' ?
                   <Can3Colour handleCanChange={handleCanChange} />
                   :
                   <Can3 handleCanChange={handleCanChange} />
                 }
                 {cans === 'can4' ?
                   <Can4Colour handleCanChange={handleCanChange} />
                   :
                   <Can4 handleCanChange={handleCanChange} />
                 }
                 {cans === 'can5' ?
                   <Can5Colour handleCanChange={handleCanChange} />
                   :
                   <Can5 handleCanChange={handleCanChange} />
                 }
               </div>
             </div>
```

I really liked this feature and it was fun to make. However, we realised that we didn’t need to have components for each button in another file. It was overkill! We could have just had html elements in the JSX rather than bringing in components.


## Adding a plant 

I also enjoyed writing code on the back-end for when a user adds a plant.
For user experience, worked out filtering depending on what the user has passed through from the front-end. 


```ruby
export const addPlant = async (req, res) => {
 const { body: newPlant, verifiedUser } = req
 try {
   // Work out filtering
   const waterCategory = () => {
     if (newPlant.wateringLevel === 'Every day') {
       return 5
     } else if (newPlant.wateringLevel === 'At least once a week') {
       return 4
     } else if (newPlant.wateringLevel === 'Every 8-14 days') {
       return 3
     } else if (newPlant.wateringLevel === 'Every 15-21 days') {
       return 2
     } else if (newPlant.wateringLevel === 'Once a month') {
       return 1
     }
   }

   const sunlightFilter = () => {
     if (newPlant.lightType === 'Direct') {
       return 5
     } else if (newPlant.lightType === 'Mainly direct') {
       return 4
     } else if (newPlant.lightType === 'Mixed') {
       return 3
     } else if (newPlant.lightType === 'Mainly indirect') {
       return 2
     } else if (newPlant.lightType === 'Indirect') {
       return 1
     }
   }

   const brightnessFilter = () => {
     if (newPlant.brightType === 'Bright') {
       return 5
     } else if (newPlant.brightType === 'Mainly bright') {
       return 4
     } else if (newPlant.brightType === 'Mixed') {
       return 3
     } else if (newPlant.brightType === 'Mainly low light') {
       return 2
     } else if (newPlant.brightType === 'Low light') {
       return 1
     }
   }

   const seededEaseRating = () => {
     return Math.round((waterCategory() + sunlightFilter() + brightnessFilter()) / 3)
   }
   // console.log('waterCatergory', waterCategory())



   const addedPlant = await Plant.create({
     ...newPlant,
     waterCategory: waterCategory(),
     sunlightFilter: sunlightFilter(),
     brightnessFilter: brightnessFilter(),
     seededEaseRating: seededEaseRating(),
     problems: [
       [
         {
           problem: newPlant.problem1,
           solution: newPlant.solution1,
         }
       ],
       [
         {
           problem: newPlant.problem2,
           solution: newPlant.solution2,
         }
       ],
       [
         {
           problem: newPlant.problem3,
           solution: newPlant.solution3,
         }
       ]
     ],
     addedBy: verifiedUser._id,
   })
   console.log(addedPlant)
   return res.status(201).json(addedPlant)
 } catch (err) {
   console.log('Couldn\'t add this plant, sorry!', err)
   return res.status(400).json(err)
 }
}

```


## Bugs and Blockers
Merge conflicts. Although we only ran into two or three, this was always on our mind and we didn’t feel completely comfortable with version control. This was a learning experience!

## Wins
* Working together as a team: keeping up to date with each other, planning well and splitting up tasks. 
* Building a full-stack application was a massive learning experience. 
* Particularly learnt the value of planning

## Key learnings
* Group development 
* Learnt about Bootstrap modals
* Using Git for version control

## Future improvements
Currently users cannot edit or delete plants that they have added. This was actually completed but we ran into a merge conflict and frustratingly it got last right at the last minute. The functionality is all there on the back-end so it is an easy fix to get this going on the front-end again. 
