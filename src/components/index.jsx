import { Fragment, useState } from "react"
import TestForm from './TestForm'
import logoInovaNeg from '../assets/logoGrupoInovaNegativa.png'
import { Bars4Icon, AdjustmentsHorizontalIcon, CheckCircleIcon, CubeIcon} from '@heroicons/react/24/solid'
import { createClient } from '@supabase/supabase-js';

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function FormStep0() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedItem1: '',
    selectedItem2: '',
    selectedItems3: [],
    selectedItem4: '',
    selectedItem5: ''
  });
  const [isTestFormFilled, setIsTestFormFilled] = useState(false);
  const [isTestFormComplete, setIsTestFormComplete] = useState(false);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const handleNextStep = async () => {
    if (currentStep === 5 && isTestFormFilled) {
      console.log('Dados do formulário:', formData);
      
      // Enviar formData para o Supabase
      const { data, error } = await supabase
        .from('dataClient')
        .insert([
          {
            Name: formData.name,
            Phone: formData.phone,
            Mail: formData.email,
            selectedItem1: formData.selectedItem1,
            selectedItem2: formData.selectedItem2,
            selectedItems3: formData.selectedItems3,
            selectedItem4: formData.selectedItem4,
            selectedItem5: formData.selectedItem5
          }
        ]);

      if (error) {
        console.error('Erro ao enviar dados:', error);
      } else {
        console.log('Dados enviados com sucesso:', data);
        setIsFormCompleted(true);
      }
    }
    if (currentStep !== 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value
    }));
  };

  const handleTestFormCompletion = (isFilled, name, phone, email) => {
    setIsTestFormFilled(isFilled);
    setIsTestFormComplete(isFilled);

    if (isFilled) {
      setFormData((prevData) => ({
        ...prevData,
        name,
        phone,
        email
      }));
    }
  };

  return (
    <Fragment>
        <div className="h-screen w-screen sm:bg-slate-400 sm:p-4">
            <div className="bg-white w-full h-full sm:rounded-xl sm:shadow-lg">
                <div className="flex flex-col h-full w-full p-4 sm:gap-4 gap-4">
                    <div className="flex flex-col items-center sm:justify-center p-4  sm:h-32 w-full gap-2 sm:bg-white bg-zinc-400  rounded-2xl" >
                        <CubeIcon className="sm:h-8 sm:w-8 h-6 w-6 sm:text-zinc-600 text-zinc-50 animate-pulse" />
                        <div className="sm:text-zinc-500 text-zinc-50 text-sm sm:text-3xl font-semibold flex items-center gap-2" style={{fontFamily: 'Quicksand'}}> Configure seu Pacote essencial! </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-0 w-full gap-4  rounded-lg">
                        {isFormCompleted ? (
                            <div className="flex flex-col items-center justify-center text-center text-xl font-semibold text-green-600">
                                Tudo pronto!
                                <CheckCircleIcon className="text-green-600 h-8 w-8" />
                                <hr />
                                <p className="text-zinc-600 text-sm sm:text-xl font-semibold" style={{fontFamily: 'Quicksand'}}>Todos os dados foram enviados com sucesso! Entraremos em contato em breve!</p>
                            </div>
                        ) : (
                            <>
                                {currentStep === 1 && (
                                    <div className="flex h-80 w-full sm:w-2/3 sm:bg-zinc-200 rounded-2xl sm:shadow-lg">
                                        <div className="flex flex-col items-center justify-center w-full">
                                            <p className="text-zinc-400 text-sm sm:text-xl  p-4 font-semibold text-center" style={{fontFamily: 'Quicksand'}}>*Preencha o formulário para continuar...</p>
                                            <TestForm onCompletion={(isFilled, name, phone, email) => handleTestFormCompletion(isFilled, name, phone, email)} />
                                            <button 
                                                onClick={() => {    
                                                    if (isTestFormComplete) {
                                                        setCurrentStep(2);
                                                    }
                                                }} 
                                                className={`to-[#FFDF3D] from-[#F8CF00] bg-gradient-to-tl text-blue-950 px-6 py-2 rounded-full shadow-lg font-semibold mt-4 ${!isTestFormComplete ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                                style={{fontFamily: 'Quicksand'}}
                                                disabled={!isTestFormComplete}
                                            >
                                                Continuar
                                            </button>
                                        </div>  
                                    </div>
                                )}
                                {currentStep === 2 && isTestFormFilled && <Step1 onSelectItem={(value) => updateFormData('selectedItem1', value)} />}
                                {currentStep === 3 && <Step2 onSelectItem={(value) => updateFormData('selectedItem2', value)} />}
                                {currentStep === 4 && <Step3 onSelectItems={(value) => updateFormData('selectedItems3', value)} />}
                                {currentStep === 5 && <Step4 onSelectItem={(value) => updateFormData('selectedItem4', value)} />}
                            </>
                        )}
                        {!isFormCompleted && (
                            <div className="flex flex-col items-center w-2/3 px-0 m-auto  justify-around  rounded-full gap-4">
                            <div className="flex gap-2">
                                {
                                    currentStep !== 1 && (
                                        <button 
                                            onClick={handlePreviousStep} 
                                            className="to-[#FFDF3D] from-[#F8CF00] bg-gradient-to-tl text-blue-950 px-6 py-2 rounded-full shadow-lg font-semibold" 
                                            style={{fontFamily: 'Quicksand'}}
                                        >
                                            Anterior
                                        </button>
                                    )
                                }
                                {
                                    currentStep === 5 
                                    ? <button onClick={handleNextStep} disabled={!isTestFormFilled} className={`to-[#FFDF3D] from-[#F8CF00] bg-gradient-to-tl text-blue-950 px-6 py-2 rounded-full shadow-lg font-semibold ${!isTestFormFilled ? 'opacity-50 cursor-not-allowed' : ''}`} style={{fontFamily: 'Quicksand'}}>Finalizar</button>
                                    : isTestFormFilled && currentStep !== 1 && <button onClick={handleNextStep} className="to-[#FFDF3D] from-[#F8CF00] bg-gradient-to-tl text-blue-950 px-6 py-2 rounded-full shadow-lg font-semibold" style={{fontFamily: 'Quicksand'}}>Próximo</button>
                                }
                            
                        </div>
                            
                        </div>
                        )}
                    </div>
                    <div className="flex h-4 sm:w-1/3 m-auto sm:bg-zinc-200 rounded-full">
                        <div className="flex w-full justify-between items-center">
                            
                            <div className="flex items-center justify-between w-full gap-2 ">
                                <span className={`text-white ${currentStep === 1 ? 'bg-zinc-400' : 'bg-zinc-300'} rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}>1</span>
                                <span className={`text-white ${currentStep === 2 ? 'bg-zinc-400' : 'bg-zinc-300'} rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}>2</span>
                                <span className={`text-white ${currentStep === 3 ? 'bg-zinc-400' : 'bg-zinc-300'} rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}>3</span>
                                <span className={`text-white ${currentStep === 4 ? 'bg-zinc-400' : 'bg-zinc-300'} rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}>4</span>   
                                <span className={`text-white ${currentStep === 5 ? 'bg-zinc-400' : 'bg-zinc-300'} rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}>5</span>   
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center sm:justify-end items-center">
                       <img src={logoInovaNeg} alt="logo" className="w-[180px] h-auto" />   
                    </div>

                </div>
            </div>
        </div>
    </Fragment>
  )
}