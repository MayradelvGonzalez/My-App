import { createContext, useContext } from 'react';

const GradeContext = createContext();

export const useGrade = () => {
  return useContext(GradeContext);
};

export default GradeContext;