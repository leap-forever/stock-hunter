import * as Minio from 'minio'
import * as XLSX from "xlsx";  

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'FQNaly5vPKN7rEpN5fSW',
    secretKey: 'OP60WPRGWug8XxMPwJG8186GjnjH1mwanjB64QZs',
  })
  


async function getObjectContent(bucketName, objectName) {
    const stream = await  minioClient.getObject(bucketName, objectName);

    return new Promise((resolve, reject) => {
        let fileContent = '';
        const buffers = [];


        stream.on('data', (chunk) => {
            fileContent += chunk; 
            buffers.push(chunk)
        });

        stream.on('end', () => {
            // resolve(fileContent);
            resolve(buffers)
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
}

export async function GET(params) {

    // console.log("engin is" , engine)   
    //   const file = await minioClient.getObject("test","123.xlsx")   
    //   const stream = file.createReadStream() 
    const result = await getObjectContent("test", "123.xlsx")
    console.log("res ",result)
    
    const workbook =  XLSX.read(Buffer.concat(result), { type: 'buffer' });
    const workSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[workSheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { defval: ''});
    console.log("data is",data )
      
      
    return Response.json({})
}