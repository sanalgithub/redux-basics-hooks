import React from "react";
import {buyCake, buyIceCream } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props){
    return(
        <div>
            <h2>numb of icecreams (using connect function)- {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy IceCream</button>
        </div>
    )
}

//here state from redux store is mapped to our compoent props, it gets redux state as paramter which can be used to retreivve the appropriate state properties
const mapStateToProps = state =>{
    return {
        numOfCake:state.cake.numOfCake
    }
}


//this function gets dispatch method as a parameter and allow us to map action creators to props in our component
const mapDispatchToProps= dispatch =>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CakeContainer)

//connect function connects react component to redux store, in our case it connects cake container to redux store