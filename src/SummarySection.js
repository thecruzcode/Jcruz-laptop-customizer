import React from 'react'
import Summary from './Summary'
import Total from './Total'

export default function SummarySection(props) {
  const { selected } = props;

  const summary = Object.keys(selected)
    .map(key =>
      <Summary
        key={key}
        featureTitle={key}
        selected={selected} /> 
    );

  return (
    <section className="main__summary">
      <h3>NEW LAPTOPS 2019</h3>
      {summary}
      <Total selected={selected} />
    </section>
  );
}
