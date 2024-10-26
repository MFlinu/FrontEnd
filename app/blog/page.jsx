import Link from "next/link"
import {getSlug} from "../helpers/slugify"
import { getUsers } from "../helpers/api";

export default async function Blog()
{

    const users=await getUsers();
    return(
        <>
            
            <h1>Blog Page</h1>
            <br/>
            <ul>
                {users.map((user,index) =>{
                    return(
                    <li key={index}>
                        <Link href={"/users/" + getSlug(user.name)}>
                            {user.name}
                        </Link>
                    </li>)
                })}
            </ul>
        </>
    )
}