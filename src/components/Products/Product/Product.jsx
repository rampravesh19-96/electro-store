import "./Product.scss";
import {useNavigate} from "react-router-dom"
const Product = ({id,data}) => {
    const navigate = useNavigate()
    return <div className="product-card" onClick={()=>navigate('/product/'+id)}>
        <div className="thumbnail">
            <img src={data.img.data[0].attributes.url} alt="" />
        </div>
        <div className="prod-details">
            <div className="name">{data.title}</div>
            <div className="price">&#8377;{data.price}</div>
        </div>
    </div>;
};

export default Product;
