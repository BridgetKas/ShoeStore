import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const selectItems = ["District1", "District2", "District3"]

function SelectInput() {
  return (
    <div>
      <TextField select defaultValue='District1'>
        {selectItems.map((selectItem) => (
          <MenuItem key={selectItem} value={selectItem}>
            {selectItem}
          </MenuItem>
        ))}
      </TextField>

    </div>
  )
}





export default SelectInput