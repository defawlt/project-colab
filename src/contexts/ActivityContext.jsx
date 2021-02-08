import React, { createContext, useState, useEffect } from 'react';
import activityService from '../services/activityService';

export const ActivityContext = createContext();

const ActivityContextProvider = ({ activityId, children }) => {
  const [activityData, setActivityData] = useState('');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [started, setStarted] = useState(null);
  const [finished, setFinished] = useState(null);
  const [completed, setCompleted] = useState('-10');

  const getActivityData = () => {
    return activityService.getOne(activityId);
  };

  useEffect(() => {
    getActivityData().then((data) => setActivityData(data));
  }, []);

  // Variables
  const { sections } = activityData;
  const currentSection = sections && sections[currentSectionIndex];
  const currentModule =
    currentSection && currentSection.modules[currentModuleIndex];

  return (
    <ActivityContext.Provider
      value={{
        ...activityData,
        started,
        finished,
        completed,
        setStarted,
        setFinished,
        currentSection,
        currentModule
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;