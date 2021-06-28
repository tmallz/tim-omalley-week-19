import React from "react";
import API from "../utils/API";
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

    render(){
        return(
            <div>
                <Table/>
            </div>
        )
    }

}

export default Directory;