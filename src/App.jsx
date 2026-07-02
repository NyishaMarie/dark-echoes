import {useState} from 'react';
import {episodeList} from './data';

export default function App() {
  // const [episodes, setEpisodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();


  function EpisodeDetails() {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>Select an episode to see the details.</p>
      </section>
    );
  }

return (
  <section className="details">
    <h2>{selectedEpisode.id}</h2>
    <h3>{selectedEpisode.title}</h3>
    <p>{selectedEpisode.description}</p>
  </section>
);
}

function EpisodeList() {
  return (
    <section className="EpisodeList">
      <h2>Episode Roster</h2>
      <ul className="EpisodeList">
        {episodeList.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );

}

return (
  <>
    <header>
      <h1>Dark Echoes</h1>
    </header>
    <main>
      <EpisodeList/>
      <EpisodeDetails/>
    </main>
  </>
);
}

// return(
//   <>
//   {episodeList.map((episode) =>
//     <h3 onClick={() => setSelectedEpisode(episode)}>{episode.id}</h3>
//   )}
//   <div>
//     {selectedEpisode ?
//     <>
//       <h2>{selectedEpisode.title}</h2>
//     </>
//     :
//     <>
//       <h2>Episode Details</h2>
//       <p>Select an episode to see the details.</p>
//     </>
//     }
//   </div>
//   </>
// )




