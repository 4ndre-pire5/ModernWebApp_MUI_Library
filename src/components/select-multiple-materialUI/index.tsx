import React from 'react';
import { Roles } from '@/model/roles';
import { MenuItem, Select, SelectProps } from '@mui/material';
import styles from './styles.module.css'


interface Props extends SelectProps {
  label: string;
  rolesLista: Roles[];
}

export default function SelectMultiple({ label, rolesLista, ...rest }: Props) {
  return (
    <div className={styles.divInput}>
      <label className={styles.label}>{label}:</label>
        <Select 
          className={styles.select} 
          multiple 
          {...rest}
        >
          {rolesLista.map((o) => (
            <MenuItem 
              className={styles.dropdown} 
              key={o.name} 
              value={o.name}>
              {o.description}
            </MenuItem>
          ))}
        </Select>
    </div>
  );
}
