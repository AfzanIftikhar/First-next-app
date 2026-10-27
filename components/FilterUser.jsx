"use client"
import { useState } from "react"

export default function FilterUsers({user}){
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = user.filter(user => user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))


    return(
        <div>
            <input
            placeholder="Search User..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            />

            {filteredUsers.map(user => (
                <ul key={user.id}>
                    <li>{user.name}</li>

                </ul>
            ))}

        </div>
    )

}