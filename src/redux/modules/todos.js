import uuid from "react-uuid";

// action value
const ADD_TODO = "ADD_TODO";
const COMPLETE_STATE_TODO = "COMPLETE_STATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// 초기값 
const initialState = [
    {
        id: uuid(),
        title: '제목1',
        contents: '내용1',
        isDone: false,
      },
      {
        id: uuid(),
        title: '제목2',
        contents: '내용2',
        isDone: true,
      },
      {
        id: uuid(),
        title: '제목3',
        contents: '내용3',
        isDone: false,
      },
      {
        id: uuid(),
        title: '제목4',
        contents: '내용4',
        isDone: false,
      },
];

// action creator
export const addTodo = (payload) =>{
    return {
        type: ADD_TODO,
        payload
    };
};

export const completeStateToto = (payload) =>{
    return {
        type: COMPLETE_STATE_TODO,
        payload: payload
    };
};

export const deleteTodo = (payload) =>{
    return {
        type: DELETE_TODO,
        payload
    };
};



// 리듀서 
const todos = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case COMPLETE_STATE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo, isDone: !todo.isDone
                    }
                } else {
                    return todo;
                }
            });

        case DELETE_TODO:
            return state.filter((todo) => {
                return todo.id !== action.payload.id
            });

        default:
            return state;
    }
    
}

export default todos;