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

//const addPost = (state, posts) => {
//    const post = {
//        id: posts.length++,
//        title: state.newPostTitle,
//        text: state.newPostText,
//        img: '/images/post.jpeg',
//    };
//    posts.push(post);
//}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length++,
                    title: action.post.title,
                    text: action.post.text,
                    img: '/images/post.jpeg',
                }]
            };
        case UPDATE_NEW_POST_TITLE:
            return {
                ...state,
                newPostTitle: action.value
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.value
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (post) => {
    return {type: ADD_POST, post}
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