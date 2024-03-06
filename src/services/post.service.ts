
import { RecursiveRouterObj } from "@ts-rest/express/src/lib/types";
import { parentContract } from "../contracts/index.contract";
import { z } from "zod";
import { db } from "../../db";
import { PostSchema, createPostSchema, post } from "../schema/post";
import { eq } from "drizzle-orm";

const postService: RecursiveRouterObj<typeof parentContract.posts> = {
    getPosts: async () => {

        const postResult = await db.select().from(post);

        return {
            status: 200,
            body: postResult
        }
    },
    getPost: async ({params: {id}}) => {
        try {
            const postResult = await db.select().from(post).where(eq(post.id, +id)).limit(1) ;

            if(postResult.length != 0){
                return {
                    status: 200,
                    body: postResult[0] as z.infer<typeof PostSchema>
                }
            }

            return {
                status: 404,
                body: "No se encontro el post con el id: "+id
            }

            
        } catch (error ) {
            return {
                status: 500,
                body: {
                    body: error,
                    title: "Error de servidor"
                }
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

