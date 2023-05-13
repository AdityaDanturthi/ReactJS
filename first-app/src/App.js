import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

function NavBar(){
  return(
    <nav className='flex flex-col items-start p-2'>
      <h1 className='font-bold text-2xl'>Cafe</h1>
      <ul className="list-disc list-inside">
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
export default App;
