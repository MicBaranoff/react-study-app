const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let stateCopy = {
                ...state,
                list: [...state.list],
                newMessage: '',
            }
            stateCopy.list[state.currentDialogID].chat.push({
                self: true,
                text: action.message,
                avatar: null,
            });
            return stateCopy;
        default:
            return state;
    }
};

export const sendMessageActionCreator = (message) => {
    return {type: SEND_MESSAGE, message}
}

export default dialogReducer;