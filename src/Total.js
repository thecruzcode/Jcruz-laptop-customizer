import React from 'react'

export default function Total(props) {
  const { selected } = props;

  const total = Object.keys(selected)
    .reduce((acc, curr) => acc + selected[curr].cost, 0); 

  return (
    <div className="summary__total">
      <div className="summary__total__label">Your Price: </div>
      <div className="summary__total__value">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(total)}
      </div>
    </div>
  )
}
