import { NextRequest } from 'next/server'
import clientPromise from '../../../../utils/mongodb/mongodb'

const handler = async (req: NextRequest) => {
    try {
        switch (req.method) {
            case 'POST':
                const { email } = await req.json().catch(() => {
                    throw new Error('Invalid JSON format in the request body')
                })

                const client = await clientPromise.catch(() => {
                    throw new Error('Connection to the database client failed')
                })

                const db = client.db('Subscription')
                const collection = db.collection<{ email: string }>('Email')

                if (
                    await collection.findOne({ email }).then((response) => {
                        if (response?.email === email) {
                            return true
                        }
                        return false
                    })
                ) {
                    new Response(
                        JSON.stringify({ message: 'already subscribed' }),
                        {
                            status: 200,
                        }
                    )
                }

                const insertOneResult = await collection
                    .insertOne({ email })
                    .catch(() => {
                        throw new Error('Inserting into the collection failed')
                    })

                return new Response(JSON.stringify(insertOneResult), {
                    status: 201,
                })

            default:
                return new Response(
                    JSON.stringify({
                        message:
                            'this is a post endpoint, use a POST request instead',
                    }),
                    {
                        status: 500,
                    }
                )
        }
    } catch (error) {
        return new Response(
            JSON.stringify({
                error:
                    error instanceof Error
                        ? error.message
                        : typeof error === 'string'
                        ? error
                        : 'unknown error has occurred',
            }),
            {
                status: 400,
            }
        )
    }
}

export { handler as POST }
