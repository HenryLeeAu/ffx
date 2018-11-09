
import styled from 'styled-components';
import theme from 'styled-theming';
const buttonNormalColor = theme('mode', {
  default: '#000000',
  red: '#ff4d78',
  blue: '#278aef',
});
const buttonHoverColor = theme('mode', {
  default: '#333333',
  red: '#ca3559',
  blue: '#1a64af',
});


const Button = styled.button`
  cursor:pointer;
  outline:none;
  background-color: ${buttonNormalColor};
  font-family: arial;
  color: #fff;
  border:0px solid #ccc;
  font-size:1.5rem;
  padding:20px;
  &:hover{
    background-color: ${buttonHoverColor};
  }
`;
export default Button