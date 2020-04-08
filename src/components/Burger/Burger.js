import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const StyledDiv=styled.div`
width: 100%;
margin: auto;
height: 250px;
overflow: scroll;
text-align: center;
font-weight: bold;
font-size: 1.2rem;

@media (min-width: 250px) and (min-height: 200px){
    width: 175px;
    height: 150px;
}

@media (min-width: 500px) and (min-height: 400px){
    width: 350px;
    height: 300px;
}

@media (min-width: 500px) and (min-height: 401px){
    width: 450px;
    height: 400px;

@media (min-width: 1000px) and (min-height: 700px){
    width: 700px;
    height: 600px;

`

const Burger = (props) =>
{
    const transformedIngredients = Object.keys(props.list).map((igKey) => {
        return [...Array(props.list[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    });

    let noIngredientsFlag=true;
    if(transformedIngredients.map(el=>{
        if(el.length!==0)
        {
            noIngredientsFlag=false;
        }
        return noIngredientsFlag;
    }))

    return(
        <StyledDiv>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </StyledDiv>
    );
}

export default Burger;