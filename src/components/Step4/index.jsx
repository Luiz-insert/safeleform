import Receptor from '../../assets/Receptor.png'
import { useState } from 'react';

export default function Step4({ onSelectItem }) {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelection = (event) => {
        const value = event.target.value;
        setSelectedItem(value);
        onSelectItem(value);
    };

    return (
        <div className="sm:flex flex-row sm:w-2/3 w-full items-center justify-center to-[#033401] from-[#2EB560] bg-gradient-to-tl rounded-2xl shadow-lg sm:py-0 py-0">
            <div className="flex items-center justify-center">
                <img src={Receptor} alt="logo" className='w-[250px] sm:w-full'/>
            </div>
            <div className="flex flex-col sm:items-start items-center justify-center sm:gap-16 gap-4 sm:p-4 p-2">
            <p className="text-white text-md sm:text-3xl font-semibold" style={{fontFamily: 'Quicksand'}}>4. Selecione assinatura anual opcional do Receptor:</p>
            <div className="sm:flex flex  items-center gap-2 sm:gap-4 sm:justify-start justify-center sm:p-2 p-1 sm:rounded-full  rounded-md">

                <div className="flex items-center gap-2 bg-emerald-800 p-2 rounded-md sm:rounded-full cursor-pointer">
                    <input type="radio" name="item" id="item1" value="SF-RTK" onChange={handleSelection} className="cursor-pointer" />
                    <label htmlFor="item1" className="text-white cursor-pointer text-sm sm:text-base" style={{fontFamily: 'Quicksand'}}>SF-RTK</label>
                </div>

                <div className="flex items-center gap-2 bg-emerald-800 p-2 rounded-md sm:rounded-full cursor-pointer">
                    <input type="radio" name="item" id="item2" value="SF1" onChange={handleSelection} className="cursor-pointer" />
                    <label htmlFor="item2" className="text-white cursor-pointer text-sm sm:text-base" style={{fontFamily: 'Quicksand'}}>SF1</label>
                </div>
                
            </div>
            </div>  
        </div>
    )
}