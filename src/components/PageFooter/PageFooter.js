import { css } from '../../../styled-system/css'
import Container from '../Container/Container'
import { H3, Space } from '../Typography'

const PageFooter = () => {
  return (
    <div
      className={css({
        w: 'full',
        backgroundColor: 'secondary',
        color: 'white',
        h: '60',
      })}
    >
      <Container>
        <div>
          <Space sp="6" />
          <H3 hcolor={'white'}>We Work Remote</H3>
          <Space sp="3" />
          <p
            className={css({
              lineHeight: 'h5',
            })}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            fuga tempore dolores in recusandae maiores ipsam, sit amet ipsum
            dolor sit amet consectetur adipisicing consectetur adipisicing omnis
            nisi non dolor?
          </p>
        </div>
      </Container>
    </div>
  )
}

export default PageFooter
