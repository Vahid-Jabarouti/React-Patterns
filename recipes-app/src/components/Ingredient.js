import React from 'react'

export default function Ingredient({amount, measurement, name}) {
  retrn (
    <li>
      {amount} {measurement} {name}
    </li>
  )
}