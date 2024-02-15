import "./App.css";
import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/NavigationBar";
function App() {
  

  return (
   <> 
   <div className="flex" >
        {/* 1. Navbar  */}
        <NavigationBar />
    
        {/*2.  Main component */}
        <main className="grow">
          <Dashboard />
        </main>
        </div>
   </>
      
  )
}

export default App
