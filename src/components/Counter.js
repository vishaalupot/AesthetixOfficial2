import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 90%;
  justify-content: space-between;
  padding: 4rem 4rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem; /* Add space between number and text */
  color:#9b00a9;
`;

const Text = styled.p`
  font-size: 25px;
  color: #105187;
  margin: 0;
  font-weight: 300;
`;

function StatsComponent() {
  const [counters, setCounters] = useState({
    projectsCompleted: 0,
    topSystems: 0,
    repeatBusiness: 0,
    countriesServed: 0
  });
  const containerRef = useRef(null);

  useEffect(() => {
    const targetValues = {
      projectsCompleted: 10000,
      topSystems: 10,
      repeatBusiness: 98,
      countriesServed: 2
    };

    let observer;
    let projectInterval;
    let otherInterval;

    const startProjectCounter = () => {
      projectInterval = setInterval(() => {
        setCounters((prevCounters) => ({
          ...prevCounters,
          projectsCompleted: Math.min(
            prevCounters.projectsCompleted + 100,
            targetValues.projectsCompleted
          )
        }));
      }, 50);
    };

    const startOtherCounters = () => {
      otherInterval = setInterval(() => {
        setCounters((prevCounters) => ({
          ...prevCounters,
          topSystems: Math.min(
            prevCounters.topSystems + 1,
            targetValues.topSystems
          ),
          repeatBusiness: Math.min(
            prevCounters.repeatBusiness + 1,
            targetValues.repeatBusiness
          ),
          countriesServed: Math.min(
            prevCounters.countriesServed + 1,
            targetValues.countriesServed
          )
        }));
      }, 100);
    };

    const stopCounters = () => {
      if (projectInterval) {
        clearInterval(projectInterval);
      }
      if (otherInterval) {
        clearInterval(otherInterval);
      }
    };

    const handleIntersection = (entries) => {
      if (entries[0].isIntersecting) {
        startProjectCounter();
        startOtherCounters();
        observer.disconnect();
      } else {
        stopCounters();
      }
    };

    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      stopCounters();
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
<Container ref={containerRef}>
      <Column>
        <Number>{'>'}{counters.projectsCompleted}</Number>
        <Text>AV Projects Completed</Text>
      </Column>
      <Column>
        <Number>{counters.repeatBusiness}%</Number>
        <Text>Of Customers Repeat Business</Text>
      </Column>
      <Column>
        <Number>{counters.topSystems}</Number>
        <Text>Years of experience</Text>
      </Column>
      <Column>
        <Number>{counters.countriesServed}</Number>
        <Text>Countries Served</Text>
      </Column>
    </Container>
    </div>
    
  );
}

export default StatsComponent;
