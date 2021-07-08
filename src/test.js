// componentDidMount() {
//     var ll = async ()=>{
//         try{
//             let userdata=await fetch('https://jsonplaceholder.typicode.com/users')
//             let user= await userdata.json()
//             console.log(user)
//             this.setState({monsters:user})
//
//         }catch (e){
//             console.log(`${e} happend`)
//         }
//     }
//
//     ll()
//
// }
// ////////////////////////////////////////////////////////////////////////////
//
// componentDidMount() {
//
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {return response.json()})
//         .then((user) =>  {return this.setState({monsters:user})})
//
// }

//////////////////////////////////////////////////////////////////////
//
// {(event)=>{
//     this.setState({searchfield:event.target.value},()=>{console.log(this.state.searchfield)})
// }}