import config from '../config';
import { APIGet } from '../Services/API';


// Get App Enabled Site
export function getAvailableSites(){
  return function(dispatch){

     dispatch(gettingAvailableSites())

    APIGet(config.APIGlobal+'/api/v1/customers')
    .then(res => res.json())
    .then(json => {
      dispatch(gotAvailableSites(json))
    })
    .catch((e) =>{
      dispatch(getAvailableSitesError(e))
    })
  }
}

function gettingAvailableSites(){
  return {
    type: 'GETTING_SITES',
    sites: []
  }
}

function gotAvailableSites(sites){
  return {
    type: 'GET_SITES_SUCCESS',
    sites: sites
  }
}

function getAvailableSitesError(e){
  return {
    type: 'GET_SITES_ERROR',
    sites: [],
    error: e
  }
}

export function onSelectSite(site){

  // TODO: Save Site to AsynStorage

  return {
    type: 'SELECT_SITE',
    site: site
  }
}
