import React from 'react';
import './index.css';
import { connect } from 'react-redux';

import DeleteBlockModal from "./DeleteBlockModal";

const DisplayBlocks = ({ arr, handleClick, LinkedAccount }) => {
  return (
    <tbody className="table-body">
      {arr.map(i => (
        <tr key={i.id}>
          <td>{i.name}</td>
          <td>
            $
            {i.total === null
              ? 0
              : (Math.round(100 * i.total) / 100).toFixed(2)}
          </td>
          <td>
            $
            {i.budget === null
              ? 0
              : (Math.round(100 * i.budget) / 100).toFixed(2)}
          </td>
          <td>
            <DeleteBlockModal blockID={i.id} />
            <button
              id="edit-button"
              onClick={() => handleClick(i.id, i.budget)}
            >
              edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    blocks: state.plaidReducer.categories
  };
}

export default connect(mapStateToProps)(DisplayBlocks);
