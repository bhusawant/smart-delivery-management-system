import { Assignment } from '../types';

export const calculateSuccessRate = (assignments: Assignment[]) => {
  const totalAssignments = assignments.length;
  const successfulAssignments = assignments.filter((a) => a.status === 'success').length;
  return (successfulAssignments / totalAssignments) * 100;
};

export const getFailureReasons = (assignments: Assignment[]) => {
  const reasons: { [key: string]: number } = {};
  assignments.forEach((assignment) => {
    if (assignment.status === 'failed' && assignment.reason) {
      reasons[assignment.reason] = (reasons[assignment.reason] || 0) + 1;
    }
  });
  return Object.entries(reasons).map(([reason, count]) => ({ reason, count }));
};
