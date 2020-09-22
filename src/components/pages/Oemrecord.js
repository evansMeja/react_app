import React, {Component} from "react";

class Oemrecord extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            items:[]
        }
    }

    componentDidMount(){
        fetch('http://13.233.237.220:8091/getOemdetails').
        then(res=>res.json()).
        then(json => {
            this.setState({
                isLoaded:true,
                items:json
            })
        });
    }


    render(){
        console.log(this.props);
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <div className="text-center p-5">Loading ...</div>

        }else{
            return (
            <div>
                <h4 className="text-center bg-primary text-white p-3">OEM DATABASE DETAILS</h4>
                <table className="table table-striped">
                    <tr>
                        <th>OEM Name</th>
                        <th>OEM Type</th>
                        <th>OEM Logo</th>
                        <th>View</th>
                        <th>Change</th>
                        <th>Delete</th>
                    </tr>
                    {items.map(item=>(
                    <tr key={item.oem_id}>
                    <td >{item.oem_name} </td>
                    <td >{item.oem_type} </td>
                    <td ><img src={item.oem_logo}/> </td>
                    <td ><a href={"/oemdetail/:"+item.oem_id}>View Record</a></td>
                    <td ><a href="#">Update</a></td>
                    <td ><a href="#">Delete</a></td>
                    </tr>
                    ))}
                </table>
            </div>
        )
}
}
}



export default Oemrecord;
