import React from 'react';
import '../App.css';

function ColorChanger() {
    const isLightColor = (color) => {

        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);

        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

        return luminance > 0.5;
    };

    const generateLightColor = () => {
        let color;
        do {
          
            color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        } while (!isLightColor(color));
        return color;
    };

    const changeColors = () => {
      
        const primaryColor = generateLightColor();
        const secondaryColor = generateLightColor();
        
     
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);

       
        const commandPrompts = document.querySelectorAll('.command-prompt');
        commandPrompts.forEach(prompt => {

            prompt.style.color = secondaryColor;
        });

      
        const textInputs = document.querySelectorAll('input[type="text"]');
        textInputs.forEach(input => {
            input.style.backgroundColor = 'transparent';
            input.style.color = secondaryColor;
            input.style.border = 'none';
            input.style.outline = 'none';
            input.style.fontFamily = 'Consolas, monospace';
            input.style.fontSize = '14px';
            input.style.width = 'calc(100% - 50px)';
        });
    };

    return (
        <div className='color-changer'>
            <button onClick={changeColors}>Change Colors</button>
        </div>
    );
}

export default ColorChanger;
