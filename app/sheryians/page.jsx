import Buttons from "@/components/Buttons"
import FilterUsers from "@/components/FilterUser"

const page = async() => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()
  return (
    <div>
        <h1>Sheryians Page</h1>
        <p>This is the Sheryians Page</p>
        <Buttons />
        <FilterUsers user={users} />
    </div>
  )
}

export default page
