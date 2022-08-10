import React from 'react';
import './Button.css'
 const Buttons = ({buttonsText,onClick,customCls,prefix}) => {

  return (
      <div className= {`flex absolute-center button-wrapper ${customCls}`} onClick={onClick}>
        {prefix} {buttonsText}
      </div>
  );
};
export default Buttons;