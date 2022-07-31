import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {DataContext} from './Context'
import { useQuery, gql } from '@apollo/client';


const GET_PRODUCTS = gql`
    query AllProducts {
      allProducts {
        id
        name
        description
        price
        image
      }
    }
  `;


function DisplayProducts(){

   
  // useQuery can only be used in function based components
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  //const {addCart} = this.context;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allProducts.map(({ id, name, description, price, image }) => (

  	<section>
  		<div key={id}>
			<Card style={{ width: '20rem', height:'32rem' }}>
				<Link to={`/product/${id}`}>
					<img src={image} alt="img" width="100%" height="150px"/>
                </Link>		      
		      <Card.Body>
		        <Card.Title>{name}</Card.Title>
		        <hr />
		        <Card.Text>
		          {description}
		        </Card.Text>
		        <span style={{ color:"crimson" }}># {price}</span>
		        
		        <Button variant="info">Add to cart</Button>
		      </Card.Body>
		    </Card>
		    <br />
	    </div>
	</section>

    ));
}


export default DisplayProducts