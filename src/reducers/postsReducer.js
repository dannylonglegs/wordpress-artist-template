export default (state = {}, action) => {
    switch (action.type) {
     case 'GET_POSTS':
      return {
       result: action.posts
      }
     default:
      return state
    }
   }