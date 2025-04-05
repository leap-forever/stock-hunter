import { put } from "@vercel/blob"; 
import * as Minio from 'minio'


export async function POST(request) {
    // const { searchParams } = new URL(request.url);  
    // console.log("post request body" , request.body)
    // let filename = searchParams.get('filename'); 
    // if(filename == undefined){
    //     filename = "default_name"
    // }
    // // ⚠️ The below code is for App Router Route Handlers only
    // const blob = await put(filename, request.body, {
    //   access: 'public',
    // });  

    const minioClient = new Minio.Client({
      endPoint: 'localhost',
      port: 9000,
      useSSL: false,
      accessKey: 'FQNaly5vPKN7rEpN5fSW',
      secretKey: 'OP60WPRGWug8XxMPwJG8186GjnjH1mwanjB64QZs',
    })
    // console.log("mc js is", minioClient)  

    const formdata = await request.formData()
    console.log("form data is" , formdata, formdata.get("filename")) 
    const file = formdata.get("filename") 
    console.log("file is ",file, file.name )
    const arrayBuffer = await file.arrayBuffer(); 
    var fileBuffer = Buffer.from(arrayBuffer)
    console.log("filebuffer is" , fileBuffer)

    // const buffer = new Uint8Array(arrayBuffer); 
    // console.log("buffer is",buffer)
    

    const res = await minioClient.putObject("test",file.name ,fileBuffer)
    
    // console.log("res is ", res)
    // return Response.json(blob); 
    return Response.json({})
  }