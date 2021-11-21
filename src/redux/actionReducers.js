import axios from "axios";
//constant
const dataInicial = {
  isAuth: null,
  array: [],
  detail: [],
};
const IS_AUTH_SET = "IS_AUTH_SET";
const SEARCH_H_OK = "SEARCH_H_OK";
const POST_H_OK = "POST_H_OK";
const DETAIL_H_OK = "DETAIL_H_OK";
const DELETE_H_OK = "DELETE_H_OK";
const EDIT_H_OK = "EDIT_H_OK";


//reducer
export default function heroesReducer(state = dataInicial, action) {
  switch (action.type) {
    case IS_AUTH_SET:
      return { ...state, isAuth: true };
    case SEARCH_H_OK:
      return { ...state, array: action.payload };
    case DETAIL_H_OK:
      return { ...state, detail: action.payload };
case POST_H_OK:
      return { ...state, detail: action.payload };
    case EDIT_H_OK:
      return { ...state, detail: action.payload };
    case DELETE_H_OK:
      return { ...state};
    default:
      return state;
  }
}
//actions
export const isAuth = () => (dispatch, getState) => {
  try {
    dispatch({
      type: IS_AUTH_SET,
      payload: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchHeroesAction = (name) => async (dispatch, getState) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: SEARCH_H_OK,
      payload: res.data,
    });

  } catch (error) {
    console.log(error);
  }
};

export const detailAction = (id) => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
    dispatch({
      type: DETAIL_H_OK,
      payload: [res.data],
    });
  } catch (error) {
    console.log(error);
  }
};
export const editPost = (id,item) => async (dispatch) => {
  try {
    const res = await axios.put("https://jsonplaceholder.typicode.com/posts/" + id, item);
 dispatch({
      type: EDIT_H_OK,
      payload: [res.data],
    });
 
  } catch (error) {
    console.log(error);
  }
};
export const newPost = (item) => async (dispatch) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts/", item);
 dispatch({
      type: POST_H_OK,
      payload: [res.data],
    });
  
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    const res = await axios.delete("https://jsonplaceholder.typicode.com/posts/" + id);
    dispatch({
      type: DELETE_H_OK,
      
    });
       
  } catch (error) {
    console.log(error);
  }
};