import { Route, Routes } from 'react-router-dom';

import BoardList from './component/BoardList';
import BoardInsert from './component/BoardInsert';

const BoardMain = () => {
  return (
    <div>
      <h2>Board Main</h2>
      <Routes>
        <Route path="/list" element={<BoardList />} />
        <Route path="/insert" element={<BoardInsert />} />
      </Routes>
    </div>
  );
};
export default BoardMain;
