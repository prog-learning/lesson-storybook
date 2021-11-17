import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: 'boolean' }, // 上の書き方と同じ（typeのみの場合は省略可）
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
};

export const Component = (args) => <Button {...args} />;
Component.args = {
  label: 'Button',
  disabled: true,
  size: 'large',
};
