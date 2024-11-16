import React, { useEffect, useState } from 'react';
import { Assignment, AssignmentMetrics } from '../../types/index';
import AssignmentCard from './AssignmentCard';
import '../../styles/assignment.css';
import dynamic from "next/dynamic";


type AssignmentDashboardProps = {
  activeAssignments: Assignment[];
  metrics: AssignmentMetrics;
};

const AssignmentDashboard: React.FC<AssignmentDashboardProps> = ({ activeAssignments, metrics }) => {
  const [assignments, setAssignments] = useState<Assignment[]>(activeAssignments);

  useEffect(() => {
    setAssignments(activeAssignments);
  }, [activeAssignments]);

  return (
    <div className="assignment-dashboard">
      <div className="metrics">
        <h2>Assignment Metrics</h2>
        <p>Total Assigned: {metrics.totalAssigned}</p>
        <p>Success Rate: {metrics.successRate}%</p>
        <p>Average Time: {metrics.averageTime} min</p>
        <div>
          <h3>Failure Reasons</h3>
          <ul>
            {metrics.failureReasons.map((reason, index) => (
              <li key={index}>
                {reason.reason}: {reason.count} times
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="assignments-list">
        <h3>Active Assignments</h3>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.timestamp.toString()} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};


export default dynamic (() => Promise.resolve(AssignmentDashboard), {ssr: false});
