exports.createPages = async ({ actions }) => {
    actions.createSlice({
        id: `header`, 
        component: require.resolve(`./src/components/Nav.js`),
    })

    actions.createSlice({ 
        id: `footer`,
        component: require.resolve(`./src/components/FooterNew.js`),
    })

    actions.createSlice({
        id: `vaderContent`,
        component: require.resolve(`./src/components/CharacterContent/VaderContent.js`),
    })

    actions.createSlice({
        id: `aaylaContent`,
        component: require.resolve(`./src/components/CharacterContent/AaylaContent.js`),
    })

    actions.createSlice({
        id: `ackbarContent` ,
        component: require.resolve(`./src/components/CharacterContent/AckbarContent.js`), 
    })

    actions.createSlice({
        id: `ahsokaContent`, 
        component: require.resolve(`./src/components/CharacterContent/AhsokaContent.js`),
    })

    actions.createSlice({ 
        id: `anakinContent`,
        component: require.resolve(`./src/components/CharacterContent/AnakinContent.js`)
    })

    actions.createSlice({ 
        id: `assajjContent`,
        component: require.resolve(`./src/components/CharacterContent/AssajjContent.js`)
    })

    actions.createSlice({
        id: `b1Content`, 
        component: require.resolve(`./src/components/CharacterContent/B1Content.js`)
    })

    actions.createSlice({
        id: `b2Content`, 
        component: require.resolve(`./src/components/CharacterContent/B2Content.js`)
    })

    actions.createSlice({
        id: `bb8Content`, 
        component: require.resolve(`./src/components/CharacterContent/BB8Content.js`)
    })

    actions.createSlice({ 
        id: `bb9eContent`, 
        component: require.resolve(`./src/components/CharacterContent/BB9EContent.js`)
    })

    actions.createSlice({ 
        id: `bokatanContent`,
        component: require.resolve(`./src/components/CharacterContent/BokatanContent.js`)
    })

    actions.createSlice({ 
        id: `c3poContent`, 
        component: require.resolve(`./src/components/CharacterContent/C3poContent.js`)
    })

    actions.createSlice({
        id: `phasmaContent`, 
        component: require.resolve(`./src/components/CharacterContent/PhasmaContent.js`)
    })

    actions.createSlice({ 
        id: `rexContent`, 
        component: require.resolve(`./src/components/CharacterContent/RexContent.js`)
    })

    actions.createSlice({ 
        id: `caraContent`, 
        component: require.resolve(`./src/components/CharacterContent/CaraContent.js`)
    })

    actions.createSlice({
        id: `cassianContent`, 
        component: require.resolve(`./src/components/CharacterContent/CassianContent.js`)
    })

    actions.createSlice({ 
        id: `chewbaccaContent`, 
        component: require.resolve(`./src/components/CharacterContent/ChewbaccaContent.js`)
    })

    actions.createSlice({
        id: `codyContent`, 
        component: require.resolve(`./src/components/CharacterContent/CodyContent.js`)
    })

    actions.createSlice({
        id: `dookuContent`, 
        component: require.resolve(`./src/components/CharacterContent/DookuContent.js`)
    })
}