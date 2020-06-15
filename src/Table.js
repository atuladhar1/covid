import React from "react"

class Table extends React.Component{
    constructor(props){
        super()
        this.state = {data:props.data, 0: true, sortedBy:0 }
        this.handleClick= this.handleClick.bind(this)
    }

    // Sorts the list based on the column head clicked on, if list is already sorted sorts the list in the opposite way i.e. from descending to ascending and vice versa.
    handleClick(a){
        this.setState(prevState=>{
            let b = prevState.data
            if(prevState.sortedBy===a)
                b.sort((x,y)=> y[a]-x[a])
            else
                b.sort((x,y)=> x[a]-y[a])
            return {data: b, sortedBy:{a}}
        })
    }
    
    render (){
    const countryData = this.state.data
    const a = countryData.map(x =>
        (<tbody key = {x[0]}>
            <tr>
                <td>{x[1]}</td>
                <td>{x[2]}</td>
                <td>{x[3]}</td>
                <td>{x[4]}</td>
            </tr>
        </tbody>))
    
    return (<table>
        <thead>
        <tr><th onClick= {this.handleClick.bind(this,0)} value ="1" >Country Name</th>
        <th onClick= {this.handleClick.bind(this,2)}>Comfirmed</th>
        <th onClick= {this.handleClick.bind(this,3)}>Deaths</th>
        <th onClick= {this.handleClick.bind(this,4)}>Recovered</th></tr></thead>
        {a}
        </table>)
}}

export default Table

