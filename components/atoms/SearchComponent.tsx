import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    border: 2px solid #bcbcbc;
    border-radius: 5px;
`;

export interface Props {
  onChange: (value: string) => void;
}

const SearchComponent: React.FC<Props> = ({ onChange }) => (
  <Input onChange={e => onChange(e.target.value)} placeholder={"Filter Posts"} />
);

export default SearchComponent;
