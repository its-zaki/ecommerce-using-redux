import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard(props) {
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
                        
                        
                        <Button variant="primary" className='mt-5' >Add To Card</Button>
                    </Card.Body>

                </div>
            </div>

        </Card>
    );
}

export default SingleCard;