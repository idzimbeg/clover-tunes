import React, {useState, useCallback, useEffect} from 'react';
import SongsList from '../SongsList/SongsList';

const PlayList = () => {
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchSongsHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks/tracks'); 
      
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
        
        const loadedSongs = [];
  
        for (const key in data) {
          loadedSongs.push({
            key: key,
            id: data[key].id,
            title: data[key].title,
            duration: data[key].duration,
            artist: data[key].artist, 
          });
        }

        setTracks(loadedSongs);
        console.log(loadedSongs)
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchSongsHandler();
      }, [fetchSongsHandler]);

      let content = <p>Found no songs.</p>;

      if (tracks.length > 0) {
        content = <SongsList tracks={tracks} />;
      }
    
      if (error) {
        content = <p>{error}</p>;
      }
    
      if (isLoading) {
        content = <p>Loading...</p>;
      }

  return (
    <React.Fragment>
    
    <section>
      <button onClick={fetchSongsHandler}>Fetch Songs</button>
    </section>
    <ul>{content}</ul>
  </React.Fragment>

  )
}

export default PlayList