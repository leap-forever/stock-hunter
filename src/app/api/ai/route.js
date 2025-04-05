import OpenAI  from "openai"; 


const openai = new OpenAI(
    {
        // 若没有配置环境变量，请用百炼API Key将下行替换为：apiKey: "sk-xxx",
        // apiKey: process.env.DASHSCOPE_API_KEY,
        apiKey:"sk-2a328fe9e9d04f4a8c0835ad48fdab6e",
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
);

export async function GET(params) {
    console.log("open ai" ,params )  
    const completion=   await openai.chat.completions.create({
        model: "qwen-plus",  //模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        messages: [
            { role: "user", content: "openai 传递的 message 中为什么要带有 role 信息，不同的 role 代表什么意思？" }
        ],
    }) 
    // const models = await openai.models.list()
    return Response.json({"data":"123","result":completion})  
}
