import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamContainer(props){
    return(
        <div>
            <h2>numb of icecreams (using connect function)- {props.numberOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy cake</button>
        </div>
    )
}

//here state from redux store is mapped to our compoent props, it gets redux state as paramter which can be used to retreivve the appropriate state properties
const mapStateToProps = state =>{
    return {
        numberOfIceCream:state.iceCream.numOfIceCream//here icecream is the key mention in root reducer
    }
}


//this function gets dispatch method as a parameter and allow us to map action creators to props in our component
const mapDispatchToProps= dispatch =>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IceCreamContainer)

//connect function connects react component to redux store, in our case it connects cake container to redux store