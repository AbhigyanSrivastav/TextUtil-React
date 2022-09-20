import React from 'react'

export default function Alert(props) {
    const capitialise =(text) => {
        let lo=text.toLowerCase();
        return lo.charAt(0).toUpperCase() + lo.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitialise(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong>
</div>
  )
}
