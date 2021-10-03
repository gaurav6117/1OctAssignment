import React, { Component } from 'react'
import data from "../products.json"
export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { cartValue: 0 }
    }
    componentDidMount() {
        this.cartvalue()
    }
    cartvalue() {
        if (localStorage.getItem("myCart") !== undefined) {
            let arr = JSON.parse(localStorage.getItem("myCart"));
            let vals = (Object.values(arr)).length;
            this.setState({ cartValue: vals })
        }
    }
    addCart = (id) => {
        if (localStorage.getItem("myCart") !== undefined) {
            let arr = JSON.parse(localStorage.getItem("myCart"));
            if ((Object.keys(arr)).includes(String(id))) {
                var val = arr[id];
                arr[id] = val + 1;
                localStorage.setItem("myCart", JSON.stringify(arr));
                this.cartvalue();
                alert("product added!")
            }
            else {
                arr[id] = 1;
                localStorage.setItem("myCart", JSON.stringify(arr));
                this.cartvalue();
                alert("product added!")
            }
        }
        else {
            let arr = { [id]: 1 }
            localStorage.setItem("myCart", JSON.stringify(arr));
            this.cartvalue();
            alert("product added!")
        }
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html" >Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="index.html" aria-current="page" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">Link</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-success">Cart: {this.state.cartValue}</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <h2 id="exclusivecol">EXCLUSIVE COLLECTIONS</h2>
                <div className="row m-auto">
                    {data.products.map((elem) =>
                        <div key={elem.id} className="col-lg-3 col-md-3 col-sm-6 D-block my-2">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={elem.image} className="card-img-top" height="250px" alt="" />
                                <div className="card-body"> 
                                    <h5 className="card-title"><b>{elem.pname}</b></h5>
                                    <h6 className="card-text">Price: {elem.price}</h6>
                                    <h6 className="card-text">Stock Left: {elem.quantity}</h6>
                                    <button onClick={() => this.addCart(elem.id)} className="btn btn-primary addtocartbtn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <br/><br/>
            </>
        )
    }
}

export default Product

