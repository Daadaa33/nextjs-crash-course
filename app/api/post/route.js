import { readData, writeData } from "@/helper/until"
import {NextResponse} from "next/server"

export async function GET(request) {
    const getData = await readData()
    return  NextResponse.json({getData})

}

export async function POST(request) {

    const posts = await readData()
    
    const {title , body} = await request.json();

    const newPost  = {id : posts.lenght + 1 , title :title , body : body}

    posts.push(newPost)

    await writeData(newPost)

    NextResponse.json(newPost , {status : 201}) 


}