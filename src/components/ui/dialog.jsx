import { useState } from "react";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg w-full">
        <button onClick={onOpenChange} className="absolute top-2 right-2 text-xl font-bold">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}
