import React, { useState } from 'react';
import KitEssencial from '../../assets/KitEssencial.png'

export default function Step1({ onSelectItem }) {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelection = (event) => {
        const value = event.target.value;
        setSelectedItem(value);
        onSelectItem(value);
    };

    return (
        <div className="sm:flex flex-row sm:w-2/3 w-full items-center justify-center to-[#033401] from-[#2EB560] bg-gradient-to-tl rounded-2xl shadow-lg sm:py-0 py-0">
            <div className="flex items-center justify-center">
                <img src={KitEssencial} alt="logo" className=''/>
            </div>
            <div className="flex flex-col sm:items-start items-center justify-center sm:gap-16 gap-4 sm:p-4 p-2">
            <p className="text-white text-md sm:text-3xl font-semibold" style={{fontFamily: 'Quicksand'}}>1. Selecione os itens do pacote essencial:</p>
            <div className="sm:flex flex  items-center gap-2 sm:gap-4 sm:justify-start justify-center sm:p-2 p-1 sm:rounded-full  rounded-md">

                <div className="flex items-center gap-2 bg-emerald-800 p-2 rounded-md sm:rounded-full cursor-pointer">
                    <input type="radio" name="item" id="item1" value="Monitor G5" onChange={handleSelection} className="cursor-pointer" />
                    <label htmlFor="item1" className="text-white cursor-pointer text-sm sm:text-base" style={{fontFamily: 'Quicksand'}}>Monitor G5</label>
                </div>

                <div className="flex items-center gap-2 bg-emerald-800 p-2 rounded-md sm:rounded-full cursor-pointer">
                    <input type="radio" name="item" id="item2" value="Monitor G5 Plus" onChange={handleSelection} className="cursor-pointer" />
                    <label htmlFor="item2" className="text-white cursor-pointer text-sm sm:text-base" style={{fontFamily: 'Quicksand'}}>Monitor G5 Plus</label>
                </div>
                
            </div>
            </div>  
        </div>
    )
}