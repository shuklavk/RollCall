import React from 'react';
import './Options.css'

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div class="cntr">

        <label for="opt1" class="radio">
          <input type="radio" name="rdo" id="opt1" class="hidden" />
          <span class="label"></span>Teacher
  </label>

        <label for="opt2" class="radio">
          <input type="radio" name="rdo" id="opt2" class="hidden" />
          <span class="label"></span>Student
  </label>

      </div>
    )
  }
}

export default Options;