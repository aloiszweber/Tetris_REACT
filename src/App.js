import Tetris from './components/Tetris';
import { STAGE_WIDTH } from './gameHelpers';

const App = () => {
  console.log(STAGE_WIDTH)
  return (
    <div className="App">
      <Tetris />
    </div>
  )
};

export default App;
