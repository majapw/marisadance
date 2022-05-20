enum marisaVersions {
    RUGBY,
    HIKER

}

const versionMetadata = {
    [marisaVersions.RUGBY]: {
        title: 'Rugby Marisa',
        image: 'rugby-marisa.png',
        description: "Rugby Marisa is an absolute badass on the pitch. She's fast as hell, a dynamic AF runner and makes enormous, try-saving tackles. What's more, she obviously loves the game and always has a smile plastered on her face when she's playing. Her teammates at Ithaca, Chesapeake and the Berkeley All Blues know her for her heart. ❤️❤️❤️"
    },
    [marisaVersions.HIKER]: {
        title: 'Hiker Marisa',
        image: 'hiker-marisa.png',
        description: "Hiker Marisa has a passion for the outdoors. She loves being out in nature and appreciating the serenity and beauty that the California wilderness offers. She appreciates hiking the most when she can share the experience with a group of close friends."
    }
}

export default versionMetadata;