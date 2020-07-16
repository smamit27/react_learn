import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummery from '../../component/Burger/OrderSummery/OrderSummery';
const INGREDIENT_PRICE = {
    meat: 3,
    cheese: 4,
    bacon: 5,
    salad:8
}
class BurgerBuilder extends Component{
    state={
        ingredient: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad:0
        },
        totalPrice: 4,
        purchased: false,
        purchase: false
    }

    addIngredient = (type) =>{
        const oldIngredientCount = this.state.ingredient[type];
        const newIngredientCount = oldIngredientCount + 1;
        const updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = newIngredientCount;
        const DeclaredPrice = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = DeclaredPrice + oldPrice;
        this.setState({totalPrice: newPrice,ingredient:updatedIngredient});
        console.log(newPrice,updatedIngredient)
        this.updatePurchasedIngredient(updatedIngredient);


    }
    removeIngredient = (type) =>{
        const oldIngredientCount = this.state.ingredient[type];
        if(oldIngredientCount <= 0){
            return;
        }
        const newIngredientCount = oldIngredientCount - 1;
        const updatedIngredient = {...this.state.ingredient};
        updatedIngredient[type] = newIngredientCount;
        const DeclaredPrice = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - DeclaredPrice;
        this.setState({totalPrice: newPrice,ingredient:updatedIngredient});
        console.log(newPrice,updatedIngredient);
        this.updatePurchasedIngredient(updatedIngredient);

    }
    updatePurchasedIngredient = (ingredient) =>{
        const sum = Object.keys(ingredient).map((igkey)=>{
            return ingredient[igkey]
        }).reduce((arr,ele)=>{
            return arr+ ele;
        },0);
        this.setState({purchased: sum >0})
    }
    purchaseHandler =() =>{
        this.setState({purchase: true})
    }
    closeBackdrop = () =>{
        this.setState({purchase: false})

    }
    purchasedContinue = () =>{
        alert('You Will continue');
        this.setState({purchase: true});

    }
    purchasedCancel =()=>{
        this.setState({purchase: false});

    }
    render(){
        const disabledInfo = {
            ...this.state.ingredient
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal modalClose={this.closeBackdrop} show={this.state.purchase}>
                    <OrderSummery 
                        continue={this.purchasedContinue} 
                        cancel={this.purchasedCancel} 
                        ingredient={this.state.ingredient}
                        price={this.state.totalPrice} />
                </Modal>
                <Burger ingred={this.state.ingredient} />
                <BuildControls addIngred={this.addIngredient} 
                               removeIngred={this.removeIngredient}
                               disabled = {disabledInfo}
                               totalPrice={this.state.totalPrice}
                               purchasable={this.state.purchased}
                               ordered={this.purchaseHandler}/>
            </Aux>
        )
    }
}
export default BurgerBuilder;