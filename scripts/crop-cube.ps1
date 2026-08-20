Add-Type -AssemblyName System.Drawing
$path = "C:\Users\PC\.cursor\P27website\public\brand\p27-solver-mark.png"
$img = [System.Drawing.Image]::FromFile($path)

# Tighter crop — cube only, leave wordmark out
$cropW = [int]($img.Height * 0.95)
$cropH = $img.Height
$bmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::FromArgb(255, 0, 0, 0))
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$srcRect = New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH
$destRect = New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH
$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$out = "C:\Users\PC\.cursor\P27website\public\brand\p27-cube.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host ("Saved cube {0}x{1}" -f $cropW, $cropH)
