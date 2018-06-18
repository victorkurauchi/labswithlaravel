import { createStore } from 'redux';

let ACTIONS = {
  ADD_TODO: ({ todos, ...state }, { text }) => {
    return {
      todos: [...todos, {
        id: Math.random().toString(36).substring(2),
        text
      }],
      ...state
    }
  },

  FILTER_BOOKS: ({ books, ...state }, { book }) => ({
    books: books.filter( i => i === book ),
    ...state
  }),

  SET_PAGE: ({ currentPage, ...state}, { page }) => {
    return {
      currentPage: page,
      ...state
    }
  },

  SET_START_INDEX: ({ startIndex, ...state }, { index }) => {
    console.log('idnex to be set', index)
    return {
      startIndex: index,
      ...state
    }
  },

  BOOKS_SUCCESS: ({ books, totalItems, ...state }, { result }) => {
    return {
      books: result.items,
      totalItems: result.totalItems,
      ...state
    }
  },

  BOOKS_FAILURE: ({ error, ...state }) => ({
    error,
    ...state
  }),
};

const INITIAL = {
  todos: [],
  books: [],
  currentPage: 1,
  startIndex: 0,
  totalItems: 0,
  q: 'harry potter',
  error: null
};

export default createStore( (state, action) => (
  action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined);
