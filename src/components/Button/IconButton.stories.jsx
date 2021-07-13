import { IconButton } from './IconButton';
import { ReactComponent as AppleIcon } from './apple.svg';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    svg: { control: { type: 'inline-radio', options: [<AppleIcon />] } },
    bgColor: { control: 'color' },
  },
};

export const Template = (args) => <IconButton {...args} />;

Template.args = {
  svg: <AppleIcon />,
  bgColor: 'tomato',
  onClick: () => alert('on click!!'),
};
