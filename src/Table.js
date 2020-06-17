import React from "react"

class Table extends React.Component{
    constructor(props){
        super()
        this.state = {data:props.data, 0: true, sortedBy: "country" }
        this.handleClick= this.handleClick.bind(this)
    }

    // Sorts the list based on the column head clicked on, if list is already sorted sorts the list in the opposite way i.e. from descending to ascending and vice versa.
    handleClick(a){
        this.setState(prevState=>{
            let b = prevState.data

            if(prevState.sortedBy===a)
                {
                    b.sort((x,y)=> y[a]-x[a])
                    console.log(a, prevState.sortedBy)
                }
            else
                b.sort((x,y)=> x[a]-y[a])
            return {data: b, sortedBy: a}
        })
    }
    
    render (){
    const countryData = this.state.data
    const a = countryData.map((country) =>
        {
            return (
            <tbody key = {country.cCode}>
            <tr>
                <td>{country.country}</td>
                <td>{country.confirmed}</td>
                <td>{country.deaths}</td>
                <td>{country.recovered}</td>
            </tr>
        </tbody>)
    })
    // Return the table with the all the data from the api. onMouseUp function passes the an int based on its position in the array to make sorting data easier.
    return (<table>
        <thead>
        <tr><th onMouseUp= {this.handleClick.bind(this,"country")} value ="1" >Country Name</th>
        <th onMouseUp= {this.handleClick.bind(this,"confirmed")}>Comfirmed</th>
        <th onMouseUp= {this.handleClick.bind(this,"deaths")}>Deaths</th>
        <th onMouseUp= {this.handleClick.bind(this,"recovered")}>Recovered</th></tr></thead>
        {a}
        </table>)
}}

export default Table

