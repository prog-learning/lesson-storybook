import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
    bgColor: { control: 'color' },
    round: { control: 'boolean' },
    size: { control: { type: 'radio' }, options: ['middle', 'big'] },
  },
};

const Template = (args) => <Button {...args} />;

export const Tomato = Template.bind({});
Tomato.args = {
  label: 'buttonだよ',
  round: true,
  bgColor: 'tomato',
  size: 'middle',
  onClick: () => alert('on click!!'),
};

export const Banana = Template.bind({});
Banana.args = {
  label: 'BIG BUTTON',
  round: true,
  color: 'black',
  bgColor: 'gold',
  size: 'big',
  onClick: () => alert('on click!!'),
};
