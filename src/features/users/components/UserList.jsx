import { Delete, Edit } from '@mui/icons-material'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import dayjs from 'dayjs'
import { DataGridLoadingOverlay } from '../../../components/Common/DataGridLoadingOverlay'

export function UserList({
  data,
  pagination,
  loading,
  onPageChange,
  onEditClick,
  onRemoveClick,
  onRowClick,
  onResetClick,
}) {
  const columns = [
    // {
    //   field: 'id',
    //   headerName: '#',
    //   width: 75,
    // },
    // {
    //   field: 'groupId',
    //   headerName: 'eConnect',
    //   valueFormatter: ({ value }) => groupMap[value as number]?.name || '',
    //   width: 100,
    // },
    {
      field: 'id',
      headerName: 'ID',
      flex: 1,
      minWidth: 300,
    },
    {
      field: 'fullname',
      headerName: 'Name',
      flex: 1,
      minWidth: 175,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 175,
    },
    {
      field: 'role',
      headerName: 'Roles',
      flex: 1,
      minWidth: 175,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 100,
      valueFormatter: ({ value }) => dayjs(value).format('DD/MM/YYYY'),
    },
    // {
    //   field: 'updatedAt',
    //   headerName: 'Updated At',
    //   width: 100,
    //   valueFormatter: ({ value }) => dayjs(value).format('DD/MM/YYYY'),
    // },
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      renderCell: ({ row: currentUser }) => {
        return (
          <>
            <GridActionsCellItem
              icon={<Edit />}
              label="Edit"
              onClick={() => onEditClick?.(currentUser)}
            />

            <GridActionsCellItem
              icon={<Delete />}
              label="Delete"
              onClick={() => onRemoveClick?.(currentUser)}
            />
          </>
        )
      },
    },
  ]

  return (
    <DataGrid
      components={{
        LoadingOverlay: DataGridLoadingOverlay,
      }}
      loading={loading}
      rows={data}
      columns={columns}
      pagination
      paginationMode="server"
      rowCount={pagination?.total || 10}
      pageSize={pagination?.limit || 10}
      page={(pagination?.page || 1) - 1}
      onPageChange={onPageChange}
      onRowClick={onRowClick}
      disableColumnMenu
    />
  )
}
