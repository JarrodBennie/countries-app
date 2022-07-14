import React from 'react';

function Select({ label, data, handler }) {
    function onChange(e) {
        handler(e.target.value);
    }

    const options = data.map(item => {
        return <option key={item.key} value={item.value}>{item.text}</option>
    });

    return (
        <label>
            {label}:
            <select onChange={onChange}>
                {options}
            </select>
        </label>
    );
}

export default Select;
