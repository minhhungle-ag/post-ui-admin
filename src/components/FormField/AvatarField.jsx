import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useController } from 'react-hook-form'
import { useUpload } from '../../hooks/upload'
export function AvatarField({ name, control, width = 80, height = 'auto' }) {
  const {
    field: { value, onChange },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  })

  const [preview, setPreview] = useState('')

  const { addMutation } = useUpload()

  const handleFileChange = async (e) => {
    e.preventDefault()

    const file = e.target?.files?.[0]

    if (!file) return

    const formData = new FormData()
    formData.append('imageUrl', file)

    try {
      await addMutation.mutateAsync(formData).then((response) => {
        if (response) {
          const { imageUrl } = response

          setPreview(imageUrl)
          onChange(imageUrl)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const previewUrl = value || preview
  const key = `${name}-avatar-field`

  return (
    <Stack justifyContent="center" alignItems="center" spacing={1.5}>
      <Box
        component="label"
        width={width}
        height={width}
        flexGrow={1}
        htmlFor={key}
        sx={{ cursor: 'pointer' }}
      >
        <Box
          hidden
          component="input"
          accept="image/*"
          id={key}
          type="file"
          onChange={handleFileChange}
        />

        <Avatar
          alt="avatar"
          src={previewUrl}
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
      <Typography variant="body2" fontSize={12} fontWeight={400} color="error" sx={{ ml: 2 }}>
        {invalid && error?.message}
      </Typography>
    </Stack>
  )
}
