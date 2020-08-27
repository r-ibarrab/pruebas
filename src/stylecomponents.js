import styled from 'styled-components';

export const MainTitle = styled.h1`
color:${(props)=> props.color ? 'blue' : 'red'};
margin:0 auto;
background-color:teal;
width:300px;
height:300px;
display:flex;
justify-content:center;
align-items:center;
`