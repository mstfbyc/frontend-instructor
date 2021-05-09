import React from 'react';

const ButtonWithProgress = props => {
    const { onClick, pendingApiCall, disabled, text} = props;
    return (
        <button disabled={disabled} onClick={onClick} type="button" >
            {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{text}
        </button>
    );
};

export default ButtonWithProgress;