import action from "./";
import {
  GET_CURRENT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_POSTS_BY_AUTHOR_ID,
  GET_BOOKMARK,
  GET_FOLLOWING,
  GET_FOLLOWERS,
  FOLLOW,
  RESET_BOOKMARK,
  RESET_FOLLOWING,
  GET_NOTIFICATIONS
} from "../actiontypes/user";

export const getCurrentUser = {
  request: () => action(GET_CURRENT_USER.REQUEST),
  success: response => action(GET_CURRENT_USER.SUCCESS, { response }),
  failure: error => action(GET_CURRENT_USER.FAILURE, { error })
};

export const forgotPassword = {
  request: payload => action(FORGOT_PASSWORD.REQUEST, { payload }),
  success: response => action(FORGOT_PASSWORD.SUCCESS, { response }),
  failure: error => action(FORGOT_PASSWORD.FAILURE, { error })
};

export const resetPassword = {
  request: payload => action(RESET_PASSWORD.REQUEST, { payload }),
  success: response => action(RESET_PASSWORD.SUCCESS, { response }),
  failure: error => action(RESET_PASSWORD.FAILURE, { error })
};

export const getPostsByAuthorId = {
  request: payload => action(GET_POSTS_BY_AUTHOR_ID.REQUEST, { payload }),
  success: response => action(GET_POSTS_BY_AUTHOR_ID.SUCCESS, { response }),
  failure: error => action(GET_POSTS_BY_AUTHOR_ID.FAILURE, { error })
};

export const getBookmark = {
  request: () => action(GET_BOOKMARK.REQUEST),
  success: response => action(GET_BOOKMARK.SUCCESS, { response }),
  failure: error => action(GET_BOOKMARK.FAILURE, { error })
};

export const getFollow = {
  following: {
    request: payload => action(GET_FOLLOWING.REQUEST, { payload }),
    success: response => action(GET_FOLLOWING.SUCCESS, { response }),
    failure: error => action(GET_FOLLOWING.FAILURE, { error })
  },
  followers: {
    request: payload => action(GET_FOLLOWERS.REQUEST, { payload }),
    success: response => action(GET_FOLLOWERS.SUCCESS, { response }),
    failure: error => action(GET_FOLLOWERS.FAILURE, { error })
  }
};

export const putFollow = {
    request: payload => action(FOLLOW.REQUEST, { payload }),
    success: response => action(FOLLOW.SUCCESS, { response }),
    failure: error => action(FOLLOW.FAILURE, { error })
}

export const resetBookmark = {
  request: () => action(RESET_BOOKMARK.REQUEST),
  success: response => action(RESET_BOOKMARK.SUCCESS, { response }),
  failure: error => action(RESET_BOOKMARK.FAILURE, { error })
};

export const resetFollowing = {
  request: () => action(RESET_FOLLOWING.REQUEST),
  success: response => action(RESET_FOLLOWING.SUCCESS, { response }),
  failure: error => action(RESET_FOLLOWING.FAILURE, { error })
};

export const getNotifications = {
  request: () => action(GET_NOTIFICATIONS.REQUEST),
  success: response => action(GET_NOTIFICATIONS.SUCCESS, { response }),
  failure: error => action(GET_NOTIFICATIONS.FAILURE, { error })
};
