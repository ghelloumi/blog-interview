import React from "react";
import styled from "styled-components";
import ImageComponent from "../atoms/ImageComponent";
import DateComponent from "../atoms/DateComponent";
import DescriptionComponent from "../atoms/DescriptionComponent";

const PostContainer = styled.div`
    background: #ffffff;
    border: 2px solid #c6c6c6;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0 10px 0;
`;

const Title = styled.h2`
    color: #5f5f5f;
    margin-bottom: 1rem;
    margin-top: 0;
`;

const Header = styled.div`
  padding: 1rem;
`;

export interface Props {
    id: number;
    src: string;
    title: string;
    text: string;
    date?: string;
}

const PostComponent: React.FC<Props> = ({src, title, text, date}) => (
    <PostContainer>
        <Header>
            <Title>{title}</Title>
            {date && <DateComponent date={date}/>}
        </Header>
        <ImageComponent src={src}/>
        <DescriptionComponent text={text}/>
    </PostContainer>
);

export default PostComponent;
