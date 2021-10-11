import React from "react";
import { Box, Grid, Card, CardContent, Button, Typography, Link, CardMedia } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import deepCleanse from '../../../assets/deep_cleanse.jpg';
import toner from '../../../assets/toner.jpg';
import { Parallax } from 'react-parallax';
import pinkflower from '../../../assets/pinkflower.jpg';
import green from '../../../assets/green.jpg';
import exfoliate from '../../../assets/exfoliant.jpg';
import serum from '../../../assets/multi_serum.jpg';
import priming from '../../../assets/priming_moisture.jpg';
import gentleCleanse from '../../../assets/gentle_cleanse.jpg';
import hyal from '../../../assets/hyal_serum.jpg';
import silkyMoisture from '../../../assets/silky_moisture.jpg';
import maxOil from '../../../assets/max_oil.jpg';
import radiant from '../../../assets/radiant_sun.jpg';
import antiSheer from '../../../assets/anti_sun.jpg';
import MainQuizCss from '../../../pages/MainQuiz.css';



//import BackButton from "../BackButton";

//Styling for the info cards
const useStyles = makeStyles(theme => ({
    cardContainer: {
        backgroundColor: 'rgb(230, 224, 215)',
        color: 'black',
        boxShadow: '0 15px 20px #E5BEDE, 0 15px 12px rgba(0,0,0,0.22)',
        borderRadius: '15px',
    },
    title: {
        fontSize: '300%',
        textAlign: 'center',
        marginTop: '5px',
        fontFamily: 'Ephesis',
        fontWeight: 'bold'
    },
    content: {
        fontSize: '100%',
        textAlign: 'center',
        fontFamily: 'cursive'
    },
    routineCard: {
        backgroundColor: 'rgb(230, 224, 215)',
        fontFamily: 'cursive',
    },
    stepTitle: {
        fontFamily: 'Ephesis',

    },
    steps: {
        textAlign: 'center'
    }
}));

