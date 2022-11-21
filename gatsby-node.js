exports.createPages = async ({ actions }) => {
    actions.createSlice({
        id: `header`, 
        component: require.resolve(`./src/components/Nav.js`),
    })

    actions.createSlice({ 
        id: `footer`,
        component: require.resolve(`./src/components/FooterNew.js`),
    })
}