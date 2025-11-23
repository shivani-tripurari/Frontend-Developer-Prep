import { DEMO_DATA } from "./data/demo";
import useFormEngine from "./engine/useFormEngine";
import Renderer from "./renderer/Renderer";

function App() {
  
  console.log("demo data", DEMO_DATA);
  //destructuring
  const{formState, onChangeHandler, onSubmit} = useFormEngine();

  return (
    <div className="m-24 p-3">
      <h1 className='text-3xl font-bold text-red-700'>Generic UI Renderer</h1>
      <div className="mt-10 w-1/2 border border-red-300 rounded p-10">
        <Renderer 
          node={DEMO_DATA}
          formState={formState}
          onChangeHandler={onChangeHandler}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default App;


/**
 * Basic idea / architecture : 
 * - App.jsx : starting point, calls Renderer , passes down data, state, handler functions
 * - Renderer.jsx : Recursively walks through every node, Calls ComponentMap with node and props(value, handler functions) according to the node type
 * - ComponentMap.js : Just a function that maps each node type with dummy component, where component value, other props gets passed down to it via App->Renderer->ComponentMap
 * - components/ : this folder contains the dummy ui components that have no logic, state, handler functions
 */