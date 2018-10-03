import React from 'react'

const Message = (props) => <h2> El agua {props.celsius >= 100 ? 'si' : 'no'} hervirá </h2> 

export default Message