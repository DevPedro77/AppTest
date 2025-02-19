import { render, fireEvent } from '@testing-library/react-native'
import App from '../../App'

describe("App componente testes", () => {
  it("Teste render app component", () => {
    render(<App/>)
  })

  it("should change counter on press button", () =>{
    const {getByText, getByTestId} = render(<App/>)

    const button = getByText("+")
    fireEvent.press(button)
    fireEvent.press(button)

    const counterText = getByTestId("counter")

    expect(counterText.props.children).toBe(2)
  })

  it("should decrease counter on clicking button", () => {
    const {getByText, getByTestId} = render(<App/>)

    const button = getByText("-")
    fireEvent.press(button)

    const counterText = getByTestId('counter')

    expect(counterText.props.children).toBe(-1)
  })

})