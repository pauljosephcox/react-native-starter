
import { APIGet } from '../Services/API';


// Get App Enabled Site
export function getBlogs(site){
  return function(dispatch){

    dispatch(gettingBlogs())

    APIGet(site.siteurl+'/api/v1/blogs')
    .then(res => res.json())
    .then(json => {
      dispatch(gotBlogs(json))
    })
    .catch(e => {
        dispatch(gettingBlogsFailed())
    })
  }
}

function gettingBlogs(){
  return {
    type: 'GETTING_BLOGS',
    blogs: [],
  }
}

function gotBlogs(blogs){
  return {
    type: 'GET_BLOGS_SUCCESS',
    blogs: blogs
  }
}

function gettingBlogsFailed(){
    return {
        type: 'GETTING_BLOGS_FAILED',
        blogs: [],
    }
}
