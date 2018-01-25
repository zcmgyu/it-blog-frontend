import React from "react";
import PostCard from "../PostCard";
import { connect } from "react-redux";
import { getBookmark } from "../../actions/user";
import Typography from "material-ui/Typography/Typography";

class BookmarkList extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        console.log("COME HERE")
        dispatch(getBookmark.request());
    }

    render() {
        const { bookmark } = this.props;
        console.log("DEBUG ++++++++++++++")
        console.log(this.props)
        if (typeof bookmark === 'undefined' || !bookmark)
            return (
                <Typography type="body2" gutterBottom>
                    No posts
        </Typography>
            );
        return <div>{bookmark.map(post => <PostCard key={post.id} post={post} />)}</div>;
    }
}


const mapStateToProps = state => ({
    bookmark: state.user.bookmark
});

export default connect(mapStateToProps)(BookmarkList);
