import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
} from "@pages";
import DefaultLayout from "@components/layouts/DefaultLayout"; // using alias @
import UserLayout from "@components/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages  */}

      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route path="login" element={<SignInPage />}></Route>
        <Route path="forget-password" element={<ForgetPasswordPage />}></Route>
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="borrow-history" element={<BorrowPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
