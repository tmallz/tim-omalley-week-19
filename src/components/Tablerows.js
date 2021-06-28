import React from "react";

function Tablerow(props) {
    return (
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={props.picture} alt = {props.name}></img>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {props.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {props.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                    {props.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {props.cell}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {props.address}
                </td>
            </tr>
    );
}

    export default Tablerow;