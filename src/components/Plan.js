import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import classes from './Plan.module.css'
import Card from '../UI/Card'

const Plan = () => {
    let [plan,setPlan] = useState([])
    let [general,setGeneral] = useState([])
    let [phy,setPhy] = useState([])
    let [cost,setCost] = useState([])
    const obj = useSelector(state => state.plan)
    useEffect(() =>{
    if(obj.PlanName)
    setPlan(prev => [...prev, obj.PlanName])
    setGeneral(prev => [...prev, obj.General])
    setPhy(prev => [...prev, obj.Physiotherapy])
    setCost(prev => [...prev, obj.cost])
    console.log(general)
    }, [obj.PlanName])
    
   
    return (
        <Card>
            <h1>Choose a plan</h1>
            <div className={classes.PlanName}>
            <div className={classes.item1}>
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        {plan.map(item => <li>{item}</li>)}
                    </ul>
                </div>
                <div className={classes.item1}>
                    <ul>
                        <li>General</li>
                    </ul>
                    <ul>
                        {general.map(item => item === true? <li>true</li>: <li>false</li>)}
                    </ul>
                </div>
                <div className={classes.item1}>
                    <ul>
                        <li>Physiotherapy</li>
                    </ul>
                    <ul>
                        {phy.map(item => item === true? <li>true</li>: <li>false</li>)}
                    </ul>
                </div>
                <div className={classes.item1}>
                    <ul>
                        <li>Cost</li>
                    </ul>
                    <ul>
                        {cost.map(item => <li><input type='checkbox'/>${item}/month</li>)}
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export default Plan