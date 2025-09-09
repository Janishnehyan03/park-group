"use client";
import React, { useState } from "react";
import { menuData, MenuCategory } from "./menuData";

const WHATSAPP_NUMBER = "919048012292";

// Utility for WhatsApp URL
function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const inputClass =
  "block w-full p-3 border border-[#b5ddc5] rounded-lg focus:ring-2 focus:ring-[#19523d]/30 focus:border-[#19523d] bg-[#f7fbfa] text-[#133427] placeholder:text-[#133427]/50 transition";

type CustomerDetails = {
  name: string;
  address: string;
  phone: string;
  date: string;
  place: string;
  people: string;
};

export default function EventBookingPage() {
  // Customer details state
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: "",
    address: "",
    phone: "",
    date: "",
    place: "",
    people: "",
  });

  // Selections: { [categoryTitle]: Set<string> }
  const [selected, setSelected] = useState<Record<string, Set<string>>>({});
  const [activeTab, setActiveTab] = useState(menuData[0].title);

  // Handle input change
  const handleInput = (field: keyof CustomerDetails, value: string) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
  };

  // Handle item select/deselect
  const toggleItem = (category: string, item: string) => {
    setSelected((prev) => {
      const catSet = new Set(prev[category] || []);
      if (catSet.has(item)) catSet.delete(item);
      else catSet.add(item);
      return { ...prev, [category]: catSet };
    });
  };

  // Prepare WhatsApp message
  function generateMessage() {
    let msg = `*Event Catering Booking*\n\n`;
    msg += `*Customer Details:*\n`;
    msg += `Name: ${customer.name}\nAddress: ${customer.address}\nPhone: ${customer.phone}\nDate: ${customer.date}\nEvent Place: ${customer.place}\nPeople Count: ${customer.people}\n\n`;
    msg += `*Selected Items:*\n`;
    menuData.forEach((cat) => {
      const picked = selected[cat.title];
      if (picked && picked.size) {
        msg += `\n*${cat.title}:*\n`;
        for (const item of picked) {
          msg += `- ${item}\n`;
        }
      }
    });
    return msg.trim();
  }

  // Validation
  const isValid =
    customer.name &&
    customer.address &&
    customer.phone &&
    customer.date &&
    customer.place &&
    customer.people &&
    Object.values(selected).some((set) => set.size);

  // Quick selector
  const selectAllInCategory = (cat: MenuCategory) => {
    setSelected((prev) => ({
      ...prev,
      [cat.title]: new Set(cat.items),
    }));
  };
  const clearAllInCategory = (cat: MenuCategory) => {
    setSelected((prev) => ({
      ...prev,
      [cat.title]: new Set(),
    }));
  };

  return (
    <div className="min-h-screen bg-[#133427] py-10 px-2">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* LEFT: Customer Details */}
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#e3f3e9] bg-[#f7fbfa]/70 p-7">
          <h2 className="text-2xl font-bold text-[#133427] mb-6">
            Book Your Event
          </h2>
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (isValid)
                window.open(getWhatsAppUrl(generateMessage()), "_blank");
            }}
          >
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#19523d]">
                Name
              </label>
              <input
                className={inputClass}
                value={customer.name}
                onChange={(e) => handleInput("name", e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#19523d]">
                Address
              </label>
              <textarea
                className={inputClass}
                value={customer.address}
                onChange={(e) => handleInput("address", e.target.value)}
                required
                placeholder="Your address"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#19523d]">
                Phone Number
              </label>
              <input
                className={inputClass}
                value={customer.phone}
                onChange={(e) => handleInput("phone", e.target.value)}
                required
                type="tel"
                placeholder="Phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#19523d]">
                Date
              </label>
              <input
                className={inputClass}
                value={customer.date}
                onChange={(e) => handleInput("date", e.target.value)}
                required
                type="date"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#19523d]">
                Event Place
              </label>
              <input
                className={inputClass}
                value={customer.place}
                onChange={(e) => handleInput("place", e.target.value)}
                required
                placeholder="Venue"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#19523d]">
                People Count
              </label>
              <input
                className={inputClass}
                value={customer.people}
                onChange={(e) => handleInput("people", e.target.value)}
                required
                type="number"
                min={1}
                placeholder="How many people?"
              />
            </div>
            <button
              type="submit"
              disabled={!isValid}
              className={`mt-6 w-full py-3 rounded-lg font-bold text-lg transition flex items-center justify-center
                ${
                  isValid
                    ? "bg-[#133427] text-[#fffacd] hover:bg-[#19523d]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }
              `}
            >
              Send to WhatsApp
            </button>
            <p className="text-xs text-gray-400 mt-2">
              We will never share your details. Your menu selections are
              included in your booking.
            </p>
          </form>
        </div>

        {/* RIGHT: Menu Selection */}
        <div className="w-full md:w-1/2 bg-[#e9f5ef]/80 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-[#133427] mb-3">
            Select Menu Items
          </h3>
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {menuData.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`px-4 py-2 rounded-lg font-semibold transition text-sm
                  ${
                    activeTab === cat.title
                      ? "bg-[#133427] text-[#fffacd]"
                      : "bg-[#fffacd] text-[#133427] hover:bg-[#e9f5ef]"
                  }
                  whitespace-normal break-words max-w-xs
                `}
                style={{ wordBreak: "break-word" }}
              >
                {cat.title}
              </button>
            ))}
          </div>
          {/* Items for active tab */}
          <div className="flex-1 overflow-y-auto pr-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#19523d] font-semibold">Pick Items</span>
              <div className="space-x-2">
                <button
                  className="text-xs py-1 px-2 bg-[#133427] text-[#fffacd] rounded hover:bg-[#19523d] transition"
                  onClick={() =>
                    selectAllInCategory(
                      menuData.find((c) => c.title === activeTab)!
                    )
                  }
                  type="button"
                >
                  Select All
                </button>
                <button
                  className="text-xs py-1 px-2 bg-[#fffacd] text-[#133427] rounded hover:bg-[#e9f5ef] transition border border-[#133427] "
                  onClick={() =>
                    clearAllInCategory(
                      menuData.find((c) => c.title === activeTab)!
                    )
                  }
                  type="button"
                >
                  Clear All
                </button>
              </div>
            </div>
            <ul className="space-y-2 max-h-72 overflow-y-auto">
              {menuData
                .find((cat) => cat.title === activeTab)!
                .items.map((item) => (
                  <li key={item}>
                    <label className="flex items-center gap-2 cursor-pointer text-[#133427]">
                      <input
                        type="checkbox"
                        className="accent-[#133427] w-4 h-4"
                        checked={selected[activeTab]?.has(item) || false}
                        onChange={() => toggleItem(activeTab, item)}
                      />
                      <span className="text-base">{item}</span>
                    </label>
                  </li>
                ))}
            </ul>
          </div>
          {/* Summary */}
          <div className="border-t border-[#b5ddc5] mt-5 pt-3">
            <p className="font-semibold text-[#19523d] mb-2">Selected Items:</p>
            <ul className="text-[#133427] text-sm space-y-1 max-h-20 overflow-y-auto">
              {Object.entries(selected)
                .filter(([_, set]) => set.size)
                .flatMap(([cat, set]) =>
                  Array.from(set).map((item) => (
                    <li key={cat + item}>
                      <span className="font-medium">{cat}:</span> {item}
                    </li>
                  ))
                )}
              {!Object.values(selected).some((set) => set.size) && (
                <li className="text-gray-400">None selected</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
