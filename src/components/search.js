import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { productData } from "../data";
import Card from "./card";


const Search = () => {
    const [searchParams] = useSearchParams()
    const [filtered, setFilterd] = useState([]);
    const [loading, setLoading] = useState()
    const query = searchParams.get('query') || ''

    useEffect(() => {
        function filterProducts(){
            if(!query){
                setFilterd([])
                return
            };
            setLoading(true)
            const filteredItem = productData.filter((item) => item.category?.toLowerCase().includes(query.toLowerCase()));
            setFilterd(filteredItem)
            setLoading(false)
        }
        filterProducts();
       
    }, [query])


    return ( 
        <section className="search">
            <h3>Search result for {query}</h3>
            {loading ? (<p>Product is loading......</p>) : 
            query.length === 0 ? (<p>Enter search product</p>) :
            filtered.length === 0 ? (<p>Product not Found</p>) :
            (<div className="search-box">
                {filtered.map((item) => <Card key={item.id} item={item}/>)}
            </div>)}
        </section>
     );
}
 
export default Search;