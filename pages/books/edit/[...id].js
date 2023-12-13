import Layout from "@/components/Layout";
import EditBookForm from "@/components/EditBookForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function editBooks(){
    const [bookInfo, setBookInfo] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get("/api/booklist?id="+id).then(response =>{
            setBookInfo(response.data);
        });
    }, [id]);

    return(
        <Layout>
            <h1>Edit book data</h1>
            {bookInfo && (
                <EditBookForm {...bookInfo} />
            )}
        </Layout>
    )
}