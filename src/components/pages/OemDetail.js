import React, {Component} from "react";
import "./detail.css"

class OemDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded:false,
            items:[]
        }
    }

    componentDidMount(){
        var rooturl = window.location.href;
        rooturl = rooturl.split(":");
        var eom_id = rooturl[3];
        console.log(rooturl);
        var fetchurl = 'http://13.233.237.220:8091/getOemdetailsById?oem_id='+eom_id;
        console.log(fetchurl);
        fetch(fetchurl).
        then(res=>res.json()).
        then(json => {
            this.setState({
                isLoaded:true,
                items:json
            })
        });
    }


    render(){
        console.log(this.state.items);
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <div className="text-center p-5">Loading ...</div>
        }else{
            return (
            <div className="p-3 wrapper">



<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>


                {items.map(item=>(
                    <div key={item.eom_id}>
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/oemrecord">All</a></li>
                    <li className="breadcrumb-item">{item.oem_type}</li>
                    <li className="breadcrumb-item">{item.oem_name}</li>
                    <li className="breadcrumb-item active" aria-current="page">{item.oem_id}</li>
                    </ol>
                    </nav>
                     <h4 className="alert alert-info" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">address Information</h4>
                     <table id="collapseExample" className="collapse table table-striped">
                         <tr>
                             <th>Name</th>
                             <th>Value</th>
                         </tr>
                         <tr>
                             <td>House Number </td>
                             <td>{item.address[0].house_no}</td>
                         </tr>
                         <tr>
                             <td>Flat Name </td>
                             <td>{item.address[0].flat_name}</td>
                         </tr>
                         <tr>
                             <td>Building Number </td>
                             <td>{item.address[0].building_no}</td>
                         </tr>
                         <tr>
                             <td>Address Line </td>
                             <td>{item.address[0].address_line}</td>
                         </tr>
                         <tr>
                             <td>Street </td>
                             <td>{item.address[0].street}</td>
                         </tr>
                         <tr>
                             <td>City </td>
                             <td>{item.address[0].city}</td>
                         </tr>
                         <tr>
                             <td>District </td>
                             <td>{item.address[0].district}</td>
                         </tr>
                         <tr>
                             <td>State </td>
                             <td>{item.address[0].state}</td>
                         </tr>
                         <tr>
                             <td>Country </td>
                             <td>{item.address[0].country}</td>
                         </tr>
                         <tr>
                             <td>LandMark </td>
                             <td>{item.address[0].landmark}</td>
                         </tr>
                     </table>
                     <h4 className="alert alert-info">Contact Information</h4>
                    
                     <table className="table table-striped">
                         <tr>
                             <th>Name</th>
                             <th>Value</th>
                         </tr>
                         <tr>
                             <td>Title </td>
                             <td>{item.contactInfo[0].title}</td>
                         </tr>
                         <tr>
                             <td>First Name </td>
                             <td>{item.contactInfo[0].first_name}</td>
                         </tr>
                         <tr>
                             <td>Middle Name </td>
                             <td>{item.contactInfo[0].middle_name}</td>
                         </tr>
                         <tr>
                             <td>Last Name </td>
                             <td>{item.contactInfo[0].last_name}</td>
                         </tr>
                         <tr>
                             <td>Surname </td>
                             <td>{item.contactInfo[0].sur_name}</td>
                         </tr>
                         <tr>
                             <td>Family Name </td>
                             <td>{item.contactInfo[0].family_name}</td>
                         </tr>
                         <tr>
                             <td>Contact Type </td>
                             <td>{item.contactInfo[0].contact_type}</td>
                         </tr>
                         <tr>
                             <td>Mobile Number </td>
                             <td>{item.contactInfo[0].mobile_no}</td>
                         </tr>
                         <tr>
                             <td>Alternate Number </td>
                             <td>{item.contactInfo[0].alternate_no}</td>
                         </tr>
                         <tr>
                             <td>Landline Number </td>
                             <td>{item.contactInfo[0].landline_no}</td>
                         </tr>
                         <tr>
                             <td>Email </td>
                             <td>{item.contactInfo[0].email}</td>
                         </tr>
                         <tr>
                             <td>Designation </td>
                             <td>{item.contactInfo[0].designation}</td>
                         </tr>
                         <tr>
                             <td>Emp Id </td>
                             <td>{item.contactInfo[0].emp_id}</td>
                         </tr>

                    </table>
                    
                    </div>
                
                ))}
            </div>
            )
        }
    }
}

export default OemDetail;
