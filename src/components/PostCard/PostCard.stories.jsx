import { PostCard } from './PostCard';

export default {
  title: 'Components/PostCard',
  component: PostCard,
  argTypes: {
    name: { control: 'text' },
    content: { control: 'text' },
    date: { control: 'date' },
    dark: { control: 'boolean' },
    tags: {
      control: { type: 'inline-check' },
      options: ['apple', 'progL', 'storybook'],
    },
  },
};

export const PostCardComponent = (args) => <PostCard {...args} />;

PostCardComponent.args = {
  name: 'Steve Nobs 🍎',
  content:
    '私はりんごであり,りんごは絶対である.ゆえに,トマトやバナナは論外である.',
  date: new Date('2020/02/20 20:20'),
  tags: ['apple'],
  dark: true,
  onClick: () => alert('on click!!'),
};
