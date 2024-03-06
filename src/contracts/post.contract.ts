import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { PostSchema, createPostSchema } from "../schema/post";

const c = initContract();


export const PostContract = c.router({
    getPosts: {
        method: "GET",
        path: "/",
        responses: {
            200: z.array(PostSchema),
        },
        summary: "Obtiene todos los post creados",
    },
    getPost:{
        method: "GET",
        path: "/:id",
        responses: {
            200: PostSchema,
            404: z.string(),
            500: z.object({
                title: z.string(),
                body: z.string()
            })
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