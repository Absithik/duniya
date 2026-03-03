/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExamsPage } from "./pages/ExamsPage";
import { MethodPage } from "./pages/MethodPage";
import { MentorsPage } from "./pages/MentorsPage";
import { BlogPage } from "./pages/BlogPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<CoursesPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/method" element={<MethodPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}
