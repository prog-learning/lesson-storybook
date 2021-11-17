import { Card } from '.';

export default {
  title: 'Components/Card',
  component: Card,
};

/* コンポーネントのテンプレートを作成し,受け取った引数を渡すようにしてあげる */
const Template = (args) => <Card {...args} />;

/* 作ったテンプレートから複製し,props自由に指定することができる */
export const Default = Template.bind({});
Default.args = {
  title: 'タイトル',
  text:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
};

export const Sample = Template.bind({});
Sample.args = {
  title: '挫折しないStorybookの始め方',
  text:
    '僕自身初学者だった頃に（今もそうだけど）「Storybookいいよ！」と言われた使ってみたかったけど、使い方も良さもわからなくて3回くらい挫折したので、そんな人をこれ以上生みださないために書きました。',
};
