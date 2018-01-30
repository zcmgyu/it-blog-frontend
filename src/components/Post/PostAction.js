import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Material UI
import FavoriteIcon from "material-ui-icons/Favorite";
import BookmarkIcon from "material-ui-icons/Bookmark";
import IconButton from "material-ui/IconButton";
import ToggleIcon from "material-ui-toggle-icon";
import SharingButton from "../SharingButton";

const PostAction = (props) => {
    const { favorite, bookmark, favorited, bookmarked, shareUrl, title } = props
    return (
        <div>
            <IconButton onClick={favorite} aria-label="Add to favorites">
                <ToggleIcon
                    on={favorited}
                    onIcon={<FavoriteIcon color="accent" />}
                    offIcon={<FavoriteIcon />}
                />
            </IconButton>

            <IconButton aria-label="Bookmark" onClick={bookmark}>
                <ToggleIcon
                    on={bookmarked}
                    onIcon={<BookmarkIcon color="accent" />}
                    offIcon={<BookmarkIcon />}
                />
            </IconButton>
            <SharingButton shareUrl={shareUrl} title={title} />
        </div>
    )
}

PostAction.propTypes = {
    favorited: PropTypes.bool.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    favorite: PropTypes.func.isRequired,
    bookmark: PropTypes.func.isRequired,
    shareUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default connect()(PostAction)