import styled from 'styled-components'


export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div{
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type=text],textarea {
  
  padding:10px;
  margin:10px 5px;
  border: 1px solid white;
  ::placeholder{
  color: grey;
}
}

`

export const SubTitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
  margin: 20px 0;
`

export const Button = styled.button`
  background-color: white;
  margin: 10px;
  padding: 10px;
  color: black;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`

