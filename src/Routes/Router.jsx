import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UploadForm from "../components/Navbar/UploadForm";
import DogsTag from "../pages/DogsTag";
import { Dashboard, Trending, Reactions } from "../pages/index";
import KpopTag from "../pages/KpopTag";
import MoneyTag from "../pages/MoneyTag";

const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="trending" element={<Trending />} />
        <Route path="reactions" element={<Reactions />} />
        <Route path="kpop" element={<KpopTag />} />
        <Route path="dogs" element={<DogsTag />} />
        <Route path="money" element={<MoneyTag />} />
        <Route path="upload" element={<UploadForm />} />
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default Router