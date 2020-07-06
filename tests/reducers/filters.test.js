import filterReducer from '../../src/reducers/filters'
import moment from 'moment'


test('should test the default return object of filters', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    
    const action = {
        type: 'SORT_BY_DATE'
    }

    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text', () => {
    const text = 'Testing'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filterReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('should set startDate', () => {
    const date = moment()
    const action = {
        type: 'SET_BY_STARTDATE',
        date
    }

    const state = filterReducer(undefined, action)
    expect(state.startDate).toBe(date)
})

test('should set endDate', () => {
    const endDate = moment()
    const action = {
        type: 'SET_BY_ENDDATE',
        endDate
    }

    const state = filterReducer(undefined, action)
    expect(state.endDate).toBe(endDate)
})