// import React from 'react';
// import styled from 'styled-components';
// import keyframes from 'react-keyframes';
//
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
//
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
//   border: 2px solid;
// `;
//
// const Button = styled.button`
//
//   background: ${props => props.primary ? "palevioletred" : props.black ? "black" : "white"};
//   color: ${props => props.primary ? "white" : props.black ? "white" : "palevioletred"};
//
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid ${props => props.black ? "" : "palevioletred"};
//   border-radius: 3px;
// `;
//
// const StyledTitle = styled(Title)`
//     color: black;
// `;
//
// const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />;
//
// const Link = ({ className, children }) => (
//     <a className={className}>
//         {children}
//     </a>
// );
//
// const StyledLink = styled(Link)`
//   color: palevioletred;
//   font-weight: bold;
// `;
//
// const StyledInput = styled.div`
//     margin: 20px auto;
//     text-align: center;
//     padding: 20px;
//     width:100%;
// `;
//
// const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.inputColor || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;
//
// const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;
//
//   &:hover {
//     color: red; // <Thing> when hovered
//   }
//
//   & ~ & {
//     background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }
//
//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }
//
//   &.something {
//     background: orange; // <Thing> tagged with an additional CSS class ".something"
//   }
//
//   .something-else & {
//     border: 1px solid; // <Thing> inside another element labeled ".something-else"
//   }
// `;
//
// const Input2 = styled.input.attrs(props => ({
//     type: "text",
//     size: props.size || "1em",
// }))`
//   border: 2px solid palevioletred;
//   margin: ${props => props.size};
//   padding: ${props => props.size};
// `;
//
// // Input's attrs will be applied first, and then this attrs obj
// const PasswordInput = styled(Input2).attrs({
//     type: "password",
// })`
//   // similarly, border will override Input's border
//   border: 2px solid aqua;
// `;
//
// // Create the keyframes////////////////Animation///////////////
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//
//   to {
//     transform: rotate(360deg);
//   }
// `;
//
// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;
//
//
//
// function StyledComponent(props) {
//     return (
//         <div>
//             <Wrapper>
//                 <StyledTitle>
//                     Hello, Ilhom!
//                 </StyledTitle>
//             </Wrapper>
//             <div className="row my-5">
//                 <div className="col-md-4 border">
//                     <Button>Normal</Button>
//                     <Button primary>Primary</Button>
//                     <Button black>Black</Button>
//                 </div>
//                 <div className="col-md-4 border">
//                     <Button as={ReversedButton} primary>Styled</Button>
//                 </div>
//                 <div className="col-md-4">
//                     <Link>Unstyled, boring Link</Link>
//                     <br />
//                     <StyledLink>Styled, exciting Link</StyledLink>
//                 </div>
//             </div>
//             <StyledInput>
//                 <Input placeholder="@ASUS" type="text" />
//                 <Input defaultValue="@ACER" type="text" inputColor="rebeccapurple" />
//             </StyledInput>
//             <>
//                 <Thing>Hello world!</Thing>
//                 <Thing>How ya doing?</Thing>
//                 <Thing className="something">The sun is shining...</Thing>
//                 <div>Pretty nice day today.</div>
//                 <Thing>Don't you think?</Thing>
//                 <div className="something-else">
//                     <Thing>Splendid.</Thing>
//                 </div>
//             </>
//             <div>
//                 <Input2 placeholder="A bigger text input" size="2em" />
//                 <br />
//                 <PasswordInput placeholder="A bigger password input" size="2em" />
//             </div>
//             <Rotate>&lt; 💅🏾 &gt;</Rotate>
//         </div>
//     );
// }
//
// export default StyledComponent;