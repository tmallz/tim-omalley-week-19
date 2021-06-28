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
            console.log('hit aapi call')
            this.setState({employeeList: res.data.results});
            this.setState({employeeFilter: res.data.results})
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <h1 className = "text-3xl text-center px-5 py-5">List of Employees</h1>
                <Searchbar />
                <Table employeeList={this.state.employeeFilter}/>
            </div>
        )
    }

}

export default Directory;