import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries())
        }

        getCountries();
    }, [setCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(event) => {
                handleCountryChange(event.target.value);
            }}>
                <option value="">Global</option>
                {countries.map((name, i) => <option key={i} value={name}>{name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;