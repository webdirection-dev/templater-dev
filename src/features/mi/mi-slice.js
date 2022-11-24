import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: {
        support: '2ЛП ГИС МТ',
        dev: false,
        miNumber: '00001800',
        title: '',
        description:
            'Массовый инцидент передан N. Заведена задача на разработку N.\n' +
            'На данный момент зафиксировано N обращений от УОТ.',
    }
}

const miSlice = createSlice({
    name: '@@mi',
    initialState,
    reducers: {
        resetMi: () => initialState,

        setSupport: (state, action) => {
            state.data.support = action.payload
        },

        setDev: (state) => {
            state.data.dev = !state.data.dev
        },

        setNumber: (state, action) => {
            state.data.miNumber = action.payload
        },

        setTitle: (state, action) => {
            state.data.title = action.payload
        },

        setDescription: (state, action) => {
            state.data.description = action.payload
        },
    }
})

export const {setSupport, setDev, setNumber, setTitle, setDescription} = miSlice.actions
export const miReducer = miSlice.reducer

//selectors
export const selectMiInfo = (state) => ({
    data: state.miReducer.data,
})
