import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import React, { Component } from "react";
import { DryDef, OilyDef, ComboDef } from "../definitions/SkinTypeDef";

class SkinTypes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showOily: false,
            showDry: false,
            showCombo: false
        }
        this.onOilyDefClick = this.onOilyDefClick.bind(this)
        this.onDryDefClick = this.onDryDefClick.bind(this)
        this.onComboDefClick = this.onComboDefClick.bind(this)
    }

    renderOilyDef() {
        return (
            <OilyDef
                title={'Oily Skin'}
                content={`Those with oily skin normally 
                produce too much oil causing bad breakouts 
                and shinyness throughout the day! Oil control 
                cleansers, exfoliating toners, and lightweight, 
                oil-free moisturizers/SPF are going to be your best 
                friend!!`}
                onBackClick={this.onOilyDefClick}
            />
        )
    }

    renderDryDef() {
        return (
            <DryDef
                title={'Dry Skin'}
                content={`Those with dry skin normally do not produce enough oil in their skin
            causing tight, dry skin and flakiness throughout the day. Dry skin users want to look for 
            hydrating cleansers, gentle alcohol-free toners and super moisturizing serums/SPF.`}
                onBackClick={this.onDryDefClick}
            />
        )
    }


    renderComboDef() {
        return (
            <ComboDef
                title={'Combination/Normal Skin'}
                content={`Those with combination/normal skin have the best of both worlds;
            enough oil to keep your skin moisturized but not too much to build up and cause 
            breakouts! While combo/normal skin can pretty much get away with using anything,
            gentle cleansers, hydrating sermums/toners and a really good moisturizer/SPF is recommended.`}
                onBackClick={this.onComboDefClick}
            />
        )
    }

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
                <Typography variant='h4' style={{ textAlign: 'center' }}>You have <span style={{ color: '#AB90D0', variant: 'h3', fontWeight: 'bold' }}>{this.props.result}</span> skin!</Typography>
                <br />
                <List>
                    <ListItem onClick={this.onOilyDefClick}>
                        <ListItemText> Learn more about <span style={{ color: '#AB90D0', fontWeight: 'bold' }}> Oily</span> skin </ListItemText>
                    </ListItem>
                    <ListItem onClick={this.onDryDefClick}>
                        <ListItemText> Learn more about <span style={{ color: '#AB90D0', fontWeight: 'bold' }}> Dry</span> skin </ListItemText>
                    </ListItem>
                    <ListItem onClick={this.onComboDefClick}>
                        <ListItemText> Learn more about <span style={{ color: '#AB90D0', fontWeight: 'bold' }}> Combination/Normal</span> skin </ListItemText>
                    </ListItem>
                </List>

            </div>
        )
    }

    onOilyDefClick() {
        let showOily = this.state.showOily
        this.setState({ showOily: !showOily })
    }

    onDryDefClick() {
        let showDry = this.state.showDry
        this.setState({ showDry: !showDry })
    }

    onComboDefClick() {
        let showCombo = this.state.showCombo
        this.setState({ showCombo: !showCombo })
    }
}

export default SkinTypes;