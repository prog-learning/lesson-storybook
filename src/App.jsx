import './styles/global.css';
import { Button } from './components/Button';
import { PostCard } from './components/PostCard';
import { FontIcon } from './components/FontIcon';
import { TalkCard } from './components/TalkCard';

function App() {
  return (
    <div>
      <h1>Lesson Storybook</h1>
      <hr />
      Button:
      <Button label='Buttonだよ' round onClick={() => {}} />
      <hr />
      PostCard:
      <PostCard name='nob' content='はげますように' date={new Date()} dark />
      <hr />
      FontIcon:
      <FontIcon />
      <hr />
      TalkCard:
      <TalkCard
        imgSrc='/doflamingo.png'
        message='お〜い、ブンブンゴマ作って遊ぼうぜ〜'
      />
      <hr />
    </div>
  );
}

export default App;
