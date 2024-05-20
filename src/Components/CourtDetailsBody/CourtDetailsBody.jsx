import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom'
import AxiosInstance from '../../Config/apicall';
import { TIMINGS } from '../../Constants/constants'
import { ErrorToast, successToast } from '../../Plugins/Toast/Toast'
import { useDispatch } from 'react-redux'
import { showorhideLoader } from '../../Redux/generalSlice'


function CourtDetailsBody() {
    const { id } = useParams();
    const [openTimeslot, setOpenTimeslot] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
        key: "selection",
    });
    const [singleCourtData, setSingleCourtData] = useState({});
    const [calenderOpen, setcalenderOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [filteredTimings, setFilteredTimings] = useState(TIMINGS);
    const [cost, setCost] = useState('');
    const [bookingModal, setBookingModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10));
    const [slotData, setSlotData] = useState([]);
    const [bookedSlots, setBookedSlots] = useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        getSingleCourtData();
    }, []);
    useEffect(() => {
        getSlotData();
    }, [selectedDate]);
    const getSlotData = () => {
        dispatch(showorhideLoader(true));
        AxiosInstance.get('/users/getslotdata', { params: { courtId: id } }).then((res) => {
            setSlotData(res.data);
            dispatch(showorhideLoader(false));
        })
            .catch((err) => {
                console.log(err);
                dispatch(showorhideLoader(false));
                ErrorToast('something went wrong');
            })
    }
    const getSingleCourtData = () => {
        AxiosInstance.get('/users/getsinglecourtdata', { params: { courtId: id, date: selectedDate } })
            .then((response) => {
                setSingleCourtData(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const selectSlot = (e, slot) => {
        e.stopPropagation()
        setSelectedSlots([...selectedSlots, slot]);
        const newFilter = filteredTimings.filter(element => element.id !== slot.id);
        setFilteredTimings(newFilter);
        setOpen(false);
    }
    const createCourtSchedule = () => {
        dispatch(showorhideLoader(true));
        AxiosInstance({
            url: '/admin/createshedules',
            method: 'POST',
            data: {
                startDate: dateRange.startDate,
                endDate: dateRange.endDate,
                cost: cost,
                selectedSlots: selectedSlots,
                courtId: id
            }
        }).then((res) => {
            successToast('Court was created successfully');
            setOpenTimeslot(false);
            dispatch(showorhideLoader(false));
        })
            .catch((err) => {
                console.log(err)
                dispatch(showorhideLoader(false));
                ErrorToast('Failed your attempt');

            })
    };

    const sectorDeslectslot = (slot) => {
        if (bookedSlots.find((element) => element._id === slot._id)) {
            const temp = bookedSlots.filter(element => element._id !== slot._id);
            setBookedSlots(temp)
        }

    }

    const createBooking = () => {

    }

    return (
        <div className='details-page'>
            <div className='details-img-box '>
                <img className='details-main-img' src={Img} alt="" />
                <div className='details-img-content d-flex justify-content-between p-4'>
                    <div className='d-flex flex-column justify-content-center text-white'>
                        <h2>{singleCourtData.name}</h2>
                        <p>{singleCourtData.location}</p>
                        <p>{singleCourtData.type}</p>
                    </div>
                    <div className='align-self-end d-flex gap-3'>
                        <button onClick={() => { setBookingModal(true) }} > Book </button>
                        <button> <img src={editIcon} height={'20px'} alt="" /> </button>
                        <button> <img src={filesIcon} height={'20px'} alt="" /> </button>
                        <button> <img src={addIcon} height={'20px'} alt="" onClick={() => { setOpenTimeslot(true) }} /> </button>


                    </div>

                </div>

            </div>


            <ReactQuill readOnly={true}

                theme='bubble'
                className=''
                value={singleCourtData.description}

            />
            {openTimeslot && (<Modal heading={'Add new time slot data'} closeModal={() => { setOpenTimeslot(false) }}>


                <div className='time-slot-select-modal p-3'>
                    <label htmlFor=""> Select Date Range

                        <img src={calenderIcon} height={'20px'} alt="" onClick={() => { setcalenderOpen(true) }} />
                    </label>
                    <div className='d-flex align-items-center gap-2 mt-2'>
                        <div className='timeslot-date flex-grow-1 border border-1 rounded-2 p-2'>
                            {new Date(dateRange.startDate).toLocaleDateString()}
                        </div>
                        <img src={forwardIcon} alt="" height={'20px'} />
                        <div className='timeslot-date flex-grow-1 border border-1 rounded-2 p-2'>
                            {new Date(dateRange.endDate).toLocaleDateString()}
                        </div>
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
                            <button className='common-btn' onClick={() => { setcalenderOpen(false) }}>Select</button>
                        </div>
                    </div>}
                    <div className='mt-2'>
                        <Input name={'cost'} label={'Cost'} value={cost} onchange={(e) => { setCost(e.target.value) }} />
                    </div>
                    <div className='range-label position-relative mt-3' onClick={() => { setOpen(true) }}>
                        Select Slots
                        {open && <ul className='slot-list'>
                            {filteredTimings.map((slot) => <li onClick={(e) => selectSlot(e, slot)}>{slot.name}</li>)}


                        </ul>}
                    </div>
                    <div className='d-flex gap-2 mt-2 flex-wrap py-2'>
                        {selectedSlots.map(slot => <span className='border border-1 rounded-2 px-2 py-1'>{slot.name}</span>)}
                    </div>

                    <div className='d-flex justify-content-end gap-3 py-2 mt-2'>
                        <button className='common-btn '>Cancel</button>
                        <button className='common-btn ' onClick={createCourtSchedule}>Create</button>
                    </div>
                </div>
            </Modal>)};
            {bookingModal && <Modal heading={'Booking slots'} closeModal={() => { setBookingModal(false) }}>
                <div className='time-slot-select-modal p-3 h-100 d-flex flex-column'>
                    <label htmlFor="" className='mt-2'> Start Date :</label>
                    <input type="date" className='px-2 mx-2 border rounded 1' value={selectedDate} min={new Date().toISOString().substr(0, 10)}
                        onChange={(e) => { setSelectedDate(e.target.value) }} />
                    <label htmlFor="">Available Slots</label>
                    <div className='d-flex flex-wrap gap-2 mt-2'>
                    
                        {slotData.map((slot) => <span className={`${bookedSlots.find(element => element._id === slot._id) ? 'bg-info-subtle ' :

                                slot.slot.bookedBy ? 'notavailableslots' : 'availableslots'}  px-2 py-2 mt-2`}
                            onClick={() => sectorDeslectslot(slot)}
                        >{slot.slot.name}</span>)}
                    </div>

                    <div className='d-flex justify-content-end gap-3 py-2 mt-2'>
                        <button className='common-btn bg-black text-white'>Cancel</button>
                        <button className='common-btn' onClick={createBooking}>Book</button>
                    </div>

                </div>

            </Modal>}
        </div>
    )
}

export default CourtDetailsBody