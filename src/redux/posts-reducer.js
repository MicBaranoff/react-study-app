const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TITLE = 'UPDATE_NEW_POST_TITLE';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            title: 'Title',
            text: 'Lorem ipsum dolor.',
            img: '/images/post.jpeg',
        },
        {
            id: 1,
            title: 'Title',
            text: 'Lorem ipsum dolor.',
            img: '/images/post.jpeg',
        },
        {
            id: 1,
            title: 'Title',
            text: 'Lorem ipsum dolor.',
            img: '/images/post.jpeg',
        },
    ],
    newPostTitle: 'post title',
    newPostText: 'post text'
}

const addPost = (state) => {
    const post = {
        id: state.posts.length++,
        title: state.newPostTitle,
        text: state.newPostText,
        img: '/images/post.jpeg',
    };
    state.posts.push(post);
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            addPost(state);
            break;
        case UPDATE_NEW_POST_TITLE:
            state.newPostTitle = action.value;
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.value;
            break;
    }
    return state;
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTitleActionCreator = (value) => {
    return {
        type: UPDATE_NEW_POST_TITLE,
        value,
    }
}
export const updateNewPostTextActionCreator = (value) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        value,
    }
}

export default postsReducer;