import styled from "styled-components";

const d = props => props.hueRotate && props.hueRotate

const Face = styled.img`
margin:auto;
max-width: 100%;
-webkit-transform: ${props=> props.transform && `${props.transform} `};
transform:${props=> props.transform && `${props.transform} `};

`;

const FaceContainer = styled.div`
height:${props=> props.height && props.height}px;
margin-top: ${props=> props.marginTop && props.marginTop};
text-align:center;
`

export {Face, FaceContainer}


// const Face = styled.img`
// margin:auto;
// max-width: 100%;
// //   -webkit-filter:hue-rotate(deg) ;
// //   filter: hue-rotate(${d}deg);
// //width:auto;
// // -webkit-filter: drop-shadow(16px 16px 10px rgba(0,0,0,0.2));
// // filter: drop-shadow(16px 16px 10px rgba(0,0,0,0.2));
//  //scale:.6;
// // overflowY: auto;
// // overflowX: hidden;
// -webkit-transform: ${props=> props.transform && `${props.transform} `};

// transform:${props=> props.transform && `${props.transform} `};

// `;