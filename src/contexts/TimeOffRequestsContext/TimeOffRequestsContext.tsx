import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { TimeOffRequest, TimeOffRequestStatus } from '../../types/models';
import { AppStorageKey, storageHandler } from '../constants';
import { TimeOffRequestsAction, TimeOffRequestsActionCode } from './types';

const initialRequests: TimeOffRequest[] = storageHandler.getItem<TimeOffRequest[]>(AppStorageKey.timeOffRequests) || [];

const saveRequestsToStorage =
    (requests: TimeOffRequest[]) => storageHandler.setItem(AppStorageKey.timeOffRequests, requests);

const reducer = (prevRequests: TimeOffRequest[], action: TimeOffRequestsAction): TimeOffRequest[] => {
  switch (action.type) {
    case TimeOffRequestsActionCode.addRequest: {
      const newRequest: TimeOffRequest = {
        ...action.payload,
        id: uuidv4(),
        status: TimeOffRequestStatus.pending,
        createdAt: new Date().toISOString(),
      };

      const updatedRequests: TimeOffRequest[] = [ ...prevRequests, newRequest ];
      saveRequestsToStorage(updatedRequests);
      return updatedRequests;
    }
    case TimeOffRequestsActionCode.updateRequestStatus: {
      const updatedRequests = [ ...prevRequests ].map<TimeOffRequest>((request) => {
        if (request.id === action.payload.id) {
          return {
            ...request,
            status: action.payload.status,
            supervisorNote: action.payload.supervisorNote,
          };
        }
        return request;
      });

      saveRequestsToStorage(updatedRequests);
      return updatedRequests;
    }
    case TimeOffRequestsActionCode.deleteRequest: {
      const updatedRequests = [ ...prevRequests ].filter(request => request.id !== action.payload.id);
      saveRequestsToStorage(updatedRequests);
      return updatedRequests;
    }
    default:
      return action satisfies never;
  }
};

type TimeOffRequestsContextType = {
    allRequests: TimeOffRequest[];
    dispatch: Dispatch<TimeOffRequestsAction>;
    getRequestsByEmployeeUsername: (username: string) => TimeOffRequest[];
};

const TimeOffRequestsContext = createContext<TimeOffRequestsContextType>({
  allRequests: initialRequests,
  dispatch: () => undefined,
  getRequestsByEmployeeUsername: () => [],
});

export const TimeOffRequestsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ allRequests, dispatch ] = useReducer(reducer, initialRequests);

  const getRequestsByEmployeeUsername =
        (username: string) => allRequests.filter(request => request.employeeUsername === username);

  return (
    <TimeOffRequestsContext.Provider
      value={{
        allRequests,
        dispatch,
        getRequestsByEmployeeUsername,
      }}
    >
      {children}
    </TimeOffRequestsContext.Provider>
  );
};

export const useTimeOffRequests = () => useContext(TimeOffRequestsContext);