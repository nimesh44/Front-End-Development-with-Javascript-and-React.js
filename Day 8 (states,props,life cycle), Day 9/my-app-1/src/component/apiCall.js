import React,{Component} from 'react'
import axios from 'axios'
class ApiCall extends Component{

    // to store data let create a state
    constructor(props){
        super(props)
        this.state ={
            covidData:[],
            // data is not loaded yet
            loading:true
        }
    }

    componentDidMount(){
        this.getRemoteData()
    }

    getRemoteData= ()=>{
        let self = this
        axios.get('http://coronavirus-19-api.herokuapp.com/countries').
        then(function(response){
            // console.log(response)
            // console.log(response.data)
            self.setState({
                covidData: response.data,
                //data is already loaded, so it becomes false
                loading:false
            })
        }).
        catch(function(error){

        })
    }
    render(){
        return(
            <div>
                {// using ternery operator to check data loading status
                this.state.loading ?
                //if true: data is not loaded yet
                <div>Data is loading...........</div>:
                // if false:- data already loaded
                <div>
                    {
                    this.state.covidData.map( (data)=>
                    <div>{data.country}</div>
                        )
                    }
                </div>
                }
            </div>
        )
    }
}

export {ApiCall}