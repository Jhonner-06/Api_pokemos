import {Button} from "./componentes/Button";
import "./sass/App.scss"
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";
import { useState, useEffect } from "react";
import { Card } from "./componentes/Card";

const App = () => {
    const [pokemonid ,setPokemonid ] = useState(60);
    const [pokemonevolution, setPokemonevolutions] = useState([]);
    

    useEffect(() =>{
        getEvolution(pokemonid);
    }, [pokemonid])

    async function getEvolution (id) {
       const response = await fetch
       (`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
       const data = await response.json()

       let pokemonEvoarray = []

       let pokemonLv1 = data.chain.species.name
       let PokemonLv1Img = await getPokemonImg(pokemonLv1)
       pokemonEvoarray.push([pokemonLv1, PokemonLv1Img])
       

       if(data.chain.evolves_to.length !== 0){
        let pokemonLv2 = data.chain.evolves_to[0].species.name;
        let PokemonLv2Img = await getPokemonImg(pokemonLv2)
        pokemonEvoarray.push([pokemonLv2, PokemonLv2Img])
        

        if(data.chain.evolves_to[0].evolves_to.length !== 0){
        let pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let PokemonLv3Img = await getPokemonImg(pokemonLv3)
        pokemonEvoarray.push([pokemonLv3, PokemonLv3Img])
        
        }
       }
       setPokemonevolutions (pokemonEvoarray)
    }
    
    async function getPokemonImg(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        const data = await response.json()
        return data.sprites.other["official-artwork"].front_default;
        
    }

    return(
        <div className="app">
            {/*/ tarjetas */}
            <div className={`card-container card${pokemonevolution.length}`}>
                {pokemonevolution.map(pokemon =>
                <Card 
                key={pokemon[0]}
                name ={pokemon[0]}
                img = {pokemon[1]} />)}
               
            </div>
            
            <div className="buttons-containers">
            <Button icon= {<TiArrowLeftThick />} handleClick = {() => {
                if(pokemonid === 1){
                setPokemonid(1)}
                else{
                    setPokemonid(pokemonid -1)
                }}

                } />
            
            <Button icon={<TiArrowRightThick />} handleClick = {() => {setPokemonid(pokemonid + 1)}}/>
            </div>
        </div>
    )
}

export{App}