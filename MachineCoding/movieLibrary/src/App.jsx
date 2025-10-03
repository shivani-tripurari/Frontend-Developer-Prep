import MoviesPage from "./components/MoviesPage"

function App() {
  
  return (
    <>
      <MoviesPage/>
    </>
  )
}

export default App



/*
approach : 
***iteration 1 : 
- on page load : all popular movies should be shown
- search bar -> user's input goes in api query
- api url : baseURL+END_POINT+Query

***iteration 2 :
- implement debouncing
- implement pagination
*/