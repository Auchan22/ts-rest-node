import { initContract } from "@ts-rest/core";
import { z } from "zod";


const c = initContract();

const PostSchema = z.object({
    id: z.number(),
    title: z.string(),
    body: z.string()
});

export const createPostSchema = PostSchema.omit({id: true})


export const PostContract = c.router({
    getPosts: {
        method: "GET",
        path: "/",
        responses: {
            200: z.array(PostSchema),
            400: z.object({
                title: z.string(),
                body: z.string()
            }),
            500: z.object({
                title: z.string(),
                body: z.string()
            })
        },
        summary: "Obtiene todos los post creados",
    },
    getPost:{
        method: "GET",
        path: "/:id",
        responses: {
            200: PostSchema,
            404: z.string()
        },
        pathParams: z.object({
            id: z.string(),
          })
    },
    createPost: {
        method: "POST",
        path: "/",
        responses: {
            201: z.object({
                msg: z.string(),
                object: PostSchema
            }),
            404: z.string()
        },
        body: createPostSchema,
        summary: "Creamos un nuevo post",
    },
}, {
    pathPrefix: "/post"
})