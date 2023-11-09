export async function GET(request: Request) {
    return new Response(JSON.stringify({ message: 'Hello from Got10IN' }), {
        status: 200,
    })
}

export async function POST(request: Request) {
    return new Response(
        JSON.stringify({ message: 'Hello from Got10IN (post ver.)' }),
        {
            status: 200,
        }
    )
}
