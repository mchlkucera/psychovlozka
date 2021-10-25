import React from "react";

const Blocked = () => {
   return (
      <div
         className="section wf-section"
         style={{ marginTop: "64px", marginBottom: "64px" }}
      >
         <div className="w-container">
            <h1>Zde nemáš přístup 🔐</h1>
            <p>
               Pro přístup k tomuto obsahu musíš mít{" "}
               <a href="/">plnou verzi psychovložky</a>
            </p>
         </div>
      </div>
   );
};

export default Blocked;
