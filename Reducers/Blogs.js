const initialState = {
  blogs: []
}

export default (state = initialState, action) => {

  switch(action.type){

    case 'GETTING_BLOGS':
    case 'GETTING_BLOGS_FAILED':
      return Object.assign({},state,{
      })

    case 'GET_BLOGS_SUCCESS':
      return Object.assign({},state,{
        blogs: action.blogs
      })
  }
  return state;
}
