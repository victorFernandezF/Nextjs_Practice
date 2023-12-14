import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch('http://localhost:3001/items',{
        headers : {'Content-Type' : 'application/json'},
        next: { revalidate: 1 },
    });
    const data = await res.json();
    return NextResponse.json({ data });
}

export async function POST(req: Request){
    const body = await req.formData();
    const datas = {
        name: body.get('name'),
        comment: body.get('comment') 
    }   
    const res = await fetch('http://localhost:3001/items',{
        headers : {'Content-Type' : 'application/json'},
        method: 'POST',
        body: JSON.stringify(datas)
    });

    const data = await res.json()
    return Response.json(data)
}
