import Sites from '../models/websites.js'


// ?GET REQUESTS
// Get All Plants
export const viewWebsites = async(req, res) => {
  console.log('hit the website loader')
  try {
    const websites = await Sites.find()
    return res.status(200).json(websites)
  } catch (error) {
    return res.status(400).json(error)
  }
}