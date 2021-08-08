import React, { Component } from "react";
import glassList from "./dataGlasses.json";
import './ChooseGlass.css';
export default class ChooseGlass extends Component {
    state = {
        id: 0,
    };

    handleChangeGlass = id => {
        this.setState({
            id, 
        });
    };

    render() {
        const { id } = this.state;

        return (
            <div className='bgCover' style={{ backgroundImage: `url("./images/glassesImage/background.jpg")` }}>
                <header className='bg-dark text-center py-3 text-uppercase'>
                    try glass app online
                </header>
                <div className='bgCover--dark pt-5' >
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-6 text-center">
                                <div style={{ backgroundImage: `url("./images/glassesImage/model.jpg")`}} className='model'>
                                    <img alt='' src={`./images/${glassList[id].url}`} className = 'glass' />
                                    
                                    <div className ='desc'>
                                        <div className='glassName'>
                                            {glassList[id].name}
                                        </div>
                                        <div className = 'glassDesc'>
                                            {glassList[id].desc}
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            <div className="col-6">
                                <img alt='' src="./images/glassesImage/model.jpg" width='50%' />
                            </div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th onClick={() => this.handleChangeGlass(0)}>
                                        <img alt='' src="./images/glassesImage/g1.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(1)}>
                                        <img alt='' src="./images/glassesImage/g2.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(2)}>
                                        <img alt='' src="./images/glassesImage/g3.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(3)}>
                                        <img alt='' src="./images/glassesImage/g4.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(4)}>
                                        <img alt='' src="./images/glassesImage/g5.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(5)}>
                                        <img alt='' src="./images/glassesImage/g6.jpg"  width='100%'/>
                                    </th>
                                </tr>
                                <tr>
                                    <th onClick={() => this.handleChangeGlass(6)}>
                                        <img alt='' src="./images/glassesImage/g7.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(7)}>
                                        <img alt='' src="./images/glassesImage/g8.jpg"  width='100%'/>
                                    </th>
                                    <th onClick={() => this.handleChangeGlass(8)}>
                                        <img alt='' src="./images/glassesImage/g9.jpg"  width='100%'/>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
