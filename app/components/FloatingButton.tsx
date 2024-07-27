"use client"
import React from 'react'

export const FloatingButton = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <button 
    onClick={scrollToTop} 
    className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition duration-500"
>
    ↑
</button>
  )
}
export default FloatingButton;
