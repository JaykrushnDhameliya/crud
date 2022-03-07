import React, {Component} from 'react'
import {Table} from 'antd';
import 'antd/dist/antd.css';


class Newform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.tital,
            myData: {},
            storeData: [],
            show:false
        };

    }
 componentWillUnmount() {

 }

    // componentDidMount() {
    //     this.setState({
    //         name: 'jevin'
    //     })
    // }


    Submit = () => {
        if (this.isEdit != null) {
            this.state.storeData[this.isEdit] = this.state.myData;
            this.isEdit = null;
            console.log("11")
            this.setState({
                storeData: [...this.state.storeData]
            })
        } else {
            this.state.storeData.push(this.state.myData);
            console.log("else")
            this.setState({
                storeData: [...this.state.storeData]
            })
        }
    }
    handelChange = (event) => {
        console.log("....->", event.target.name, event.target.value)
        this.setState({
            myData: {...this.state.myData, [event.target.name]: event.target.value}
        });
    }
    onEdit = (i) => {
        console.log("....", i)
        this.isEdit = i;
        this.state.myData.firstName = this.state.storeData[i].firstName
        this.state.myData.middleName = this.state.storeData[i].middleName
        this.state.myData.lastName = this.state.storeData[i].lastName

    }
    onDelete = (i) => {
        console.log("....", i)
        this.state.storeData.splice(i, 1)
        console.log("....", this.state.storeData)
        this.setState({
            storeData: [...this.state.storeData]
        })

    }

    columns = [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'MiddleName',
            dataIndex: 'middleName',
            key: 'middleName',
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record, index) => {
                return (
                    <>
                        <button onClick={() => this.onEdit(index)}>Edit</button>
                        <button onClick={() => this.onDelete(index)}>Delete</button>

                    </>

                )

            }

        },
    ];

    render() {
        return (
            <>
                <input type="text" value={this.state.myData.firstName} name="firstName" placeholder="enter first name"
                       onChange={(e) => this.handelChange(e)}/>
                <input type="text" value={this.state.myData.middleName} name="middleName"
                       placeholder="enter middle name"
                       onChange={(e) => this.handelChange(e)}/>
                <input type="text" value={this.state.myData.lastName} name="lastName" placeholder="enter last name"
                       onChange={(e) => this.handelChange(e)}/>
                <button onClick={() => this.Submit()}>submit</button>
                <div>
                    <Table columns={this.columns} dataSource={this.state.storeData}/>
                </div>
            </>
        )

    }

}

export default Newform;