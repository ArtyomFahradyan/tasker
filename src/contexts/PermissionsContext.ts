import { createContext } from 'react';

type PermissionsContextType = [string[], (permissions: string[]) => void];

export const PermissionsContext = createContext<PermissionsContextType>([[], () => undefined]);
