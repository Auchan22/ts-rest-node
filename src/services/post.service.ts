
import { RecursiveRouterObj } from "@ts-rest/express/src/lib/types";
import { parentContract } from "../contracts/index.contract";
import { PostContract, createPostSchema } from "../contracts/post.contract";
import { ParamsFromUrl } from "@ts-rest/core";
import { z } from "zod";

const postService: RecursiveRouterObj<typeof parentContract.posts> = {
    getPosts: async () => {

        if(false){
            return {
                status: 400,
                body: {
                    body: "Hubo un error",
                    title: "No se pudieron encontrar los posts"
                }
            }
        }

        return {
            status: 200,
            body: [{
                id: 1,
                title: "Hola",
                body: "chau"
            }]
        }
    },
    getPost: async ({params: {id}}) => {
        console.log(id)
        return {
            status: 200,
            body: {
                id: 1,
                title: "Hola",
                body: "chau"
            }
        }
    },
    createPost: async ({body}: {body: z.infer<typeof createPostSchema>}) => {
        return {
            status: 201,
            body: {
                msg: "Se creó el nuevo post",
                object: {
                    id: 2,
                    body: "mucho testo",
                    title: "Hola mundo"
                }
            }
        }
    }
}

export default postService;

