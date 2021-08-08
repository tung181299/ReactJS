import React, { Component } from 'react';
// import CarList from "./arrayFeatures.json"
// import WheelsList from "./wheels.json";
export default class ChooseCar extends Component {
    state = {
        carList: [
            {
                "id": 1,
                "title": "Crystal Black",
                "type": "Pearl",
                "img": "./images/icons/icon-black.jpg",
                "srcImg": "images-black/images-black-1/",
                "color": "Black",
                "price": "19,550",
                "engineType": "In-Line 4-Cylinder",
                "displacement": "1996 cc",
                "horsepower": "158 @ 6500 rpm",
                "torque": "138 lb-ft @ 4200 rpm",
                "redline": "6700 rpm",
                "wheels": [
                    {
                        "idWheel": 1,
                        "srcImg": "images-black/images-black-1/"
                    },
                    {
                        "idWheel": 2,
                        "srcImg": "images-black/images-black-2/"
                    },
                    {
                        "idWheel": 3,
                        "srcImg": "images-black/images-black-3/"
                    }
                ]   
            }       
        ]
    };

    handleChangeColor = (srcImg) => {
        this.setState({
            srcImg 
        });
    }

    render() {
        const { carList } = this.state;

        return (
            <div className="container-fluid">
                <h1 className="text-center my-4">Choose Car Color</h1>
                <div className="row">
                    <div className="col-7">
                        <img src={carList.srcImg} className="w-100" alt="" />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">Exterior Color</div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" onClick={() => this.handleChangeColor('black-car.jpg')}>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./images/icon-black.jpg" width="60px" alt="" />
                                        </div>
                                        <div className="col-10 d-flex align-items-center">
                                            Crystal Black
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" onClick={() => this.handleChangeColor('steel-car.jpg')}>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./images/icon-steel.jpg" width="60px" alt="" />
                                        </div>
                                        <div className="col-10 d-flex align-items-center">
                                            Modern Steel
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" onClick={() => this.handleChangeColor('silver-car.jpg')}>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./images/icon-silver.jpg" width="60px" alt="" />
                                        </div>
                                        <div className="col-10 d-flex align-items-center">
                                            Lunar Silver
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" onClick={() => this.handleChangeColor('red-car.jpg')}>
                                    <div className="row">
                                        <div className="col-2">
                                            <img src="./images/icon-red.jpg" width="60px" alt="" />
                                        </div>
                                        <div className="col-10 d-flex align-items-center">
                                            Rallye Red
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
