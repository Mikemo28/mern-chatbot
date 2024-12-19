import { Configuration } from "openai";

export const configureOpenAI = () => {
    return new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
    })
}