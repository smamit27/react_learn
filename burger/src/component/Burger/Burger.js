import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) =>{
    let transferIngred = Object.keys(props.ingred).map(ipkey =>{
        return [...Array(props.ingred[ipkey])].map((_,i)=>{
           return <BurgerIngredient key={ipkey+i} type={ipkey} />
        });
    })
    .reduce((arr,el)=> {
        return arr.concat(el);
    },[]);
    console.log(transferIngred.length);
    if(transferIngred.length === 0){
        transferIngred = <div>Please add an ingredient</div>;
    }
    console.log(transferIngred);
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transferIngred}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    )

}
export default Burger;
