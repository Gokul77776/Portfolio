import { Hero } from "@/components/pages/home/hero";
import CardHoverEffectDemo from "@/components/pages/home/open-source";
import { Tools } from "@/components/pages/home/tools";
import {WhatIDo } from "@/components/pages/home/whatido"


export function Home(){
    return(
        <section>
            <Hero/>
            <WhatIDo />
            <Tools/>
            <CardHoverEffectDemo/>
            
        </section>
    )
}