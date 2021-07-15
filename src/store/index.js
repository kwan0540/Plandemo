import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialPlanState = {Submitted: false,PlanName: '',General: '', Physiotherapy: '', cost: '',counter:0}

const planSlice = createSlice({
    name:'plan',
    initialState: initialPlanState,
    reducers: {
        createPlan(state, action) {
            state.PlanName = action.payload.planName
            state.General = action.payload.General
            state.Physiotherapy = action.payload.Physiotherapy
            state.cost = action.payload.cost
            state.counter ++
        },
        submitForm(state) {
            state.Submitted = true
        }
    }
})

const store = configureStore({
    reducer: {plan: planSlice.reducer}
})

export const planActions = planSlice.actions
export default store