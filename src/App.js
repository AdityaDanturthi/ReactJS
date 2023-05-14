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
    <div className='flex flex-col items-start justify-start p-16 h-screen w-screen'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
    alt="React logo" className="h-20 w-25" />
      <h1 className='font-extrabold text-7xl py-5'>Fun facts about React</h1>
      <ul className="list-disc ms-0 px-16 text-4xl font-medium py-5 m-0 flex flex-col items-start justify-start">
        <li>Was first released in 2013</li>
        <li>Has over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
export default App;
