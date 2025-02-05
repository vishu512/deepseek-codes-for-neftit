import { ConnectWallet, ThirdwebProvider } from "@thirdweb-dev/react";
import { useState } from 'react';

export default function App() {
  const [user] = useState({
    name: "CryptoKing",
    streak: 7,
    neftCoins: 420,
    collectibles: ["Neft-70", "Neft-50"]
  });

  return (
    <ThirdwebProvider activeChain="ethereum">
      <div className="min-h-screen bg-gradient-to-b from-black to-dark2 text-white">
        {/* Header */}
        <header className="p-4 border-b border-accent">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-accent text-2xl font-bold">NEFTIT</h1>
            <ConnectWallet theme="dark" />
          </div>
        </header>

        {/* Streak Section */}
        <div className="max-w-6xl mx-auto p-4">
          <div className="bg-dark1 p-6 rounded-xl">
            <h2 className="text-accent text-xl mb-4">🔥 {user.streak}-Day Streak</h2>
            <div className="w-full bg-gray-800 rounded-full h-3">
              <div 
                className="bg-accent h-3 rounded-full" 
                style={{ width: `${(user.streak/30)*100}%` }}
              ></div>
            </div>
            <button className="mt-4 bg-accent text-black px-6 py-2 rounded-lg">
              Check-in Today
            </button>
          </div>

          {/* Profile Section */}
          <div className="mt-8 bg-dark1 p-6 rounded-xl">
            <h2 className="text-2xl mb-4">{user.name}</h2>
            <p className="text-accent">Neft Coins: {user.neftCoins}</p>
            <div className="mt-6">
              <h3 className="text-xl mb-2">Your Collectibles:</h3>
              <div className="grid grid-cols-2 gap-4">
                {user.collectibles.map((item, index) => (
                  <div key={index} className="bg-dark2 p-4 rounded-lg">
                    <p className="text-accent">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThirdwebProvider>
  );
}
