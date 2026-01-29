import LineBorder from './LineBorder'

const meta = {
  title: 'Components/LineBorder',
  component: LineBorder,
  tags: ['autodocs'],
  argTypes: {
    h: {
      control: 'select',
      options: [50, 100, 200],
      defaultValue: 100,
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const SmallLineBorder = ({ h = 50 }) => (
  <div style={{ height: `${h}px` }}>
    <LineBorder />
  </div>
)
export const DefaultLineBorder = ({ h = 100 }) => (
  <div style={{ height: `${h}px` }}>
    <LineBorder />
  </div>
)
export const LargeLineBorder = ({ h = 200 }) => (
  <div style={{ height: `${h}px` }}>
    <LineBorder />
  </div>
)
