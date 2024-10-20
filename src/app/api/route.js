export const dynamic = 'force-dynamic' // defaults to auto 

import { v4 as uuid_v4 } from "uuid";
import { cookies } from 'next/headers';

export async function GET(request) {
    console.log("incoming request" ) 
    cookies().set("id",uuid_v4())
    return Response.json({"test":"test"})
}