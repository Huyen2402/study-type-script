import React, { Key, useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dataFetch from '../data/employee';
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sydney No. 1 Lake Park',
  },
];


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Employee: React.FC = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectKey, setAlreadySelectedRows] = useState<Key[]>([]);
  return (
    <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>
      
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
          
          selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE,
            {
              key: 'Age',
              text: 'Select employee age between 40 and 50',
              
              onSelect:(allEmployee)=>{
                console.log(allEmployee);
                const selectKey: any | undefined = 
                  data.find(employ => {
                    return (employ.age < 40 )
                  });
                  console.log(selectKey);
                  setAlreadySelectedRows(selectKey);
              },
             
            },
          ],
         
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default Employee;