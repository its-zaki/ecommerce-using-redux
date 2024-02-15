import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import svg from '../assets/react.svg'

function SingleCard() {
    return (
        <Card style={{ width: '100%' }}>
            <div className='d-flex w-100 ' >
                <div className='w-50'>
                    <Card.Img variant="top" src={svg}/>

                </div>
                <div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>

                </div>
            </div>

        </Card>
    );
}

export default SingleCard;