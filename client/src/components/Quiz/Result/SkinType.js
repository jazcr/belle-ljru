import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import React, { Component } from "react";
import { DryDef, OilyDef, ComboDef } from "../definitions/SkinTypeDef";

//Creating the content and click functions for the skin type info cards
class SkinTypes extends Component {
    constructor(props) {
        super(props)
//Info cards default state is showing false = doesn't render until clicked
        this.state = {
            showOily: false,
            showDry: false,
            showCombo: false
        }
        this.onOilyDefClick = this.onOilyDefClick.bind(this)
        this.onDryDefClick = this.onDryDefClick.bind(this)
        this.onComboDefClick = this.onComboDefClick.bind(this)
    }

//Title and content that will be rendered for the Oily card
    renderOilyDef() {
        return (
            <OilyDef
                title={'🌸 Oily Skin 🌸'}
                content={`Those with oily skin normally 
                produce too much oil causing bad breakouts 
                and shinyness throughout the day! Oil control 
                cleansers, exfoliating toners, and lightweight, 
                oil-free moisturizers/SPF are going to be your best 
                friend!!`}
                //Back button
                onBackClick={this.onOilyDefClick}
            />
        )
    }
//Title and content that will be rendered for the Dry skin card
    renderDryDef() {
        return (
            <DryDef
                title={'🌺 Dry Skin 🌺'}
                content={`Those with dry skin normally do not produce enough oil in their skin
            causing tight, dry skin and flakiness throughout the day. Dry skin users want to look for 
            hydrating cleansers, gentle alcohol-free toners and super moisturizing serums/SPF.`}
                onBackClick={this.onDryDefClick}
            />
        )
    }

//Title and content that will be rendered for the Combo skin card
    renderComboDef() {
        return (
            <ComboDef
                title={'🏵️ Combination/Normal Skin 🏵️'}
                content={`Those with combination/normal skin have the best of both worlds;
            enough oil to keep your skin moisturized but not too much to build up and cause 
            breakouts! While combo/normal skin can pretty much get away with using anything,
            gentle cleansers, hydrating sermums/toners and a really good moisturizer/SPF is recommended.`}
                onBackClick={this.onComboDefClick}
            />
        )
    }

//If the users clicks to see the oily card, then render renderOilyDef
//If the user clicks to see more about dry skin, then renderDryDef
//If the user clickes to see more about combo/normal skin renderComboDef
    render() {
        let showOily = this.state.showOily
        let showDry = this.state.showDry
        let showCombo = this.state.showCombo
        if (showOily) {
            return this.renderOilyDef()
        } else if (showDry) {
            return this.renderDryDef()
        } else if (showCombo) {
            return this.renderComboDef()
        }
        return (
            <div>
                {/*The users results */}
                <Typography variant='h4' style={{ textAlign: 'center', fontFamily: "'Ephesis', cursive" }}>You have <span style={{ color: '#96BD8A', variant: 'h3', fontWeight: 'bold' }}>{this.props.result}</span> skin!</Typography>
                <br />
                {/*The list to render the info cards about the different skin types */}
                <List>
                    {/*When user clicks this text the oily card will render */}
                    <ListItem onClick={this.onOilyDefClick}>
                        <ListItemText> Learn more about <span style={{ color: '#96BD8A', fontWeight: 'bold' }}> Oily</span> skin </ListItemText>
                    </ListItem>
                     {/*When user clicks this text the dry card will render */}
                    <ListItem onClick={this.onDryDefClick}>
                        <ListItemText> Learn more about <span style={{ color: '#96BD8A', fontWeight: 'bold' }}> Dry</span> skin </ListItemText>
                    </ListItem>
                     {/*When user clicks this text the combo/normal card will render */}
                    <ListItem onClick={this.onComboDefClick}>
                        <ListItemText> Learn more about <span style={{ color: '#96BD8A', fontWeight: 'bold' }}> Combination/Normal</span> skin </ListItemText>
                    </ListItem>
                </List>

            </div>
        )
    }
//On click show the oily card, set the state to shown if not already
    onOilyDefClick() {
        let showOily = this.state.showOily
        this.setState({ showOily: !showOily })
    }
//On click show the dry card, set the state to shown if not already
    onDryDefClick() {
        let showDry = this.state.showDry
        this.setState({ showDry: !showDry })
    }
//On click show the combo/normal card, set the state to shown if not already
    onComboDefClick() {
        let showCombo = this.state.showCombo
        this.setState({ showCombo: !showCombo })
    }
}

export default SkinTypes;