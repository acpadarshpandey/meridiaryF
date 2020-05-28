import React from 'react';
import {Button} from '@material-ui/core';
function refresh() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <Button onClick={refreshPage}>Go!!</Button>
    </div>
  );
}

export default refresh;