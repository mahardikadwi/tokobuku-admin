import EditBookForm from "@/components/EditBookForm";
import Layout from "@/components/Layout";

export default function newBooks() {
   return(
    <Layout>
        <h1>Add Book data</h1>
        <EditBookForm />
    </Layout>
   ) 
}