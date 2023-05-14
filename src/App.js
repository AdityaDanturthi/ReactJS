import './App.css';

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

function Content(){
  return(
    <div className='flex flex-col items-start justify-start h-screen w-screen px-4 py-10'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
    alt="React logo" className="h-6 w-7" />
      <h1 className='font-extrabold text-xl py-5'>Fun facts about React</h1>
      <ul className="list-disc text-lg font-medium flex flex-col items-start justify-start px-6">
        <li>Was first released in 2013</li>
        <li>Has over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
export default App;
