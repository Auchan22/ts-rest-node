import { initContract } from "@ts-rest/core"
import { PostContract } from "./post.contract";


const c = initContract();
export const parentContract = c.router({
    posts: PostContract
}, {
    pathPrefix: "/api"
})