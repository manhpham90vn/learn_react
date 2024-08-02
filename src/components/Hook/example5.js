import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import queryString from "query-string";

const Example5 = () => {

    const [posts, setPosts] = React.useState([]);

    // đại diện param request
    const [filter, setFilter] = React.useState({
        _page: 1,
        _limit: 10,
        title_like: null
    });

    // state cho paging
    const [pagination, setPagination] = React.useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    });

    const handlePageChange = (page) => {
        setFilter({
            ...filter,
            _page: page
        })
    }

    const handleSubmit = (value) => {
        setFilter({
            ...filter,
            title_like: value,
            _page: 1
        })
    }

    // cách call api đúng
    useEffect(() => {
        async function fetchPosts() {
            try {
                const params = queryString.stringify(filter)
                const baseUrl = `https://js-post-api.herokuapp.com/api/posts?${params}`
                const response = await fetch(baseUrl)
                const json = await response.json();
                const {data, pagination} = json;
                setPosts(data)
                setPagination(pagination)
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts()
    }, [filter]);

    return (<div>
        <PostFilterForm onSubmit={handleSubmit}/>
        <PostList posts={posts}/>
        <Pagination pagination={pagination} onPageChange={handlePageChange}/>
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

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
    onPageChange: null
}

function Pagination(props) {

    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination;
    const totalPage = Math.ceil(_totalRows / _limit);

    const handlePageChange = (page) => {
        onPageChange(page);
    }

    return (
        <div>
            <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
                Prev
            </button>
            <button disabled={_page >= totalPage} onClick={() => handlePageChange(_page + 1)}>
                Next
            </button>
        </div>
    );
}

const PostFilterForm = ({onSubmit}) => {

    // useRef không thay đổi giữa các lần render
    const typingTimeOutRef = useRef(null)

    const handleSearchTermChange = (e) => {
        e.preventDefault()

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current)
        }

        typingTimeOutRef.current = setTimeout(() => {
            onSubmit(e.target.value)
        }, 300)
    }

    return (
        <form>
            <input type="text" onChange={handleSearchTermChange}/>
        </form>
    );
};

PostFilterForm.prototype = {
    onSubmit: PropTypes.func
}

PostFilterForm.defaultProps = {
    onSubmit: null
}

export default Example5;