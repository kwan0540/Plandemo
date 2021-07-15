import {React, useState, useRef} from 'react'
import classes from './JsonForm.module.css'
import Card from '../UI/Card'
import { useDispatch, useSelector } from 'react-redux'
import { planActions } from '../store'

const JsonForm = () => {
    const dispatch = useDispatch()
    const textref = useRef()
    const counter = useSelector(state => state.plan.counter)
    const prevname = useSelector(state => state.plan.PlanName)
    console.log(counter)
    let error
    let formateerror
    let over
    let isduplicated
    const [duplicated, setDuplicated] = useState(false)
    const [formatE, setFormateE] = useState(false)
    const [wrong, setWrong] = useState(false)
    const [isOver, setIsOver] = useState(false)
    const textObject = {}
    const onSubmitHandler = (event) => {
        setFormateE(false)
        setWrong(false)
        setDuplicated(false)
        event.preventDefault()
        try {
            JSON.parse(textref.current.value)
        } catch(e) {
            setFormateE(true)
            console.log(textObject)
            return
        }
        const {planName, General, Physiotherapy, cost} = JSON.parse(textref.current.value)
        console.log(planName,General,Physiotherapy,cost)
        if (!planName || General === undefined || Physiotherapy === undefined || !cost) {
            setWrong(true)
            return
        }
        if (counter > 2) {
            setIsOver(true)
            return
        }
        if (planName === prevname) {
            setDuplicated(true)
            return 
        }
        dispatch(planActions.submitForm())
        dispatch(planActions.createPlan({
            planName,
            General,
            Physiotherapy,
            cost
    }))
    } 
    if (wrong === true) {
        error = <h2>Please enter valid value again</h2>
    } else {
        error = null
    }
    if (formatE === true) {
        formateerror = <h2>Please input valid JSON format</h2>
    } else {
        formateerror = null
    }
    if (isOver === true) {
        over = <h2>The custome Plan limit is 3 sorry</h2>
    } else {
        over = null
    }
    if (duplicated === true) {
        isduplicated = <h2>There is already the same plan</h2>
    } else {
        isduplicated = null
    }

    return (
        <>
        <form className={classes.jform} onSubmit={onSubmitHandler}>
        <label htmlFor='plan'>Customize your own plan</label>
        <textarea type='text' id='plan' ref={textref}>
            &#123;"planName":"",
            "General":,
            "Physiotherapy":,
            "cost": &#125;
        </textarea>
        <button>Submit</button>
        {formateerror}
        {error}
        {over}
        {isduplicated}
        </form>
        </>
    )
}

export default JsonForm