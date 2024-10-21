import { put } from "@vercel/blob";

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    let filename = searchParams.get('filename'); 
    if(filename == undefined){
        filename = "default_name"
    }
    // ⚠️ The below code is for App Router Route Handlers only
    const blob = await put(filename, request.body, {
      access: 'public',
    });
    return Response.json(blob);
  }