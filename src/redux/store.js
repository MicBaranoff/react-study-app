import postsReducer from "./posts-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        postsPage: {
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
        },
        dialogs: {
            list: [
                {
                    id: 1,
                    name: 'Svetka Komarova',
                    chat: [
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        }
                    ],
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                },
                {
                    id: 2,
                    name: 'Dima Petrov',
                    chat: [
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        }
                    ],
                    avatar: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
                },
                {
                    id: 3,
                    name: 'Vova Andrianov',
                    chat: [
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        }
                    ],
                    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                },
                {
                    id: 4,
                    name: 'Danya Lianka',
                    chat: [
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        },
                        {
                            self: false,
                            text: 'Hi, how are you ?',
                            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                        },
                        {
                            self: true,
                            text: 'Hey Megan ! It\'s been a while 😃?',
                            avatar: null,
                        }
                    ],
                    avatar: 'https://i.pinimg.com/originals/a9/26/52/a926525d966c9479c18d3b4f8e64b434.jpg'
                }
            ],
            newMessage: 'message',
            currentDialogID: 0,
        }
    },
    _callSubscriber() {
        console.log('render');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.postsPage = postsReducer(this._state.postsPage, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._callSubscriber(this._state);
    }
}

export default store;