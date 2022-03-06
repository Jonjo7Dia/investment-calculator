import React from 'react';

const ComplexContext = React.createContext({
    startingSalary: 30000,
    endSalary: 50000,
    contributionPercentage: 20.0,
    growthTime: 10,
    growthRate: 1,
    growthPeriod: 1,
    contributions: [],
    setStartingSalary: (amount) =>{},
    setEndSalary: (amount) =>{},
    setPercentage: (amount) =>{},
    setGrowthTime: (amount) =>{},
    setGrowthRate: (amount) =>{},
    setGrowthPeriod: (amount) =>{},
    setContributions: () => {}
});

export default ComplexContext;
