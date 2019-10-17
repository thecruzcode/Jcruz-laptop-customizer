import React from 'react'

export default function Summary(props) {
  const { featureTitle, selected } = props;

  return (
    <div className="summary__option">
      <div className="summary__option__label">{featureTitle}</div>
      <div className="summary__option__value">{selected[featureTitle].name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
          .format(selected[featureTitle].cost)}
      </div>
    </div>
  )
}
