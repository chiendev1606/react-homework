import React, { useState } from "react";

const tabs = ["My Account", "Company", "Team Members", "Billing"];

// Update the current tab (to toggle its appearance when clicked) using the state setter function
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("My Account");
  // let currentTab = "My Account";

  return (
    <div className="flex justify-center my-8">
      <div className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setCurrentTab(tab)
            }}
            className={`${
              tab === currentTab
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-500 hover:text-gray-700"
            } rounded-md px-3 py-2 text-sm font-medium`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
