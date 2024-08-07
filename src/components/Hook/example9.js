import React, { useEffect, useCallback } from "react";

const useKeyboardEvents = (events) => {
    const handleKeyDown = useCallback(
        (event) => {
            events.forEach(({ triggerKey, ctrlKey = false, shiftKey = false, altKey = false, onTrigger }) => {

                console.log(event.key, event.ctrlKey, event.shiftKey, event.altKey);

                if (
                    event.key === triggerKey &&
                    event.ctrlKey === ctrlKey &&
                    event.shiftKey === shiftKey &&
                    event.altKey === altKey
                ) {
                    event.preventDefault();
                    onTrigger();
                }
            });
        },
        [events]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);
};

const Example9 = () => {
    const handleFirstTrigger = () => {
        console.log("First key event triggered!");
    };

    const handleSecondTrigger = () => {
        console.log("Second key event triggered!");
    };

    useKeyboardEvents([
        {
            triggerKey: "a",
            ctrlKey: true,
            onTrigger: handleFirstTrigger,
        },
        {
            triggerKey: "B",
            shiftKey: true,
            onTrigger: handleSecondTrigger,
        },
    ]);

    return (
        <div>
            <h1>Press Ctrl+A or Shift+B to trigger events</h1>
        </div>
    );
};

export default Example9;
