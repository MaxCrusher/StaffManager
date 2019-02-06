import React from 'react';

const button = type => {
  if (type === 'enable') {
    return (
      <button className="boss-button boss-button_type_small boss-button_role_enabled boss-button_type_no-behavior">
        Enabled
      </button>
    );
  }
  return (
    <button className="boss-button boss-button_type_small boss-button_role_disabled boss-button_type_no-behavior">
      Disabled
    </button>
  );
};
export default button;
