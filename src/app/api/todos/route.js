import { NextRequest,NextResponse } from "next/server";  



export async function GET(req) {
    // console.log("todos params is : ",NextRequest, NextResponse,req) 

    console.log(req instanceof NextRequest, req instanceof Request)
    // res.cookies.set("name","zhou"); 
    const res =   NextResponse.next();
    res.cookies.set("name","zhou2")  
    // res.json({name:"123"})
    // return NextResponse.json({name:"1÷2"},{status:200})
    // return res
    return NextResponse.json({"anme":"123"})
}