import React from "react";
import styled from "styled-components";

const Text = styled.p`
    padding: 0 1rem;
    color: #283479;
`;

export interface Props {
    text: string
}

const DescriptionComponent: React.FC<Props> = ({text}) => (
    <Text>{text}</Text>
);

export default DescriptionComponent;
