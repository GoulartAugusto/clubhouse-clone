import './App.css';
import Welcome from "./pages/Welcome"
import PlanLayout from "./pages/Layouts/PlanLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Upcoming from "./pages/Upcoming";
import Invite from "./pages/Invite";

function App() {
  return (
    
    <BrowserRouter>
    <PlanLayout>
      <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/invite' element={<PhoneConfirmation />} />
          <Route path='/code_confirm' element={<CodeConfirm />} />
          <Route path='/allow_notification' element={<AllowNotification />} />
      </Routes>
      </PlanLayout>
      <AppLayout>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/friend_invite" element={<Invite />} />
      </Routes>
      </AppLayout>
      </BrowserRouter>
    
  );
}

export default App;
