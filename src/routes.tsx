import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  CreateAccount,
  Dashboard,
  EditAccount,
  Initial,
  Login,
  MyAccount,
  DeleteAccount,
  NotFound,
  Transfers,
} from "./pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/edit-account" element={<EditAccount />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
