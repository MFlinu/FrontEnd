import { getUser } from '../../helpers/api';


// This function is used to create Post by params.name
export default async function Users({params}){
    const user=await getUser(params.name);

    return(
        <>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.address.street}</h2>
        </>
    )
}