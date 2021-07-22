import Navbar from './components/navbar';
import Card from './components/card';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">

        <h1>Cosa desideri ordinare?</h1>
        <hr />
        <div className="row">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
