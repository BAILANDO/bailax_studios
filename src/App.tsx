import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CarbonLayout from "./carbon/CarbonLayout";
import CarbonHome from "./carbon/CarbonHome";
import CarbonApps from "./carbon/CarbonApps";
import CarbonAppDetail from "./carbon/CarbonAppDetail";
import CarbonLegal from "./carbon/CarbonLegal";
import CarbonContact from "./carbon/CarbonContact";
import CarbonPlannedApps from "./carbon/CarbonPlannedApps";
import { disclaimer, privacy, terms } from "./content/site";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="carbon/*" element={<Navigate to="/" replace />} />
        <Route element={<CarbonLayout />}>
          <Route index element={<CarbonHome />} />
          <Route path="apps" element={<CarbonApps />} />
          <Route path="apps/:slug" element={<CarbonAppDetail />} />
          <Route path="planned-apps" element={<CarbonPlannedApps />} />
          <Route path="privacy" element={<CarbonLegal doc={privacy} />} />
          <Route path="terms" element={<CarbonLegal doc={terms} />} />
          <Route path="disclaimer" element={<CarbonLegal doc={disclaimer} />} />
          <Route path="contact" element={<CarbonContact />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

function Missing() {
  return (
    <div className="carbon-legal">
      <h1>That page is not on this site.</h1>
      <p>The catalog and the policies are linked from the header and the footer.</p>
    </div>
  );
}
