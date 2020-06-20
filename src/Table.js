import React from "react"
import './Table.css';

class Table extends React.Component{
    constructor(props){
        super()
        this.state = {data:props.data, 0: true, sortedBy: "count" }
        this.handleClick= this.handleClick.bind(this)
    }

    // Sorts the list based on the column head clicked on, if list is already sorted sorts the list in the opposite way i.e. from descending to ascending and vice versa.
    handleClick(a){
        this.setState(prevState=>{
            let b = prevState.data

            if(prevState.sortedBy===a)
                {
                    b.sort((x,y)=> x[a]-y[a])
                }
            else{
                b.sort((x,y)=> y[a]-x[a])
            }
            return {data: b, sortedBy: a}
        })
    }
    
    render (){
    const countryData = this.state.data
    const data = countryData.map((country) =>
        {
            return (
 
            <tr  key = {country.cCode}>
                <td>{country.country}</td>
                <td>{country.confirmed}</td>
                <td>{country.deaths}</td>
                <td>{country.recovered}</td>
            </tr>
)
    })
    // Return the table with the all the data from the api. onMouseUp function passes the an int based on its position in the array to make sorting data easier.
    return (<div><table id = "table">
        <thead id ="head">
        <tr><th onMouseUp= {this.handleClick.bind(this,"count")} value ="1" >Country Name</th>
        <th onMouseUp= {this.handleClick.bind(this,"confirmed")}>Confirmed</th>
        <th onMouseUp= {this.handleClick.bind(this,"deaths")}>Deaths</th>
        <th onMouseUp= {this.handleClick.bind(this,"recovered")}>Recovered</th></tr></thead>
        <tbody id= "body">
        {data}
        </tbody>
        </table>
        </div>)
}}

export default Table

