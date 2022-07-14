import React from "react";
import PostData from '../data/pai.json'
import './postList.css';

function PostList() {
  return (
    <div className='container'>
      <table className="table">
        <tr className="rows">
          <th className="table-header">Name</th>
          <th className="table-header">In Scope Exposure</th>
          <th className="table-header">In Scope Exposure Value</th>
          <th className="table-header">Qualitative Indicator Scan</th>
          <th className="table-header">Metric Indicator Scan</th>
        </tr>
        {PostData.pai_page.map((val, key)=> {
          return (
            // return data that its not 0
            <tr key={key}>
              <td className="">{val.name}</td>
              <td className="table-header">{val.concerning_exposure.toFixed(2)}</td>
              <td className="table-header">{val.concerning_exposure_value.toLocaleString('en-US')}</td>
              <td className={val.qualitative.includes('Pass') ? 'color-green' : 'color-red'}>{val.qualitative}</td>
              <td className="table-header">{(val.metric).toFixed(2).toLocaleString('en-US')}</td>
            </tr>
          )
        })}

      </table>
    </div>
  );
}

export default PostList;
