'use server' 
import { signIn } from "./auth"
export async function login(data){
    console.log("login user ")
    console.log( await signIn("credentials",data ))
}