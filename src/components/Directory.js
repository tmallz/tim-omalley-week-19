import React from "react";
import API from "../utils/API";
import Searchbar from "./Searchbar";
import Table from "./Table"; 


class Directory extends React.Component {
    state = {
        employeeList: [],
        employeeFilter: [],
        sortUpDown: ""
    };

    componentDidMount = () => {
        API.getEmployees().then(res =>{
            this.setState({employeeList: res.data.results});
            this.setState({employeeFilter: res.data.results})
        })
        .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const searchFilter = e.target.value;

        let employeeFilter = this.state.employeeList.filter((filter) => {
            let values = Object.values(filter).join('').toLowerCase();
            return values.indexOf(searchFilter.toLowerCase()) != -1
        });
        this.setState({employeeFilter: employeeFilter});
    } 

    

    render(){
        return(
            <div>
                <h1 className = "text-3xl text-center px-5 py-5">List of Employees</h1>
                <Searchbar handleInputChange = {this.handleInputChange}/>
                <Table employeeList={this.state.employeeFilter}/>
            </div>
        )
    }

}

export default Directory;