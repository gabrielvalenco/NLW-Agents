import { db } from "../../db/connection.ts"
import { schema } from "../../db/schema/index.ts"
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { count } from "drizzle-orm"
import { eq } from "drizzle-orm"

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', async() => {
        const results = await db
        .select({
            id: schema.rooms.id,
            name: schema.rooms.name,
            description: schema.rooms.description,
            questionsCount: count(schema.questions.id),
        })
        .from(schema.rooms)
        .leftJoin(schema.questions, eq(schema.questions.roomID, schema.rooms.id))
        .groupBy(schema.rooms.id)
        .orderBy(schema.rooms.createdAt)

        return results
    })
}
