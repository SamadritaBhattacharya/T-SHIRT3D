import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
 
  return (
    <>
    <main className = "app-transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
      
    </main>
      {/* <div>
        <h1 className = "head-text">React App</h1>
      </div> */}
    </>
  )
}

export default App
