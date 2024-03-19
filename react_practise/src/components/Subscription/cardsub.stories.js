import React from "react";
import Medium from '../Input/Input.stories'
import {PrimaryA} from '../Button/Button.stories'
import imageUrl from '../Images/image1.jfif'
import Card from "../CARD/Card";
import CardStories, { Image1,Image2 } from "../CARD/Card.stories";
import FooterStories from "../Footer/Footer.stories";
import Footer from "../Footer/Footer";
export default{
    title:'Form/Subscription'
}
export const PrimarySubscription = () => (
        <>
            <Image1/>
            <Card imageUrl={imageUrl} productName='Hair Brush' description='Describe the product' price='8999' rating='4'/>
            <Card imageUrl={imageUrl} productName='Girl' description='drftgyhujik' price='5678' rating='5'/>
            <Card Image1={Image1} productName='Child' description='vfgtyukmnbvghj' initialRating='2'></Card>
            <Card></Card>
            <Image2/>
            <Footer/>       
            <br/>
            <PrimaryA>
            This is Button
            </PrimaryA>
            <br/>
        </>
)