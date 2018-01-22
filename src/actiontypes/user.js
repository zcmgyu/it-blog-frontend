import createRequestTypes from "./";

export const GET_CURRENT_USER = createRequestTypes("GET_CURRENT_USER");

export const FORGOT_PASSWORD = createRequestTypes("FORGOT_PASSWORD");
export const RESET_PASSWORD = createRequestTypes("RESET_PASSWORD");
export const GET_POSTS_BY_AUTHOR_ID = createRequestTypes(
  "GET_POSTS_BY_AUTHOR_ID"
);
