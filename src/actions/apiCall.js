import axios from "axios";

export function apiCall(){
    return(dispatch)=>{
        return axios.get("https://127.0.0.1/wp-vs-497/wordpress/wp-json/wp/v2/posts").then((response)=>
        dispatch(loadPosts(response.data))
    )
    }
}

export function loadPosts(posts) {
    console.log("lets gettem", posts)
    return {
        type: "GET_POSTS",
        posts: posts
    }
};