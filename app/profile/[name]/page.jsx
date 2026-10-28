export default async function profile({params}){


    const userData = [
        {
            id: 1,
            name: 'sheryians',
            email: "sheryians@example.com"
        },
        {
            id: 2,
            name: 'john',
            email: "john@gmail.com",
        },
        {
            id: 3,
            name: 'jane',
            email: "jane@example.com"
        }
    ]

    const userParams = await params

    const username = userParams.name
    
    const user = userData.find(user => user.name === username)

    return (
        <div>
            <h1> {user.name} Profile page</h1>
            <p>{user.email}</p>
        </div>
    )
}