//周婷婷   antTabletoExcel   10.15
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import {Table} from 'antd'

//导出核心   https://github.com/zsusac/ReactHTMLTableToExcel
import ReactHTMLTableToExcel from './react-html-table-to-excel'

class App extends Component {

  componentDidMount() {
      const tableCon = ReactDOM.findDOMNode(this.refs['tables'])//利用reactdom.finddomnode()来获取真实DOM节点
      const table = tableCon.querySelector('table')
      table.setAttribute('id','table-to-xls')//为table设置id属性
    }
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    return (
      <div>
         <ReactHTMLTableToExcel
                      className="downloadButton"
                      table="table-to-xls"
                      filename="表格测试1"  //导出文件名
                      sheet="表格测试1"   
                      buttonText="导出"/>       
        <Table dataSource={dataSource} columns={columns}   ref='tables' />
      </div>
    );
  }
}

export default App;
