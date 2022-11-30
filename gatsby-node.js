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

    actions.createSlice({ 
        id: `darktrooperContent`, 
        component: require.resolve('./src/components/CharacterContent/DarkTrooperContent.js')
    })

    actions.createSlice({ 
        id: `malekContent`, 
        component: require.resolve(`./src/components/CharacterContent/MalekContent.js`)
    })

    actions.createSlice({ 
        id: `malgusContent`, 
        component: require.resolve(`./src/components/CharacterContent/MalgusContent.js`)
    })

    actions.createSlice({ 
        id: `maulContent`, 
        component: require.resolve(`./src/components/CharacterContent/MaulContent.js`)
    })

    actions.createSlice({ 
        id: `nihilusContent`, 
        component: require.resolve(`./src/components/CharacterContent/NihilusContent.js`)
    })

    actions.createSlice({ 
        id: `revanContent`, 
        component: require.resolve(`./src/components/CharacterContent/RevanContent.js`)
    })

    actions.createSlice({ 
        id: `sidiousContent`, 
        component: require.resolve(`./src/components/CharacterContent/SidiousContent.js`)
    })
    actions.createSlice({ 
        id: `sionContent`, 
        component: require.resolve(`./src/components/CharacterContent/SionContent.js`)
    })
    actions.createSlice({ 
        id: `talonContent`, 
        component: require.resolve(`./src/components/CharacterContent/TalonContent.js`)
    })
    actions.createSlice({ 
        id: `trayaContent`, 
        component: require.resolve(`./src/components/CharacterContent/TrayaContent.js`)
    })
    actions.createSlice({ 
        id: `deathtrooperContent`, 
        component: require.resolve(`./src/components/CharacterContent/DeathTrooperContent.js`)
    })
    actions.createSlice({ 
        id: `droidekaContent`, 
        component: require.resolve(`./src/components/CharacterContent/DroidekaContent.js`)
    })
    actions.createSlice({ 
        id: `krennicContent`, 
        component: require.resolve(`./src/components/CharacterContent/KrennicContent.js`)
    })
    actions.createSlice({ 
        id: `finnContent`, 
        component: require.resolve(`./src/components/CharacterContent/FinnContent.js`)
    })
    actions.createSlice({ 
        id: `dinContent`, 
        component: require.resolve(`./src/components/CharacterContent/DinContent.js`)
    })
    actions.createSlice({ 
        id: `execContent`, 
        component: require.resolve(`./src/components/CharacterContent/FirstExecContent.js`)
    })
    actions.createSlice({ 
        id: `gammGuardContent`, 
        component: require.resolve(`./src/components/CharacterContent/GammGuardContent.js`)
    })
    actions.createSlice({ 
        id: `greviousContent`, 
        component: require.resolve(`./src/components/CharacterContent/GreviousContent.js`)
    })
    actions.createSlice({ 
        id: `huxContent`, 
        component: require.resolve(`./src/components/CharacterContent/HuxContent.js`)
    })
    actions.createSlice({ 
        id: `grandinqContent`, 
        component: require.resolve(`./src/components/CharacterContent/GrandInqContent.js`)
    })
    actions.createSlice({ 
        id: `groguContent`, 
        component: require.resolve(`./src/components/CharacterContent/GroguContent.js`)
    })
    actions.createSlice({ 
        id: `hanContent`, 
        component: require.resolve(`./src/components/CharacterContent/HanContent.js`)
    })
    actions.createSlice({ 
        id: `ig88Content`, 
        component: require.resolve(`./src/components/CharacterContent/IgContent.js`)
    })
    actions.createSlice({ 
        id: `jabbaContent`, 
        component: require.resolve(`./src/components/CharacterContent/JabbaContent.js`)
    })
    actions.createSlice({ 
        id: `jangoContent`, 
        component: require.resolve(`./src/components/CharacterContent/JangoContent.js`)
    })
    actions.createSlice({ 
        id: `krrContent`, 
        component: require.resolve(`./src/components/CharacterContent/KrrContent.js`)
    })
    actions.createSlice({ 
        id: `kyloContent`, 
        component: require.resolve(`./src/components/CharacterContent/KyloContent.js`)
    })
    actions.createSlice({ 
        id: `landoContent`, 
        component: require.resolve(`./src/components/CharacterContent/LandoContent.js`)
    })
    actions.createSlice({ 
        id: `leiaContent`, 
        component: require.resolve(`./src/components/CharacterContent/LeiaContent.js`)
    })
    actions.createSlice({ 
        id: `lukeContent`, 
        component: require.resolve(`./src/components/CharacterContent/LukeContent.js`)
    })
    actions.createSlice({ 
        id: `maceContent`, 
        component: require.resolve(`./src/components/CharacterContent/MaceContent.js`)
    })
    actions.createSlice({ 
        id: `obiContent`, 
        component: require.resolve(`./src/components/CharacterContent/ObiContent.js`)
    })
    actions.createSlice({ 
        id: `magnaContent`, 
        component: require.resolve(`./src/components/CharacterContent/MagnaContent.js`)
    })
    actions.createSlice({ 
        id: `gideonContent`, 
        component: require.resolve(`./src/components/CharacterContent/GideonContent.js`)
    })
    actions.createSlice({ 
        id: `tarkinContent`, 
        component: require.resolve(`./src/components/CharacterContent/TarkinContent.js`)
    })
    actions.createSlice({ 
        id: `padmeContent`, 
        component: require.resolve(`./src/components/CharacterContent/PadmeContent.js`)
    })
    actions.createSlice({ 
        id: `ploContent`, 
        component: require.resolve(`./src/components/CharacterContent/PloContent.js`)
    })
    actions.createSlice({ 
        id: `poeContent`, 
        component: require.resolve(`./src/components/CharacterContent/PoeContent.js`)
    })
    actions.createSlice({ 
        id: `quiContent`, 
        component: require.resolve(`./src/components/CharacterContent/QuiContent.js`)
    })
    actions.createSlice({ 
        id: `r2Content`, 
        component: require.resolve(`./src/components/CharacterContent/R2Content.js`)
    })
    actions.createSlice({ 
        id: `reyContent`, 
        component: require.resolve(`./src/components/CharacterContent/ReyContent.js`)
    })
    actions.createSlice({ 
        id: `savageContent`, 
        component: require.resolve(`./src/components/CharacterContent/SavageContent.js`)
    })
    actions.createSlice({ 
        id: `shaakContent`, 
        component: require.resolve(`./src/components/CharacterContent/ShaakContent.js`)
    })
    actions.createSlice({ 
        id: `snokeContent`, 
        component: require.resolve(`./src/components/CharacterContent/SnokeContent.js`)
    })
    actions.createSlice({ 
        id: `starkillerContent`, 
        component: require.resolve(`./src/components/CharacterContent/StarkillerContent.js`)
    })
    actions.createSlice({ 
        id: `yodaContent`, 
        component: require.resolve(`./src/components/CharacterContent/YodaContent.js`)
    })
    actions.createSlice({ 
        id: `kitContent`, 
        component: require.resolve(`./src/components/CharacterContent/KitContent.js`)
    })
}