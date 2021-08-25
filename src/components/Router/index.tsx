import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Tasks = lazy(() => import('pages/Tasks'));

function Router() {
  return (
    <Suspense fallback={<div>Load</div>}>
        <Routes>
          <Route path="not-found" element={<div>Not found</div>} />
          <Route path="tasks" element={<Tasks />} />
        </Routes>
    </Suspense>
  );
}

export default Router;
