import React from "react";
import PostsList from "./PostsList";
import {connect} from "react-redux";
import withAuthRedirectComponent from "../../HOC/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.postsReducer,
    };
}
const mapDispatchToProps = () => {
    return {};
}

const postsList = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent)(PostsList);

export default postsList;