export function getBooks(books) {
  return {
    type: 'GET_BOOKS',
    books
  };
}

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

export function setPage(page) {
  return {
    type: 'SET_PAGE',
    page
  };
}

export function setStartIndex(index) {
  return {
    type: 'SET_START_INDEX',
    index
  };
}

export function loadBooksSuccess(books) {
  return {
    type: 'BOOKS_SUCCESS',
    result: books
  };
}

export function loadBooksFailure(error) {
  return {
    type: 'BOOKS_FAILURE',
    error
  };
}
