import express , {Request , Response} from "express";
import gpt from "./apiKey";

const app = express()

app.post('/' , async (req : Request, res : Response) => {
    try {
        const {prompt} = req.body
        const result = await gpt(prompt)
        res.status(200).json(result)
    } catch (err) {
        if(err instanceof Error){
            res.status(500).send(`internall error`)
        }
    }
})