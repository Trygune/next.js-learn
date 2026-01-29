import Container from './Container'

const meta = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'component',
    },
  },
}

export default meta

export const WithContainer = {
  args: {
    children: (
      <>
        <div
          style={{
            width: '100%',
            marginBottom: '10px',
            backgroundColor: 'red',
            padding: '10px',
          }}
        >
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: '10px',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
          }}
        >
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit.lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit.
        </div>
        <div
          style={{
            width: '100%',
            marginBottom: '10px',
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
          }}
        >
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit.lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
          ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor
          sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </div>
      </>
    ),
  },
}
