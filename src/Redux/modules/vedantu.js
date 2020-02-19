const LOAD_USER_PROFILE_REQUEST = 'LOAD_USER_PROFILE_REQUEST';
const LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS';
const LOAD_USER_PROFILE_FAILURE = 'LOAD_USER_PROFILE_FAILURE';
const LOAD_USER_REPO_REQUEST = 'LOAD_USER_REPO_REQUEST';
const LOAD_USER_REPO_SUCCESS = 'LOAD_USER_REPO_SUCCESS';
const LOAD_USER_REPO_FAILURE = 'LOAD_USER_REPO_FAILURE';

/* Initial State  */

const initialState = {
  profileloading: false,
  profileloaded: false,
  profilefailed: false,
  profileData: null,
  /* Repo Data */
  repoloading: false,
  repoloaded: false,
  repofailed: false,
  repoData: null,
  /* Repo Data end */
};

/* These are reducer */

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_USER_PROFILE_REQUEST:
      return {
        ...state,
        profileloading: true,
        profileloaded: false,
        profilefailed: false,
      }
    case LOAD_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profileloading: false,
        profileloaded: true,
        profilefailed: false,
        profileData: action.result,
      }
    case LOAD_USER_PROFILE_FAILURE:
      return {
        ...state,
        profileloading: false,
        profileloaded: false,
        profilefailed: true,
      }
    case LOAD_USER_REPO_REQUEST:
      return {
        ...state,
        repoloading: true,
        repoloaded: false,
        repofailed: false,
      }
    case LOAD_USER_REPO_SUCCESS:
      return {
        ...state,
        repoloading: false,
        repoloaded: true,
        repofailed: false,
        repoData: action.result,
      }
    case LOAD_USER_REPO_FAILURE:
      return {
        ...state,
        repoloading: false,
        repoloaded: false,
        repofailed: true,
      }
    default:
      return state;
  }
}
/* These are action */
export function getListOfRepo() {
  return {
    types: [LOAD_USER_REPO_REQUEST, LOAD_USER_REPO_SUCCESS, LOAD_USER_REPO_FAILURE],
    promise: (client) => client.get('/users/supreetsingh247/repos')
  }
}

export function getUserProfileInfo() {
  return {
    types: [LOAD_USER_PROFILE_REQUEST, LOAD_USER_PROFILE_SUCCESS, LOAD_USER_PROFILE_FAILURE],
    promise: (client) => client.get('/users/supreetsingh247')
  }
}