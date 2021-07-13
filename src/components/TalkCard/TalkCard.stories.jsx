import { TalkCard } from './TalkCard';
import enel from './enel.png';

export default {
  title: 'Components/TalkCard',
  component: TalkCard,
  argTypes: {
    imgSrc: {
      control: {
        type: 'select',
        options: ['/doflamingo.png', enel, 'https://picsum.photos/100'],
      },
    },
    message: { control: 'text' },
  },
};

export const TalkCardComponent = (args) => <TalkCard {...args} />;

TalkCardComponent.args = {
  imgSrc: '/doflamingo.png',
  message: '先生、おやつにバナナは含まれますか？',
};
