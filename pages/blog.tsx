import {NextPage} from "next";
import React, {useState} from 'react'
import moment from "moment";
import styled from "styled-components";

import {BlogPost, fetchBlogPosts} from "../services/blogPosts";

import PostComponent from "../components/Molecule/PostComponent";
import Layout from "../components/Layout";
import SearchComponent from "../components/atoms/SearchComponent";

const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Select = styled.select`    
    padding: 0.6rem 1rem;
    border: 2px solid #bcbcbc;
    border-radius: 5px;
    margin-left: 1rem;
    cursor: pointer;
`;

interface Props {
    posts: ReadonlyArray<BlogPost>;
}

const Blog: NextPage<Props> = ({posts}) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [sort, setSort] = useState<string>('descending');

    const filteredList = searchInput.length
        ? posts.filter(blogPost =>
            blogPost.title.toLowerCase().includes(searchInput.toLowerCase())
        )
        : posts;

    const sortedList = sort === 'ascending' ?
        [...filteredList].sort((a, b) => moment(a.date).unix() - moment(b.date).unix()) :
        [...filteredList].sort((a, b) => moment(b.date).unix() - moment(a.date).unix());

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    return (
        <Layout>
            <h1 data-testid="page-title">blog</h1>
            <ActionsContainer>
                <SearchComponent onChange={setSearchInput}/>
                <Select value={sort} onChange={handleSortChange}>
                    <option value='ascending'>Ascending</option>
                    <option value='descending'>Descending</option>
                </Select>
            </ActionsContainer>
            <div>
                {sortedList.map(blogPost => (
                    <PostComponent {...blogPost} key={blogPost.id}/>
                ))}
            </div>
        </Layout>
    );
};

Blog.getInitialProps = async () => ({posts: await fetchBlogPosts()});

export default Blog
