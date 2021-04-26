import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Blog = () => {

    return (
        <div>
   <Header></Header>
   
       <div className="container">
           <div className="row">
            <div className="col-md-12">
{/* 
            <h2> ID: {id}</h2>
            <h2> name: {name}</h2>
           <h3> cost: {cost}</h3> */}

           {/* <img src={('${imageUrl}')} alt=""/> */}
          {/* <img src={props.imageUrl} alt=""/> */}




          {/* <img src={props.imageUrl} alt=""/> */}
          {/* <img src={$`{https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit-768x425.jpg}` }/> */}

            {/* <p>id:{id} <Link to={`/bike/${id}`}>
                <button>Show Detail  {id}</button>
                </Link> </p> */}
            <h1>This Blog Page</h1>
             
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis quo delectus doloribus. Cum reprehenderit voluptas aut corporis ipsam. Iusto vel placeat nam, facilis ipsum maxime consequatur quis dolor fuga nihil eos sit tenetur totam atque. Qui facere at, omnis magni, consequatur blanditiis eaque temporibus saepe dolorem consequuntur tenetur dolorum?</p>
            </div>
           </div>
       </div>
        </div>
    );
};

export default Blog;