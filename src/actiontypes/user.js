import createRequestTypes from "./";

export const GET_CURRENT_USER = createRequestTypes("GET_CURRENT_USER");

export const FORGOT_PASSWORD = createRequestTypes("FORGOT_PASSWORD");
export const RESET_PASSWORD = createRequestTypes("RESET_PASSWORD");
export const GET_POSTS_BY_AUTHOR_ID = createRequestTypes(
  "GET_POSTS_BY_AUTHOR_ID"
);

export const GET_BOOKMARK = createRequestTypes("GET_BOOKMARK");

export const GET_FOLLOWING = createRequestTypes("GET_FOLLOWING");
export const GET_FOLLOWERS = createRequestTypes("GET_FOLLOWERS");
export const FOLLOW = createRequestTypes("FOLLOW");

export const RESET_BOOKMARK = createRequestTypes("RESET_BOOKMARK");
export const RESET_FOLLOWING = createRequestTypes("RESET_FOLLOWING");

export const GET_NOTIFICATIONS = createRequestTypes("GET_NOTIFICATIONS");