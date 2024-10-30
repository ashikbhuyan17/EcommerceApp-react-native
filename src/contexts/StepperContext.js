// src/contexts/StepperContext.js
import React, {createContext, useContext, useState} from 'react';

// Create the Context
const StepperContext = createContext();

// Export the hook for using the context

// Create a Provider Component
export const StepperProvider = ({children}) => {
  const [selectedDate, setSelectedDate] = useState('lorem'); // Store the selected date

  return (
    <StepperContext.Provider value={{selectedDate, setSelectedDate}}>
      {children}
    </StepperContext.Provider>
  );
};
export const useStepperContext = () => useContext(StepperContext);
export default StepperContext;
