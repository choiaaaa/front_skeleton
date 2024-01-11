import { Routes, Route } from 'react-router-dom';
import BoardList from './component/BoardList';
import BoardInsert from './component/BoardInsert';
import BoardDetail from './component/BoardDetail';
import BoardUpdate from './component/BoardUpdate';

const BoardMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/list" element={<BoardList />} />
        <Route path="/insert" element={<BoardInsert />} />
        <Route path="/detail/:id" element={<BoardDetail />} />
        <Route path="/update/:id" element={<BoardUpdate />} />
      </Routes>
    </div>
  );
};

export default BoardMain;
