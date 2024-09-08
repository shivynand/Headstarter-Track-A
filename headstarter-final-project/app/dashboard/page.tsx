// dashboard/page.tsx
"use client";
import { useAuth } from "../auth/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute"; // Adjust the path as necessary
import { useState } from "react";
import Card from "../components/card";
import { GlobeIcon, Weather } from "../components/card";
import ContinentButton from "../components/continentbutton";

const DashboardPage = () => {
  const { user } = useAuth();
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [selectTerms, setSelectTerms] = useState<string[]>([]);

  const handleContinentSelect = (continent: string) => {
    setSelectedContinents((prevSelectedContinents) => {
      if (prevSelectedContinents.includes(continent)) {
        return prevSelectedContinents.filter((c) => c !== continent);
      } else {
        return [...prevSelectedContinents, continent];
      }
    });
  };

  const handleSelectTerm = (term: string) => {
    setSelectTerms((prevSelectTerms) => {
      if (prevSelectTerms.includes(term)) {
        return prevSelectTerms.filter((t) => t !== term);
      } else {
        return [...prevSelectTerms, term];
      }
    });
  };

  return (
    <ProtectedRoute>
      <main className="flex h-screen bg-blue-800">
        <h1 className="flex text-5xl font-serif text-yellow-400 justify-center p-20">
          Welcome {user?.displayName}
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-20 p-4">
          <div className="flex-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <Card title="Choose your continents" icon={<GlobeIcon />}>
              <div className="grid grid-cols-2 gap-4">
                <ContinentButton
                  continent="Asia"
                  isSelected={selectedContinents.includes("Asia")}
                  onClick={() => handleContinentSelect("Asia")}
                />
                <ContinentButton
                  continent="Europe"
                  isSelected={selectedContinents.includes("Europe")}
                  onClick={() => handleContinentSelect("Europe")}
                />
                <ContinentButton
                  continent="North America"
                  isSelected={selectedContinents.includes("North America")}
                  onClick={() => handleContinentSelect("North America")}
                />
                <ContinentButton
                  continent="South America"
                  isSelected={selectedContinents.includes("South America")}
                  onClick={() => handleContinentSelect("South America")}
                />
                <ContinentButton
                  continent="Australia"
                  isSelected={selectedContinents.includes("Australia")}
                  onClick={() => handleContinentSelect("Australia")}
                />
              </div>
            </Card>
          </div>

          <div className="flex-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
            <Card title="Term?" icon={<Weather />}>
              <div className="grid grid-cols-1 gap-4 my-10">
                <button
                  className={`font-bold font-serif py-2 rounded transition-colors duration-300 ${
                    selectTerms.includes("Fall")
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-yellow-500 hover:bg-yellow-600 text-white"
                  } `}
                  onClick={() => handleSelectTerm("Fall")}
                >
                  🍁 Fall
                </button>
                <button
                 className={`font-bold font-serif py-2 rounded transition-colors duration-300 ${
                  selectTerms.includes("Spring")
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                } `}
                  onClick={() => handleSelectTerm("Spring")}
                >
                  🌸 Spring
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
};

export default DashboardPage;
