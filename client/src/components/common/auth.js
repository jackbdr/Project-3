export const getPayload = () => {
  const token = window.localStorage.getItem('project-3-plants')
  if (!token) return
  const payload = token.split('.')[1]
  return JSON.parse(atob(payload))
}


export const userIsAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const currentTime = Math.floor(Date.now() / 1000)
  return currentTime < payload.exp
}

export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('project-3-plants')
}

export const userIsOwner = (singlePlant) => {
  const payload = getPayload()
  if (!payload) return
  return singlePlant.addedBy._id === payload.sub
}