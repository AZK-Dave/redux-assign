import React from 'react'
import { connect } from 'react-redux'


const ComC = ({usersUi}) => {
    const{name,phone} = usersUi;
  return (
    <div>
      ComC
      <p>user name: {name} / phone:{phone}</p>
    </div>
  )
}

const mapStateToProps =(state) => ({
    usersUi: state?. usersRoot
})

export default connect(mapStateToProps, null)(ComC);