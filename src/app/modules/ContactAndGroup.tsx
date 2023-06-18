import React, { useState } from 'react';

interface IDataItem {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
}

const ContactAndGroup = () => {
  const initialData: IDataItem[] = [
    { name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, startDate: '2011/04/25', salary: '$320,800' },
    { name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, startDate: '2011/07/25', salary: '$170,750' },
  ];

  const [data, setData] = useState<IDataItem[]>(initialData);
  const [sortConfig, setSortConfig] = useState<{ key: keyof IDataItem | null; order: 'asc' | 'desc' | null }>({ key: null, order: null });

  const handleSort = (key: keyof IDataItem) => {
    let order: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.order === 'asc') {
      order = 'desc';
    }
    setSortConfig({ key, order });
    sortData(key, order);
  };

  const sortData = (key: keyof IDataItem, order: 'asc' | 'desc') => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[key].toString();
      const bValue = b[key].toString();
      return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    setData(sortedData);
  };

  const getSortSymbol = (key: keyof IDataItem) => {
    if (sortConfig.key === key) {
      return sortConfig.order === 'asc' ? <>&uarr;</> : <>&darr;</>;
    }
    return null;
  };

  return (
    <div>

      <div className="row">
        <div className="col-8">
         
        
        
        <div className="card card-custom shadow">
  <div className="card-header">
  <table className="table table-hover table-rounded table-striped border gy-7 gs-7">
          <thead>
            <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
              <th onClick={() => handleSort('name')}>
                Name
                {getSortSymbol('name')}
              </th>
              <th onClick={() => handleSort('position')}>
                Position
                {getSortSymbol('position')}
              </th>
              <th onClick={() => handleSort('office')}>
                Office
                {getSortSymbol('office')}
              </th>
              <th onClick={() => handleSort('age')}>
                Age
                {getSortSymbol('age')}
              </th>
              <th onClick={() => handleSort('startDate')}>
                Start date
                {getSortSymbol('startDate')}
              </th>
              <th onClick={() => handleSort('salary')}>
                Salary
                {getSortSymbol('salary')}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.office}</td>
                <td>{item.age}</td>
                <td>{item.startDate}</td>
                <td>{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
  </div>
 
</div>
        </div>

        <div className="col-4"><div className="card card-custom shadow">
          <div className="card-header">
            <h3 className="card-title">Create New Group</h3>
            <div className="card-toolbar">
             
            </div>
          </div>
          <div className="card-body p-0">
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input> <button type="button" className="btn btn-sm btn-light">
                Submit
              </button></div>
        </div></div>
      </div>
    </div>
  );
};

export default ContactAndGroup;
