import { useEffect,useState  } from "react";
import Friend from "./friend";

export default function SiteEffect(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(data=> setUsers(data))
    }, [])
    return(
        <div>
            <h1>Users: {users.length}</h1>
            {users.map(user=><Friend user={user} key={user.id} />)}
        </div>
    )
}