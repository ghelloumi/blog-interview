import React from "react";
import styled from "styled-components";
import moment from "moment";

const Date = styled.p`
   margin-bottom: 0;
`;

export interface Props {
    date: string;
}

const DateComponent: React.FC<Props> = ({date}) => (
    <Date>{moment(date).format("DD/MM/YYYY, HH:mm")}</Date>
);

export default DateComponent;
