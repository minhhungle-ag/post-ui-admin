import UploadIcon from '@mui/icons-material/Upload'
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useController } from 'react-hook-form'
import { useUpload } from '../../hooks/upload'
export function PhotoField({ name, control, label, imageUrl, width = '100%', height = 'auto' }) {
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
  const key = `${name}-photo-field`

  return (
    <Stack width={width} height={height}>
      <Box
        component="label"
        width="100%"
        flexGrow={1}
        htmlFor={key}
        sx={{ border: '2px solid black', borderRadius: 1, overflow: 'hidden', cursor: 'pointer' }}
      >
        <Box
          hidden
          component="input"
          accept="image/*"
          id={key}
          type="file"
          onChange={handleFileChange}
        />

        <Box
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          {previewUrl ? (
            <Box
              component="img"
              alt="image"
              src={previewUrl}
              sx={{ width: '100%', height: '100%', verticalAlign: 'middle', objectFit: 'cover' }}
            />
          ) : (
            <Stack justifyContent="center" alignItems="center" width={'100%'} height={'100%'}>
              <Typography color="grey" fontWeight={200}>
                <UploadIcon sx={{ fontSize: 64 }} />
              </Typography>
            </Stack>
          )}
        </Box>
      </Box>

      {invalid && (
        <Typography
          variant="body2"
          fontSize={12}
          fontWeight={400}
          color="error"
          sx={{ mt: 0.5, ml: 2 }}
        >
          {error?.message}
        </Typography>
      )}
    </Stack>
  )
}
