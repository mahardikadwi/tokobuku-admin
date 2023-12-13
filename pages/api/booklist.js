import { Databooks } from "@/models/Databooks";
import mongooseConnect from "@/lib/mongoose";

export default async function Handler(req, res){
    const {method} = req;
    await mongooseConnect();

    if(method === "GET"){
        if(req.query?.id){
            res.json(await Databooks.findOne({_id:req.query.id}));
        } else {
          res.json(await Databooks.find());  
        } 
    }

    if (method === "POST"){
       const {title, description, price} = req.body;
       const BookData = await Databooks.create({
        title,description,price,
       });
       res.json(BookData);
    }

    if (method === "PUT") {
        const { title, description, price, _id } = req.body;
        if (!_id) {
            return res.status(400).json({ error: "Missing _id in the request body" });
        }
        await Databooks.updateOne({ _id }, { title, description, price });
        res.json(true);
    }

    if (method === "DELETE") {
        if(req.query?.id){
            await Databooks.deleteOne({_id:req.query?.id});
            res.json(true);
        }
    }
}