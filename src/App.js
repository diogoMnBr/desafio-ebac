import './App.css';
import Videos from './pages/Videos.js';

function App(/* {likes, messages, shares} */) {
  return (
    <div className="App">
      <div className="app-videos">
        <Videos 
          likes={100}
          messages={50}
          shares={80}
          name="Paulo"
          description="Gato Goleiro, Gatoleiro..."
          music="musica epica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Videos 
          likes={456}
          messages={689}
          shares={890}
          name="Diogo"
          description="Gato olhando pro dedo"
          music="musica boa demais"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
