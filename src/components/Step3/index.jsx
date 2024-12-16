import React, { useState, useEffect } from 'react';
import Monitores2 from '../../assets/Monitores2.png'

export default function Step3({ onSelectItems }) {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelection = (event) => {
        const value = event.target.value;
        setSelectedItems((prevItems) => {
            if (prevItems.includes(value)) {
                // Remove o item se já estiver selecionado
                return prevItems.filter(item => item !== value);
            } else {
                // Adiciona o item se não estiver selecionado
                return [...prevItems, value];
            }
        });
    };

    useEffect(() => {
        // Chama a função de callback apenas se selectedItems mudar
        onSelectItems(selectedItems);
    }, [selectedItems]);

    return (
        <div className="sm:flex flex-row sm:w-2/3 w-full items-center justify-center to-[#033401] from-[#2EB560] bg-gradient-to-tl rounded-2xl shadow-lg sm:py-0 py-0">
            <div className="flex items-center justify-center">
                <img src={Monitores2}  alt="logo" className='h-[180px] sm:w-full'/>
            </div>
            <div className="flex flex-col sm:items-start items-center justify-center sm:gap-16 gap-4 sm:p-4 p-2">
            <p className="text-white text-md sm:text-3xl font-semibold" style={{fontFamily: 'Quicksand'}}>3. Selecione a assinatura anual opcional do monitor</p>
            <div className="sm:flex flex  items-center gap-2 sm:gap-4 sm:justify-start justify-center sm:p-2 p-1 sm:rounded-full  rounded-md">
            <div className="flex items-center gap-2 bg-emerald-800 p-2 rounded-md sm:rounded-full cursor-pointer">
                    <input type="checkbox" name="item" id="item1" value="AutoTrac™ RowSense" onChange={handleSelection} className="cursor-pointer"/>
                    <label htmlFor="item1" className="text-white cursor-pointer text-sm sm:text-base" style={{fontFamily: 'Quicksand'}}>AutoTrac™ RowSense</label>
                </div>

                <div className="flex items-center gap-2 bg-emerald-800 p-2 rounded-md sm:rounded-full cursor-pointer">
                    <input type="checkbox" name="item" id="item2" value="Controle de Seção" onChange={handleSelection} className="cursor-pointer"/>
                    <label htmlFor="item2" className="text-white cursor-pointer text-sm sm:text-base" style={{fontFamily: 'Quicksand'}}>Controle de Seção</label>
                </div>
                
            </div>
            </div>  
        </div>
    )
}