import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const ButtonComponent = () => (
  <Button label='buttonだよ' onClick={() => alert('on click!!')} />
);
