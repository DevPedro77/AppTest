import {render} from '@testing-library/react-native'
import { Title } from '../../src/Title'

describe("Tests title component", () => {


  it("render title corretamente", () => {
    const {getByText} = render(<Title title='Pedro'/>)

    expect(getByText('Pedro')).toBeTruthy()
  })

  it("checando as propiedades de estilos", () => {
      const {getByText} = render(<Title title='Pedro'/>)

      const titleElement = getByText('Pedro')

      expect(titleElement.props.style).toMatchObject({
        fontSize: 28,
        color: 'red',
        marginVertical: 10
      })
  })
}) 