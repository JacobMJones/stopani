import React from 'react';
import Face from '../face'



const makeFaceModifiers = () => {
  const eyeModifier = Math.random() < 0.5 ? 0 : 4
  const noseModifier = Math.random() < 0.5 ? 0 : 4

  const modifier = {
    topEye: { indexModifier: eyeModifier },
    noseBottom: { indexModifier: noseModifier }
  }
  console.log('get modifier', modifier)
  return modifier
}

const modifier = [makeFaceModifiers(), makeFaceModifiers(), makeFaceModifiers()]
function Layout() {


  return <div>
    {modifier.map((item, index) => {
      return <Face modifier={item} />
    })}
  </div>;
}

export default Layout;