import axios from "axios";

const apiKey : string | undefined = process.env.apiKey

async function gpt(prompt : string){
    try{
        const message = {
            model : 'gpt-3.5-turbo',
            messages : [{role : 'user' , content : prompt}]
        }

        const authorization = {
            headers : {
                Authorization : `Bearer ${apiKey}`
            },
            [`content-Type`] : 'application/json'
        }

        const response = await axios.post("https://api.openai.com/v1/vhat/completions" , message , authorization)
        const resultMessage = response.data.choices[0].message.content
        return resultMessage
    }catch(err){
        if(err instanceof Error){
            console.log(err.message)
        }
    }
}

export default gpt