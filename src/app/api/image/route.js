import { promises as fs } from "fs";
import path from "path" 
import { v4 as uuid_v4 } from "uuid";

export async function POST(request) { 
    // const data = await request.json() 
    const form = await request.formData()
    const image = form.get("image") 
    const buffer = await image.arrayBuffer();
    const arrayBuffer = new Uint8Array(buffer)  
    await fs.writeFile(`./public/image/${uuid_v4()}.jpeg`, arrayBuffer)
    return Response.json({ "message": "update success" })
}

export async function GET(req) {
    console.log("image get")
    const txfile = path.join("/Users/zhouchen/Downloads", "example.txt")

    const content = await fs.readFile(txfile, "utf-8")
    console.log("content is ", content)

    return Response.json({ "message": 200, "content": content })
}