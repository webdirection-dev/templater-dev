import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    data: {
        start: true,
        staff: true,
        mi: false,
        info: false,
    }
}

const panelAddonsSlice = createSlice({
    name: '@@panel-addons',
    initialState,
    reducers: {
        resetPanel: () => initialState,

        setStaffAddons: (state, action) => {
            state.data = {start: false, staff: true, mi: false, info: false}
        },

        setMiAddons: (state, action) => {
            state.data = {start: false, staff: false, mi: true, info: false}
        },

        setInfoAddons: (state, action) => {
            state.data = {start: false, staff: false, mi: false, info: true}
        },
    }
})

export const {resetPanel, setStaffAddons, setMiAddons, setInfoAddons} = panelAddonsSlice.actions
export const panelAddonsReducer = panelAddonsSlice.reducer

//selectors
export const selectPanelAddonsInfo = (state) => ({
    data: state.panelAddonsReducer.data,
})
