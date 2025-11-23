import ProgressBar from "./components/ProgressBar"

function App() {

  return (
    <>
      <div className="m-24">
        <ProgressBar progress={75} />
      </div>
    </>
  )
}

export default App


/**
 * Approach : 
 * - build a component that takes user's progress (number) and displays the progress
 * - the progress should be dynamic
 * - animate the progress
 */