import api from '@/api'

const state = {
    standings: [],
    groups: [],
    table: []
}

const getters = {
    getAllStandings: ({ standings, groups, tables }) => ({ standings, groups, tables })
}

const actions = {
    async getStandings({ commit }) {
        try {
            const response = await api.standings()
            const { standings } = await response.data
            const groups = [...new Set(standings.map(val => val.group))]
            const tables = standings.filter(val => val.type === 'TOTAL')
            commit('LOAD_STANDINGS_DATA', {standings, groups, tables});
        } catch (e) {
            console.log("error", e)
        }
    }
}

const mutations = {
    LOAD_STANDINGS_DATA(state, {standings, groups, tables}) {
        Object.assign(state, {
            standings,
            groups,
            tables
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}