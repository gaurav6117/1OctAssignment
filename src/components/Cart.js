import React, { Component } from 'react'
import data from '../products.json'
export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { arr: {}, total: 0 };
    }
    componentDidMount() {
        if ((localStorage.getItem('myCart')) !== undefined) {
            var ar = JSON.parse(localStorage.getItem('myCart'));
            this.setState({ arr: ar })
            this.total()
        }
    }
    total = () => {
        if ((localStorage.getItem('myCart')) !== undefined) {
            var ar = JSON.parse(localStorage.getItem('myCart'));
            var totalPrice = 0;
            data.products.map(elem => {
                for (let key in ar) {
                    if (elem.id === Number(key)) {
                        return totalPrice += elem.price * Number(ar[key])
                    }
                }
            })
            this.setState({ total: totalPrice })
        }
    }
    render() {
        return (
            <>
                <div id="mainrow" className="row m-auto">
                    <div id="part1" className="col-lg-6 col-md-6 col-sm-6 d-block ">
                        <h3 id="mycarthead">My Cart </h3> <hr />
                        {data.products.map(element => {
                            for (let key in this.state.arr) {
                                if (element.id === Number(key)) {
                                    return (
                                        <>
                                            <div id={"card"+(element.id.toString())} className="card " style={{ maxWidth: "440px" }}>
                                                <div id={"cardrow"+(element.id.toString())} className="row g-0">
                                                    <div id={"cardImage"+(element.id.toString())} className="col-lg-4 col-md-4 col-sm-6 d-block">
                                                        <img id={"url"+(element.image.toString())} src={element.image} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div id={"cardBody"+(element.id.toString())} className="col-lg-4 col-md-4 col-sm-6 m-auto d-block">
                                                        <div id={"cardcontent"+(element.id.toString())} className="card-body">
                                                            <h5 id={"products"+(element.pname.toString())} className="card-title">{element.pname}</h5>
                                                            <p id={"price"+(element.price.toString())} className="card-text"><b>Price: </b>{element.price}</p>
                                                            <p id={"quan"+(element.quantity.toString())} className="card-text"><b>Quantity: </b>{this.state.arr[key]}</p>
                                                        </div>
                                                    </div>
                                                    <div id={"cardCalculation"+(element.id.toString())} className="col-lg-4 col-md-4 col-sm-6 m-auto d-block">
                                                        <div id={"cardTotal"+(element.id.toString())} className="card-body">
                                                            <h5 id={"product"+(element.pname.toString())} className="card-title">Calculation</h5>
                                                            <p id={"total"+(element.price.toString())} className="card-text">{this.state.arr[key]}x{element.price}</p>
                                                            <p id={"calc"+(element.price.toString())} className="card-text"><b>Total: </b>{this.state.arr[key] * element.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            }
                        }
                        )
                        }
                    </div>
                    <div id="part2" className="col-lg-6 col-md-6 col-sm-6 d-block">
                        <h3 id="pricehead">PRICE DETAILS</h3><hr />
                        <div id="rows2" className="row">
                            <div id="cole1" className="col-lg-6 col-md-6 col-sm-6 m-auto ">
                                <p id="priceallitems">Price (All Items)</p>
                                <p id="chargesallitems">Delivery charges</p>
                                <p id="discountallitems">Discount</p><hr />
                                <h5 id="totalallitems">Total Amount</h5>
                                <hr />
                            </div>
                            <div id="cole2" className="col-lg-6 col-md-6 col-sm-6 m-auto ">
                                <p id="allitems"><b>{this.state.total}</b></p>
                                <p id="40allitems"><b>40</b></p>
                                <p id="strike40allitems"><b><strike>40</strike></b></p><hr />
                                <p id="totalprice"><b>{this.state.total}</b></p>
                                <hr />
                            </div>

                        </div>
                        <button id="placeorderbtn" className="btn btn-primary placeorderbtn">Place Order</button>
                    </div>
                </div>
                <br /><hr /><hr />
            </>
        )
    }
}
export default Cart
