import React, { useEffect ,useState,} from 'react';
import Blog from '../Blog/Blog';

const DataLoaded = () => {

    const [product,setProduct] = useState([]);  
    useEffect(()=>{
      const url= `https://run.mocky.io/v3/9e5de1a8-becc-4d91-aeed-2680513418a4`;
      fetch(url)
      .then (response=>response.json())
      .then (data => setProduct(data));
        
  },[])

    return (
        <div>
            
               {/* <h1>friends : {product.length}</h1> */}
            <ul>
            {
                    // product.map(product => <Blog product={product}></Blog>)
                    // product.map(product => <li>{product.name}</li>)

                }
                 
                {/* <h3>name{product.name}</h3> */}
            </ul>
        </div>
    );
};

export default DataLoaded;