//Creating info cards with the title and content so users can read more about the different skin types
//Oily skin card
const OilyDef = ({ title, content, onBackClick, button }) => {
    const classes = useStyles();
    return (
        <Grid container >
            <Grid >
        <div className={classes.oily}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Button onClick={onBackClick}>
                        <Link style={{ color: 'black' }} to='/results'>Back</Link>  {button}
                    </Button>
                    <Typography className={classes.title} style={{ textAlign: 'center' }}> {title} </Typography>
                    <br />
                    <Typography className={classes.content}> {content} </Typography>
                    <br /><br />
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '580px', width: '1000px' }}>
                        <div style={{ height: 150 }}>
                        </div>
                    </Parallax>
                    <br />
                    {/*1st routine card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography variant='h2' style={{ textAlign: 'center', fontFamily: 'Ephesis', }}>Your Routine</Typography>
                            <br />
                            <Typography className={classes.stepTitle} variant='h3'> Step 1: Cleanser</Typography>
                            <br />
                            <p className={classes.steps} >Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Deep Cleansing Gel </span> lifts oil and dirt out of the pores, leaving
                                skin feeling fresh and clean! Use morning and night with lukewarm to get the best clean
                                of your life!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }} image={deepCleanse} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax className={classes.bg} bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*2nd routine card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 2: Toner</Typography>
                            <br />
                            <p className={classes.steps} >Toning is a must in any skincare routine beacuse it removes any last traces of dirt and grime that
                                your cleanser may have missed. Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Brightening Toner </span> lifts 
                                impurities while brightening and smoothing, leaving your skin
                                radiant and beautiful. Use in the morning after cleansing.
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }} image={toner} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*3rd routine card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 3: Exfoliate </Typography>
                            <br />
                            <p className={classes.steps} > Exfoliating is the process of removing dead skin cells from your skin with a chemical or tool.
                                This is important because when our skin sheds to create new skin cells, the old skin can sit on our
                                skin causing buildup and breakouts. Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Overnight Exfoliant </span>is made with 
                                one-of-a-kind microbeads that gently
                                remove dead skin, leaving your skin feeling fresh and silky smooth! Use this toner <span style={{ color: '#55B7B2', fontWeight: 'bold' }}> 2-3 nights </span>
                                a week and wake up with beautiful smooth skin!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }} image={exfoliate} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*4th routine card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 4: Serums</Typography>
                            <br />
                            <p className={classes.steps} > Now time to pump our skin with some hydration and anti-aging with
                                our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Multi-Peptide Serum </span>. Peptides are amino acids that help build proteins, such as
                                collagen and elastin, that are needed to help produce healthy skin. When using
                                peptides on a regular bacsis, skin can appear younger-looking and more firm! Use this serum morning
                                and night before moisturizing.
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }} image={serum} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*5th routine card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 5: Moisturize </Typography>
                            <br />
                            <p className={classes.steps} > Our #1 seller <span style={{ color: '#55B773', fontWeight: 'bold' }}> Priming Moisturizer </span> minimizes the appearnce of pores
                                and gives your skin the hydration it craves! Use in the morning before SPF and at night before bed to have the
                                most hydrated, smooth skin with zero pores!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={priming} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*6th routine card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 6: Sunscreen</Typography>
                            <br />
                            <p className={classes.steps} > One of the most important steps to any skincare routine: Sunscreen! Protect your skin from
                                premature aging and harsh UV rays without looking oily or shiny with our oil-free <span style={{ color: '#55B773', fontWeight: 'bold' }}> 
                                Anti-Sheer Sunscreen </span> with SPF 46!
                                Apply in the morning and anytime before being exposed to sunlight. Reapply throughout the day as needed!

                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }} image={antiSheer} />
                            <br />
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
        </Grid>
        </Grid>
    )
}

//Dry skin card
const DryDef = ({ title, content, onBackClick, button }) => {
    const classes = useStyles();
    return (
        <div className={classes.oily}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Button onClick={onBackClick}>
                        <Link style={{ color: 'black' }} to='/results'>Back</Link>  {button}
                    </Button>
                    <Typography className={classes.title}> {title} </Typography>
                    <br />
                    <Typography className={classes.content}> {content} </Typography>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '580px', width: '1000px' }}>
                        <div style={{ height: 150 }}>
                        </div>
                    </Parallax>
                    <br />
                    {/*1st card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography variant='h2' style={{ textAlign: 'center', fontFamily: 'Ephesis', }}>Your Routine</Typography>
                            <br />
                            <Typography className={classes.stepTitle} variant='h3'> Step 1: Cleanser</Typography>
                            <br />
                            <p className={classes.steps} > Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Gentle Foaming Cleanser </span>containing green tea and honey,
                                gently cleans all dirt and grim from your
                                face while simultaneously adding hydration and
                                moisture. Use morning and night!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={gentleCleanse} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*2nd card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 2: Toner</Typography>
                            <br />
                            <p className={classes.steps} >Toning is a must in any skincare routine beacuse it removes any last traces of dirt and grime that
                                your cleanser may have missed. Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Brightening Toner </span> lifts impurities
                                while brightening and smoothing, leaving your skin
                                radiant and beautiful. Use in the morning after cleansing.
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={toner} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*3rd card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 3: Exfoliate </Typography>
                            <br />
                            <p className={classes.steps} >Exfoliating is the process of removing dead skin cells from your skin with a chemical or tool.
                                This is important because when our skin sheds to create new skin cells, the old skin can sit on our
                                skin causing buildup and breakouts. Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Overnight Exfoliant </span>is made with one-of-a-kind
                                microbeads that gently remove dead skin, leaving your skin feeling fresh and silky smooth!
                                Use this toner <span style={{ color: '#55B7B2', fontWeight: 'bold' }}> 2-3 nights </span>
                                a week and wake up with beautiful smooth skin!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={exfoliate} />
                            <br />
                        </CardContent>
                        <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                            <div style={{ height: 200 }}>
                            </div>
                        </Parallax>
                        {/*4th card*/}
                        <Card className={classes.routineCard}>
                            <CardContent>
                                <Typography className={classes.stepTitle} variant='h3'> Step 4: Serum </Typography>
                                <br />
                                <p className={classes.steps} > For dry skin our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Hyaluronic Acid Serum </span>packs your skin with hydration and
                                    moisture, leaving your skin looking plump and hydrated. Hyaluronic acid is what is considered
                                    a <span style={{ color: '#55B7B2', fontWeight: 'bold' }}> humectant </span>, a substance that helps
                                    skin to hold onto water. </p>
                                <br />
                                <p style={{ fontSize: '100%', color: '#55B7B2', fontWeight: 'bold' }}> A tip for those in drier climates: Hymectants tend to grab water from the air
                                    around you, however in drier climates where there is limited moisture in the air, the next place with the most moisture to draw
                                    from is your skin, meaning it could dry your skin out more! So try splashing your face with water or spraying
                                    a facial mist and then apply the hyaluronic acid to the wet skin so that the humectant grabs from the water and not
                                    from your skin! </p>

                                <br />
                                <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={hyal} />
                                <br />
                            </CardContent>
                        </Card>
                        <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                            <div style={{ height: 200 }}>
                            </div>
                        </Parallax>
                        {/*5th card*/}
                        <Card className={classes.routineCard}>
                            <CardContent>
                                <Typography className={classes.stepTitle} variant='h3'> Step 5: Moistirize </Typography>
                                <br />
                                <p className={classes.steps} > Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Silky Face Cream </span>infused with natural shea butter and 
                                glycerin packs a punch of hydration like no other,
                                    leaving your skin smooth to the touch! Use morning and night.

                                </p>
                                <br />
                                <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={silkyMoisture} />
                                <br />
                            </CardContent>
                        </Card>
                        <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                            <div style={{ height: 200 }}>
                            </div>
                        </Parallax>
                        {/*6th card*/}
                        <Card className={classes.routineCard}>
                            <CardContent>
                                <Typography className={classes.stepTitle} variant='h3'> Oils </Typography>
                                <br />
                                <p className={classes.steps} > Our most moisturizng oil yet, the <span style={{ color: '#55B773', fontWeight: 'bold' }}> Max Hydration Face Oil </span>, brings
                                    dry skin to life! Infused with 7 amazing oils
                                    (maracuja, argan, jojoba, grapeseed, sunflower, rose hip, and almond) say goodbye to dry, flakey skin and hello
                                    to a world of hydration. Use at night before bed to get the max hydration!
                                </p>
                                <br />
                                <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={maxOil} />
                                <br />
                            </CardContent>
                        </Card>
                        <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                            <div style={{ height: 200 }}>
                            </div>
                        </Parallax>
                        {/*7th card*/}
                        <Card className={classes.routineCard}>
                            <CardContent>
                                <Typography className={classes.stepTitle} variant='h3'> Step 6: Suncreen </Typography>
                                <br />
                                <p className={classes.steps} >  Protect your skin from the harsh UV's and prevent premature aging with our <span style={{ color: '#55B773', fontWeight: 'bold' }}>
                                    Radiant Sunscreen </span>!
                                    Designed with dry skin in mind, this sunscreen not only protects from the harsh sun but has sparkle infused
                                    to make your dry skin shine and look plump and protected!
                                </p>
                                <br />
                                <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={radiant} />
                                <br />
                            </CardContent>
                        </Card>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}

