import axios from "axios";

export interface BlogPost {
  id: number;
  src: string;
  title: string;
  text: string;
  date?: string;
}

export const fetchBlogPosts = async () => {
  try {
    const { data } = await axios.get<ReadonlyArray<BlogPost>>(
      "https://upply-interview.herokuapp.com/"
    );
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
