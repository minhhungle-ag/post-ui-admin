import { Stack } from '@mui/material'
import { SearchField } from '../../../components/FormField/Searchbox'

export function UsersFilter({ params, onFilterChange }) {
  function handleSearchChange(value) {
    onFilterChange?.({
      ...params,
      currentPage: 1,
      searchKey: value,
    })
  }

  return (
    <Stack direction="row" spacing={3}>
      <SearchField onSearchChange={handleSearchChange} placeholder="Search user..." />
    </Stack>
  )
}
