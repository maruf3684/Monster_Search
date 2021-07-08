import React, {Component} from 'react';
import Cardlist from "../cardlist/cardlist";
import Searchbox from "../searchbox/searchbox";





class Monster extends Component {

    constructor() {
            super();
            this.state={

                monsters:[],
                searchfield:""


            }

    }


///////////////////////////////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        const ll = async ()=>{
            try{
                let userdata=await fetch('https://jsonplaceholder.typicode.com/users')
                let user= await userdata.json()
                console.log(user)
                this.setState({monsters:user})

            }catch (e){
                console.log(`${e} happend`)
            }
        }

        ll()

    }
//////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

    handlechange = (event)=>{
        this.setState({searchfield: event.target.value})
    }

///////////////////////////////////////////////////////////////////////////




    render() {

        //State a change mane render notun kore call hobe
        let {monsters,searchfield} = this.state
        const filtermonster=monsters.filter((monsters)=>{return monsters.name.toLowerCase().includes(searchfield.toLowerCase())})

        console.log(filtermonster)
         
        return (
            <div>
                <h1 style={{color: "red",textAlign:'center'}}>Monsters Rolodex</h1>
                <Searchbox placeholder='Search Monster' handlechange={this.handlechange}/>

                <Cardlist monsters={filtermonster} />

            </div>
        );
    }
}

export default Monster;