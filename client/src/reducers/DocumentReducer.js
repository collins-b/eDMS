import {
	FETCH_POSTS,FETCH_POSTS_SUCCESS
} from '../actions/Documents';


	const INITIAL_STATE = { postsList: {posts: [], error:null, loading: false},  
							newPost:{post:null, error: null, loading: false}, 
							activePost:{post:null, error:null, loading: false}, 
							deletedPost: {post: null, error:null, loading: false},
						};

export default function DocumentsReducer(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_POSTS:// start fetching posts and set loading = true
  	return { state, postsList: {posts:[], error: null, loading: true} }; 
 case FETCH_POSTS_SUCCESS:// return list of posts and make loading = false
    return { state, postsList: {posts: action.payload, error:null, loading: false} };
  default:
    return state;
  }
}
