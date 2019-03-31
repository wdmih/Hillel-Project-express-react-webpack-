import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import screenImg from './../../../assets/img/screen.svg'

export default class ModalHallSchema extends Component {
  constructor (props) {
    super(props)
  }
  setReserve (rowId, seatId) {
    console.log(rowId, seatId)
  }
  render () {
    let { hall } = this.props.session
    return (
      <Fragment>
        <div className="screen-container">
          <img className="screen-img" src={screenImg}></img>
          <span>screen</span>
        </div>
        <div className="seats-schema">
          {hall ? (
            hall.schema.map((row, i) => (
              <div className="seat-row" key={i}>
                {row.seats.map((seat, i) => (
                  <button key={i} className={`seat ${seat.sold ? 'disabled' : ''} ${seat.reserved ? 'checked' : ''}`} onClick={(e) => this.setReserve(row.number, seat.number)}></button>
                ))}
              </div>
            ))
          ) : ''}
        </div>
      </Fragment>
    )
  }
}

ModalHallSchema.propTypes = {
  session: PropTypes.object
}
