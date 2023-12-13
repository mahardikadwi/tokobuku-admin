import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DeleteBook(){
    const router = useRouter();
    const [bookInfo, setBookInfo] = useState();
    const {id} = router.query;
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get("/api/booklist?id="+id).then(response => {
            setBookInfo(response.data);
        });
    }, [id]);
    async function deleteBook(){
        await axios.delete("/api/booklist?id="+id);
        cancel();
    }
    function cancel(){
        router.push("/books")
    }
    return(
        <Layout>
            <h1 className="text-center">Are you sure to delete &nbsp;&ldquo;{bookInfo?.title}&rdquo;?</h1>
            <div class="flex gap-2 justify-center">
                <button className="btn-red" onClick={deleteBook}>Yes</button>
                <button className="btn-default" onClick={cancel}>No</button>
            </div>
        </Layout>
    )
}