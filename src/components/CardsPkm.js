import React, {Component} from 'react';
import { Row, Col, Divider } from 'antd';
import img from '../img/pokedev.png'
import PokemonsDataService from '../services/PokemonsDataService';
import '../App.css';
import axios from 'axios';


const style = { 
    
   
    padding: '8px 0',
    border: '14px',
    marginBottom: '32px',
    borderRadius: '5px'
};

const fontStyle={
    color: 'white',
}



export default class CardsPkm extends Component{  
    constructor(props){
        super(props);
        this.state={
            pokemon: [],
            pokemontypeone: [],
            pokemontypetwo:[],
            message: null
        }

    }
    
    
    componentDidMount(){
        this.refreshPokemons();
        
        
    }


    refreshPokemons(){
        PokemonsDataService.retrieveAllPokemons().then(
            response=>{
                console.log(response);
                this.setState({pokemon: response.data});
            
            }
        );
        
    }

   

    renderRow(row, number){
        var Pokedex = require('pokedex-promise-v2');
        var P = new Pokedex();
        P.getPokemonByName(number+1).then(
            response=>{
                if((response.types).length === 2){
                    document.getElementById(number).style.backgroundImage = 'linear-gradient(to bottom right, var(--'+response.types[0].type.name+'), var(--'+response.types[1].type.name+'))';
                    
    
                    document.getElementById('type'+number).style.backgroundColor = 'var(--'+response.types[0].type.name+')';
    
                    document.getElementById('type'+number).innerHTML = response.types[0].type.name.toUpperCase();
    
    
                    document.getElementById('typetwo'+number).style.backgroundColor = 'var(--'+response.types[1].type.name+')';
    
                    document.getElementById('typetwo'+number).innerHTML = response.types[1].type.name.toUpperCase();
                  } else {
                    document.getElementById(number).style.backgroundImage = 'linear-gradient(to bottom right, var(--'+response.types[0].type.name+'), var(--'+response.types[0].type.name+'))';
                    document.getElementById('type'+number).style.backgroundColor = 'var(--'+response.types[0].type.name+')';
                    document.getElementById('type'+number).innerHTML = response.types[0].type.name.toUpperCase();
                    document.getElementById('typetwo'+number).style.display = 'none';
                  }
                
            }
        )

        
        return (
            <Col className="gutter-row" span={6}>
                <div id={number} style={style} >
                
                <h2 style={fontStyle}>#{number +1}</h2>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(number+1) +'.png'} className="App-logo" alt="logo" style={{height:'20%', width: '50%'} }/>
                <div className='types' id={'typespkm'+number}>
                    <div id={'type'+number} className="typesPkm">Types</div>
                    <div id={'typetwo'+number} className="typesPkm">Types</div>
                    
                </div>
                
                <h3 style ={fontStyle}>{(row.name).toUpperCase()}</h3>
                </div>
            </Col>)
       
      }
    
 render(){
    let rows = []
    if(this.state.pokemon.results !== undefined){
    for(let i=0; i<898; i++){
            rows.push(this.state.pokemon.results[i])

        }
    }
    
        return (
            <>
            <Divider orientation="left"></Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin: '0'}}>
              {rows.map(this.renderRow)}
            </Row>
            
          </>
            
        );
    
        }
}