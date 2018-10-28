const initialState = {
  url: null,
  sites: [],
  site: false
}

export default (state = initialState, action) => {

  switch(action.type){

    case 'GETTING_SITES':
      return Object.assign({},state,{
        sites: action.sites
      })

    case 'GET_SITES_SUCCESS':
      return Object.assign({},state,{
        sites: action.sites
      })

    case 'GET_SITES_ERROR':
      return Object.assign({},state,{
        sites: action.sites,
        getAvailableSitesError: action.error
      })

    case 'SELECT_SITE':
      return Object.assign({},state,{
        site: action.site
      })

  }
  return state;
}
