exports.createPages = async ({ actions }) => {
    actions.createSlice({
        id: `header`, 
        component: require.resolve(`./src/components/nav.js`),
    })

    actions.createSlice({ 
        id: `footer`,
        component: require.resolve(`./src/components/FooterNew.js`),
    })
}