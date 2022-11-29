import React from "react";
import PostsList from "./PostsList";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.postsReducer,
    };
}
const mapDispatchToProps = () => {
    return {};
}

const postsList = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default postsList;