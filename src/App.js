import './App.css';
import{useState} from 'react';
import searchIcon from './assets/search.png';

function App() {
  const[film, setFilm] = useState("");
  const[photo, setPhoto] = useState();
  const[actors, setActors] = useState("----");
  const[director, setDirector] = useState("----");
  const[released, setReleased] = useState("----");
  const[genre, setGenre] = useState("----");
  const[language, setLanguage] = useState("----");
  const[country, setCountry] = useState("----");
  const[runtime, setRuntime] = useState("----");
  const[availability, setAvailability] = useState("----");
  const[plot, setPlot] = useState("----");

  const search = async() => {
    let url = `https://www.omdbapi.com/?t=${film}&apikey=2afea20b`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data); 

      if (data.response === "False") {
        console.error("movie not found");
        
      } else {
        setActors(data.Actors);
        setDirector(data.Director);
        setReleased(data.Released);
        setGenre(data.Genre);
        setLanguage(data.Language);
        setCountry(data.Country);
        setRuntime(data.Runtime);
        setPlot(data.Plot);
        setPhoto(data.Poster);
        setAvailability(data.Error);
      }

    } catch (error) {
      console.error("An error occured : ", error.message);
    }
  };
  const handleFilm = (e) => {
    setFilm(e.target.value);
  };

  return (
    <>
    <div className='container'>

        <div className="searchbar">
          <input className="moviename" type="text" placeholder='Enter movie name' value={film} onChange={handleFilm} />
          <div className="searchicon" onClick={() => search() }>
            <img src={searchIcon} alt="pic" height="30px" width="30px" />
          </div>
        </div>

        <div className="poster" style={{backgroundImage: `url('${photo}')`}}>
        </div>

        <div className="details">

          <div className="leftdetails">
            <div>
              <span className="heading">Actors : </span>
              <span>{actors}</span>
            </div>
            <div>
              <span className="heading">Director : </span>
              <span>{director}</span>
            </div>
            <div>
              <span className="heading">Released : </span>
              <span>{released}</span>
            </div>
            <div>
              <span className="heading">Genre : </span>
              <span>{genre}</span>
            </div>
          </div>

          <div className="rightdetails">
            <div>
              <span className="heading">Language : </span>
              <span>{language}</span>
            </div>
            <div>
              <span className="heading">Country : </span>
              <span>{country}</span>
            </div>
            <div>
              <span className="heading">Runtime : </span>
              <span>{runtime}</span>
            </div>
            <div>
              <span style={{fontSize:'17px', color:'white'}}>{availability}</span>
            </div>
          </div>

        </div>

        <div className="footer">
          <div className="heading">Plot : </div>
          <div className="plot">{plot}</div>
        </div>

  </div>
    </>
  );
}

export default App;

