import React, {useEffect} from 'react';
import PropTypes from "prop-types";

const Example5 = () => {

    const baseUrl = "https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1"

    const [posts, setPosts] = React.useState([]);

    // cách call api đúng
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(baseUrl)
                const json = await response.json();
                const {data} = json;
                setPosts(data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts()
    }, []);

    return (<div>
        <PostList posts={posts}/>
    </div>);
};

PostList.propTypes = {
    posts: PropTypes.array
};

PostList.defaultProps = {
    posts: []
}

function PostList(props) {

    const {posts} = props;

    return (<ul>
        {posts.map((post) => (<li key={post.id}>{post.title}</li>))}
    </ul>);
}

export default Example5;