//Combo/normal skin card
const ComboDef = ({ title, content, onBackClick, button }) => {
    const classes = useStyles();
    return (
        <div className={classes.oily}>
            <Card className={classes.cardContainer}>
                <CardContent>
                    <Button onClick={onBackClick}>
                        <Link style={{ color: 'black' }} to='/results'>Back</Link>  {button}
                    </Button>
                    <Typography className={classes.title}> {title} </Typography>
                    <br />
                    <Typography className={classes.content}> {content} </Typography>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '580px', width: '1000px' }}>
                        <div style={{ height: 150 }}>
                        </div>
                    </Parallax>
                    <br />
                    {/*1st card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>

                            <Typography variant='h2' style={{ textAlign: 'center', fontFamily: 'Ephesis', }}>Your Routine</Typography>
                            <br />
                            <Typography className={classes.stepTitle} variant='h3'> Step 1: Cleanser</Typography>
                            <br />
                            <p className={classes.steps} >Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Deep Cleansing Gel </span>lifts oil and dirt out of the pores, leaving
                                skin feeling fresh and clean! Use morning and night with lukewarm to get the best clean
                                of your life!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={deepCleanse} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*2nd card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 2: Toner</Typography>
                            <br />
                            <p  className={classes.steps}>Toning is a must in any skincare routine beacuse it removes any last traces of dirt and grime that
                                your cleanser may have missed. Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Brightening Toner </span> lifts impurities
                                while brightening and smoothing, leaving your skin
                                radiant and beautiful. Use in the morning after cleansing.
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={toner} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*3rd card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 3: Exfoliate </Typography>
                            <br />
                            <p className={classes.steps} >Exfoliating is the process of removing dead skin cells from your skin with a chemical or tool.
                                This is important because when our skin sheds to create new skin cells, the old skin can sit on our
                                skin causing buildup and breakouts. Our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Overnight Exfoliant </span>is made with one-of-a-kind
                                microbeads that gently remove dead skin, leaving your skin feeling fresh and silky smooth!
                                Use this toner <span style={{ color: '#55B7B2', fontWeight: 'bold' }}> 2-3 nights </span>
                                a week and wake up with beautiful smooth skin!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={exfoliate} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*4th card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 4: Serum </Typography>
                            <br />
                            <p className={classes.steps} > For dry skin our <span style={{ color: '#55B773', fontWeight: 'bold' }}> Hyaluronic Acid Serum </span>packs your skin with hydration and
                                    moisture, leaving your skin looking plump and hydrated. Hyaluronic acid is what is considered
                                    a <span style={{ color: '#55B7B2', fontWeight: 'bold' }}> humectant </span>, a substance that helps
                                    skin to hold onto water. </p>
                            <br />
                            <p style={{ fontSize: '100%', color: '#55B7B2', fontWeight: 'bold' }}> A tip for those in drier climates: Hymectants tend to grab water from the air
                                around you, however in drier climates where there is limited moisture in the air, the next place with the most moisture to draw
                                from is your skin, meaning it could dry your skin out more! So try splashing your face with water or spraying
                                a facial mist and then apply the hyaluronic acid to the wet skin so that the humectant grabs from the water and not
                                from your skin! </p>

                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={hyal} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={pinkflower} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*5th card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 5: Moisturize </Typography>
                            <br />
                            <p className={classes.steps} > Our #1 seller <span style={{ color: '#55B773', fontWeight: 'bold' }}> Priming Moisturizer </span> minimizes the appearnce of pores
                                and gives your skin the hydration it craves! Use in the morning before SPF and at night before bed to have the
                                most hydrated, smooth skin with zero pores!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={priming} />
                            <br />
                        </CardContent>
                    </Card>
                    <Parallax bgImage={green} strength={600} bgImageStyle={{ height: '650px', width: '1000px' }}>
                        <div style={{ height: 200 }}>
                        </div>
                    </Parallax>
                    {/*6th card*/}
                    <Card className={classes.routineCard}>
                        <CardContent>
                            <Typography className={classes.stepTitle} variant='h3'> Step 6: Sunscreen</Typography>
                            <br />
                            <p className={classes.steps} > One of the most important steps to any skincare routine: Sunscreen! Protect your skin from
                                premature aging and harsh UV rays without looking oily or shiny with our oil-free <span style={{ color: '#55B773', fontWeight: 'bold' }}> 
                                Anti-Sheer Sunscreen </span> with SPF 46!
                                Apply in the morning and anytime before being exposed to sunlight. Reapply throughout the day as needed!
                            </p>
                            <br />
                            <CardMedia component='img' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}  image={antiSheer} />
                            <br />
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}

export { OilyDef, DryDef, ComboDef }