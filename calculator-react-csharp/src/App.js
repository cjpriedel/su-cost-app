import React, { Component } from 'react';
import './App.css';
import './constants'
import { valuesFunction } from './constants';
import { InputNumber } from 'antd';








export default function App({ quantity }) {
  const [values, setValues] = React.useState({
    costPlusTax: 0,
    breakevenAmount: 0,
    price: 0,
    totalPrice: 0
  })

  const onChange = async (quantity) => {
    console.log('changed', quantity);

    try {
      const response = await fetch("https://localhost:7282/costprice")
      const payload = await response.json()
      setValues(calculateValues(payload, quantity))
    } catch (error) {
      console.log(error)
    }

  };

  const calculateValues = (payload, quantity) => {
    const costPlusTax = payload.itemCost * (1 + payload.taxPercentage)
    const breakevenAmount = costPlusTax + payload.itemCost * payload.overheadPercentage
    const price= breakevenAmount/(1- payload.profitPercentage)
    const totalPrice = breakevenAmount * quantity
  
      return { 
        costPlusTax,
        breakevenAmount, 
        price, 
        totalPrice
      }
  }

  return (
    <>
      <div className="calctable">
        <InputNumber className="inputbox" placeholder="Quantity" defaultValue={0} onChange={onChange} />

        <InputNumber className="inputbox" value={(values.costPlusTax).toFixed(2)} readOnly />

        <InputNumber className="inputbox" value={(values.breakevenAmount).toFixed(2)} readOnly />

        <InputNumber className="inputbox" value={(values.totalPrice).toFixed(2)} readOnly />
      </div>
    </>
  )
}



