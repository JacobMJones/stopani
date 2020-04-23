import React from 'react';
import { useStateValue } from "../../state/StateProvider";
import images from '../../functions/imageLoader'
import { Face, FaceContainer } from './styles'

const IMAGE_SIZE = 500
function FaceMaker({ modifier }) {
    const [{ aniCount }] = useStateValue()
    const layerNames = Object.keys(images)


    const generateNewFace = () => {
        const f = Object.keys(images).map((item, index) => {
            return <FaceContainer height={IMAGE_SIZE} marginTop={index !== 0 && `-${IMAGE_SIZE}px`} >
                <Face src={require(`../../images/${layerNames[index]}/${images[layerNames[index]][aniCount + modifier[item].indexModifier]}`)} />
            </FaceContainer>

        })
        return f;
    }

    return <div>
        {generateNewFace()}
    </div>;
}

export default FaceMaker;