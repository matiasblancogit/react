const paginate = (heroes) => {
    const itemsPerPage = 12
    const numberOfPages = Math.ceil(heroes.length / itemsPerPage)
  
    const newHeroes = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return heroes.slice(start, start + itemsPerPage)
    })
  
    return newHeroes
  }
  
  export default paginate