import React from 'react';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import approve from "./btns/approve.svg";
import cancel from "./btns/cancel.svg";
import approveBtn from "./btns/approve-btn.svg";
import cancelBtn from "./btns/cancel-btn.svg";

const IncomeTransaction = () => {
    return (
        <div className="container">
            <div className="pb-5 pt-5">
                <h1>
                    Income Transaction
                </h1>
            </div>
            <Table responsive="sm" style={{ backgroundColor: "white", border: "#828282 1px solid" }} >
                <thead className="bg-light-2">
                    <tr style={{ backgroundColor: "white", border: "#828282 1px solid" }} >
                        <th className="text-center">No.</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Address</th>
                        <th className="text-center">Products Order</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: "white", border: "#828282 1px solid" }} >
                        <td>1</td>
                        <td >Sugeng</td>
                        <td>Cileungsi</td>
                        <td>Paket Geprek</td>
                        <td style={{ color: "yellow", }}>Waiting approve</td>
                        <td className="text-center"> <span><img src={cancelBtn} /></span> <span> <img src={approveBtn} /></span>  </td>
                    </tr>
                    <tr style={{ backgroundColor: "white", border: "#828282 1px solid" }} >
                        <td>2</td>
                        <td >Sugeng</td>
                        <td>Cileungsi</td>
                        <td>Paket Geprek</td>
                        <td style={{ color: "green", }}>Success</td>
                        <td className="text-center"> <span> <img src={approve} /> </span> </td>
                    </tr>
                    <tr style={{ backgroundColor: "white", border: "#828282 1px solid" }} >
                        <td>3</td>

                        <td >Sugeng</td>
                        <td>Cileungsi</td>
                        <td>Paket Geprek</td>
                        <td style={{ color: "red", }}>Cancel</td>
                        <td className="text-center"> <span><img src={cancel} /></span> </td>

                    </tr>
                </tbody>
            </Table>


        </div >
    );
};

export default IncomeTransaction;
