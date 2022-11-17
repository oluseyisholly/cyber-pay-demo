import { Table } from "react-bootstrap";
import Naira from "react-naira"
import { routes } from "../routes";

const CustomTable = ({
    bodyData,
    className,
}) =>{  

    if (bodyData === undefined){
        return;
    }
    return(
        <Table  className={`table1 ${className}`} hover>
            <thead>
                <tr>
                    {
                        Object.keys(bodyData[0]).map((element, index)=>{
                            return(
                                <th className="table-header" key={index}> {element}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    bodyData?.map((element, index) => {
                        const array = Object.values(element);
                        const arrayKeys = Object.keys(element);
                        return(
                            <tr key={index}> 
                                {
                                    array.map((element1, index1) => {
                                        if(element1 === "Processing"){
                                                return(
                                                    <td key={index1} className="text-success">{element1}</td>
                                                )
                                        }
                                        if(element1 === "Active"){
                                            return(
                                                <td key={index1} className="text-success">{element1}</td>
                                            )
                                        }
                                        if(element1 === "Successful"){
                                            return(
                                                <td key={index1} className="text-success">{element1}</td>
                                            )
                                        }
                                        if(element1 === "Cancelled"){
                                            return(
                                                <td key={index1} className="text-danger">{element1}</td>
                                            )
                                        }
                                        if(element1 === "pending"){
                                            return(
                                                <td key={index1} className="text-warning">{element1}</td>
                                            )
                                        }
                                        if(element1 === "Failed"){
                                            return(
                                                <td key={index1} className="text-danger">{element1}</td>
                                            )
                                        }
                                        if(arrayKeys[index1] === "S/N"){
                                            return(
                                                <td key={index1}>{index + 1}</td>
                                            )
                                        } 
                                        if(arrayKeys[index1] === "Amount"  && window.location.pathname === routes.transaction){
                                            return(
                                                <td className={`${parseFloat(element1) > 0 ? "text-success  " : "text-danger"}`} key={index1}><Naira>{element1}</Naira></td>
                                            )
                                        }
                                        if(arrayKeys[index1] === "Reference"){
                                            return(
                                                <td className={"text-primary"} key={index1}><u>{element1}</u></td>
                                            )
                                        }
                                        return(
                                            <td key={index1}>{element1}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default CustomTable;