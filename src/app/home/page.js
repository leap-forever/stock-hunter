import { SignIn } from "@/components/signIn" 
import { auth } from "../auth"
export default async function(){ 
    const session = await auth() 
    console.log("session is" , session)
    return (
        <> 
        nihao
        <SignIn>login</SignIn> 

        test 
        </>
    )
}