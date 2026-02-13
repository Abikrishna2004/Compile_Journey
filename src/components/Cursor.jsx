import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const cursorDot = dotRef.current;
        const cursorOutline = outlineRef.current;

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', onMouseMove);

        const animateCursor = () => {
            if (!cursorDot || !cursorOutline) return;

            // Dot follows strictly
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
            cursorDot.style.transform = `translate(-50%, -50%)`;

            // Outline follows with lag
            outlineX += (mouseX - outlineX) * 0.1;
            outlineY += (mouseY - outlineY) * 0.1;

            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;
            cursorOutline.style.transform = `translate(-50%, -50%)`;

            requestAnimationFrame(animateCursor);
        };

        const animationId = requestAnimationFrame(animateCursor);

        // Interactive elements hover effect via event delegation
        const onMouseOver = (e) => {
            // Check if the hovered element or any of its parents is interactive
            if (e.target.closest('a, button, input, textarea, .interactive-element')) {
                cursorOutline?.classList.add('hover');
            } else {
                cursorOutline?.classList.remove('hover');
            }
        };

        document.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div id="cursor-dot" ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-sky-400 rounded-full z-[9999] pointer-events-none"></div>
            <div id="cursor-outline" ref={outlineRef} className="fixed top-0 left-0 w-40 h-40 border-2 border-primary-glow rounded-full z-[9999] pointer-events-none transition-all duration-300"></div>
        </>
    );
};
export default Cursor;
