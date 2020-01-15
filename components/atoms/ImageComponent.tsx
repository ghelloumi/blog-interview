import React from "react";
import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    height: auto;
`;

export interface Props {
    src: string;
}

const ImageComponent: React.FC<Props> = ({src}) => (
    <Image
        src={`https://upply-interview.herokuapp.com/images/${src}`}
    />
);

export default ImageComponent;
