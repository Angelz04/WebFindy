import { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchUsers, fetchPosts, fetchComments } from '../services/Endpoint';

const initialState = {
  users: [],
  posts: [],
  comments: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_COMMENTS':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadData = async () => {
    try {
      const users = await fetchUsers();
      const posts = await fetchPosts();
      const comments = await fetchComments();
      dispatch({ type: 'SET_USERS', payload: users });
      dispatch({ type: 'SET_POSTS', payload: posts });
      dispatch({ type: 'SET_COMMENTS', payload: comments });
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
