import React, { useRef, useState } from 'react'
import './AddNewCourtBox.css'
import Input from '../Common/InputField/Input'



function AddNewCourtBox() {
    const [courtData, setCourtData] = useState({})
    const fileInputRef = useRef()
    const [selectedFiles,setSelectedFiles]=useState([])
    const handleChange = (e) => {
        setCourtData({ ...courtData, [e.target.name]: e.target.value })
    }
    const handleInputFileChange = (e) => {
        const files = Array.from(e.target.files);
        const validFiles= files.filter((file)=>{return file.type.startsWith('image/') || file.type.startsWith('video/')})
        setSelectedFiles(prevState=>[...prevState,...validFiles])
    }

    const handleAddIcon = () => {
        fileInputRef.current.click()
    }

    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='d-flex justify-content-between gap-3 px-3 mt-3'>
                    <h3>Add New Court</h3>
                    <span className='d-flex gap-3'>
                        <button className='common-btn bg-black text-white'> {" "} Cancel</button>
                        <button className='common-btn'>Create</button>
                    </span>
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'name'} label={'Name'} value={courtData.name} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'location'} label={'Location'} value={courtData.location} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'type'} label={'Type'} value={courtData.type} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'address1'} label={'Address Line 1'} value={courtData.adress1} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'address2'} label={'Address Line 2'} value={courtData.address2} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'address3'} label={'Address Line 3'} value={courtData.address3} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'text'} name={'landmark'} label={'Land MarK'} value={courtData.landmark} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'number'} name={'pincode'} label={'Pin Code'} value={courtData.pincode} onchange={handleChange} />
                </div>
                <div className='col-lg-4 col-md-6 mt-3 '>
                    <Input type={'number'} name={'contactNumber'} label={'Contact Number'} value={courtData.contactNumber} onchange={handleChange} />
                </div>
                <div className='mt-3'>
                    {setSelectedFiles.map((file,index)=>
                    <>
                    {}
                    </>
                    )}
                   <div>
                   <input type="file" ref={fileInputRef} onchange={handleInputFileChange} multiple accept='image/*,video/*' style={{ display: 'none' }} />
                    <img src="" alt="" srcset="" height={'150px'} onClick={handleAddIcon} />
                   </div>
                </div>

            </div>



        </div>
    )
}

export default AddNewCourtBox