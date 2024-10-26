
import { getSlug } from "./slugify";


export async function getUsers(){
    const usersFetch=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await usersFetch.json();
    return users;
}

// In this function we ensure that the params.name veriable has same name from the fetch method.
export async function getUser(name){

    const users=await getUsers();

    const user=users.filter(item => getSlug(name) === getSlug(item.name))[0];
    return user;
}
