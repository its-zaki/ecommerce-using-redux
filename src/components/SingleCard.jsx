import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux'
import { addcart, removecart } from '../config/redux-config/reducers/cartSlice';
function SingleCard(props) {
    // useDispatch 
    const dispatch = useDispatch()
    // useSelector 
    const selector = useSelector(state => state.cartsItems)
    

    const ProductAddToCart =()=>{
        if(selector.length === 0){
            dispatch(addcart({
                title: props.title,
                description: props.desc,
                image: props.image,
                price: props.price,
                id: props.id
            }))
            console.log('data added to cart array');
            console.log(selector);
        }else {
            console.log('item exist');
        }
    }
    const productremove = ()=>{
        dispatch(removecart({
            index: props.id
        }))
         console.log(selector);
        
    }
    return (
        <Card style={{ width: '100%' }}>
            <div className='d-flex w-100 p-5' >
                <div className='w-100'>
                    <Card.Img className='h-100 ' variant="top" src={props.image}/>

                </div>
                <div>
                    <Card.Body>
                        <h3 className='text-primary '>Title</h3>
                        <h5>{props.title}</h5>
                        <h3 className='text-primary mt-3'>Description</h3>
                        <h5>{props.desc}</h5>
                        <h3 className='text-primary mt-3'>Category</h3>
                        <h5>{props.category}</h5>
                        <h3 className='text-primary mt-3'>Price</h3>
                        <h5>{props.price}</h5>
                        
                        
                        <Button variant="primary" className='mt-5' onClick={ProductAddToCart} >Add To Card</Button>
                        <h1 onClick={productremove}>delete</h1>
                    </Card.Body>

                </div>
            </div>

        </Card>
    );
}

export default SingleCard;