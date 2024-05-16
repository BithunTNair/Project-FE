import React, { useState } from 'react'
import './CourtDetailsBody.css'
import Img from '@Assets/throwing-basketball.jpg'
import editIcon from '@Assets/edit.svg'
import filesIcon from '@Assets/filesimg.svg'
import addIcon from '@Assets/addIcon2.svg';
import calenderIcon from '@Assets/calender.svg';
import closeIcon from '@Assets/close.svg';
import forwardIcon from '@Assets/forward.svg';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from '../Common/Modal/Modal'
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from 'react-date-range'
import Input from '../Common/InputField/Input'


function CourtDetailsBody() {
    const [openTimeslot, setOpenTimeslot] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
        key: "selection",
    });
    const [calenderOpen, setcalenderOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const closeList = (e) => {
        e.stopPropagation()
        setOpen(false)
    }
    return (
        <div className='details-page'>
            <div className='details-img-box '>
                <img className='details-main-img' src={Img} alt="" />
                <div className='details-img-content d-flex justify-content-between p-4'>
                    <div className='d-flex flex-column justify-content-center text-white'>
                        <h2>court name</h2>
                        <p>location</p>
                    </div>
                    <div className='align-self-end d-flex gap-3'>
                        <button> Book </button>
                        <button> <img src={editIcon} height={'20px'} alt="" /> </button>
                        <button> <img src={filesIcon} height={'20px'} alt="" /> </button>
                        <button> <img src={addIcon} height={'20px'} alt="" onClick={() => { setOpenTimeslot(true) }} /> </button>


                    </div>

                </div>

            </div>


            <ReactQuill readOnly={true}

                theme='bubble'
                className=''
                value={'gggg'}

            />
            {openTimeslot && <Modal heading={'Add new time slot data'} closeModal={() => { setOpenTimeslot(false) }}>


                <div className='time-slot-select-modal p-3'>
                    <label htmlFor=""> Select Date Range

                        <img src={calenderIcon} height={'20px'} alt="" onClick={() => { setcalenderOpen(true) }} />
                    </label>
                    <div className='d-flex align-items-center gap-2 mt-2'>
                        <div className='timeslot-date flex-grow-1 border border-1 rounded-2 p-2'>Date</div>
                        <img src={forwardIcon} alt="" height={'20px'} />
                        <div className='timeslot-date flex-grow-1 border border-1 rounded-2 p-2'>Date</div>
                    </div>
                    {calenderOpen && <div className='calender-box'>
                        <img
                            src={closeIcon}
                            height={'20px'}
                            alt=""
                            className='modal-close-icon'
                            onClick={() => { setcalenderOpen(false) }}
                        />
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setDateRange(item.selection)}
                            moveRangeOnFirstSelection={false}
                            ranges={[dateRange]}

                        />

                        <div className='d-flex justify-content-end gap-3 p-2 mt-2'>
                            <button className='cmn-btn bg-black text-white'>Cancel</button>
                            <button className='cmn-btn'>Select</button>
                        </div>
                    </div>}
                    <div className='mt-2'>
                        <Input name={'cost'} label={'Cost'} value={''} />
                    </div>
                    <div className='range-label position-relative mt-3' onClick={() => { setOpen(true) }}>
                        Select Slots
                        {open && <ul className='slot-list'>
                            <li onClick={closeList}>hhhhhh</li>
                            <li onClick={closeList}>hhhhhh</li>
                            <li onClick={closeList}>hhhhhh</li>
                            <li onClick={closeList}>hhhhhh</li>
                            <li onClick={closeList}>hhhhhh</li>
                        </ul>}
                    </div>
                    <div className='d-flex justify-content-end gap-3 py-2 mt-2'>
                        <button className='cmn-btn '>Cancel</button>
                        <button className='cmn-btn '>Create</button>
                    </div>
                </div>
            </Modal>}
        </div>
    )
}

export default CourtDetailsBody