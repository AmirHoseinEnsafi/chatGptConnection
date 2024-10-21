import express , {Request , Response} from "express";
import gpt from "./apiKey";
import axios from "axios";
import dns from "dns"

const x = new dns.Resolver()
x.setServers(["91.148.245.34"])

const app = express()
app.use(express.json())

app.post('/' , async (req : Request, res : Response) => {
    try {
        const {prompt} = req.body
        const result = await gpt(prompt)
        res.status(200).json(result)
    } catch (err) {
        if(err instanceof Error){
            res.json(err)
        }
    }
})

app.listen(3000 , () => console.log(`connected to the port 3000`))