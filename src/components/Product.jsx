import "./Product.css";
import { Carousel } from 'antd';

function Product({allItem}) {

    return (
        <div className="product-card">
            <div className="badge">{allItem.tags.join(', ')}</div>
            
            <Carousel autoplay draggable={true} arrows={true}>
            {
                allItem.images.map((element)=>{
                    return (
                        <div className="product-tumb">
                            <img src={element} alt={allItem.category}/>
                        </div>
                    )
                })
            }
            </Carousel>

            <div className="product-details">
            <span className="product-catagory">{allItem.tags.join(', ')}</span>
                <h4><a href="">{allItem.title}</a></h4>
                <p>{allItem.description}</p>
                <div className="product-bottom-details">
                    <div className="product-price">
                        <small>{`$${allItem.price}`}</small>${(allItem.price*(100 - allItem.discountPercentage)/100).toFixed(2)}
                    </div>
                </div>
            </div>
	    </div>        
    )
}

export default Product