import React, { Component } from 'react'

const initialState = {
    quests:[{
        questName: "SLC Mountaineer",
        reqUserLevel: 2,
        objectives: ["Grandeur Peak", "Mt. Olympus", "Twin Mountains", "Lone Peak"],
        description:"Summit the biggest peaks Wasatch peaks dominating the Salt Lake valley horizon",
        difficulty: "Difficult",
        expVal: 100,
        subAreas: "SLC",
        areas:"Wasatch Front",
        states:"UT"

    }]
}

export default class QuestProvider extends Component {
    constructor(){
        super();
        this.state = initialState
    }

    getQuests(){
        //axios get request for quests
    }

    render() {
        const {quests} = this.state
        return (
            this.props.children({
                quests
            })
        )
    }
}

export const withQuestProvider = C => props => (
    <QuestProvider>
        {containerProps => <C {...containerProps}{...props} />}
    </QuestProvider>
)
