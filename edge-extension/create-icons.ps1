# Create simple icons for the extension
# Run this from PowerShell in the edge-extension folder

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$iconDir = Join-Path $scriptPath "icons"

# Ensure icons directory exists
if (!(Test-Path $iconDir)) {
    New-Item -ItemType Directory -Path $iconDir | Out-Null
}

Add-Type -AssemblyName System.Drawing

# Purple gradient color (similar to popup)
$color = [System.Drawing.Color]::FromArgb(102, 126, 234)

# Create 16x16 icon
Write-Host "Creating 16x16 icon..." -ForegroundColor Cyan
$bmp16 = New-Object System.Drawing.Bitmap 16, 16
$gfx16 = [System.Drawing.Graphics]::FromImage($bmp16)
$gfx16.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gfx16.Clear($color)
$font = New-Object System.Drawing.Font("Segoe UI", 10, [System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$gfx16.DrawString("Q", $font, $brush, -1, 0)
$icon16Path = Join-Path $iconDir "icon16.png"
$bmp16.Save($icon16Path, [System.Drawing.Imaging.ImageFormat]::Png)
$gfx16.Dispose()
$bmp16.Dispose()
$font.Dispose()
$brush.Dispose()

# Create 48x48 icon
Write-Host "Creating 48x48 icon..." -ForegroundColor Cyan
$bmp48 = New-Object System.Drawing.Bitmap 48, 48
$gfx48 = [System.Drawing.Graphics]::FromImage($bmp48)
$gfx48.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gfx48.Clear($color)
$font48 = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Bold)
$brush48 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$gfx48.DrawString("Q", $font48, $brush48, 8, 6)
$icon48Path = Join-Path $iconDir "icon48.png"
$bmp48.Save($icon48Path, [System.Drawing.Imaging.ImageFormat]::Png)
$gfx48.Dispose()
$bmp48.Dispose()
$font48.Dispose()
$brush48.Dispose()

# Create 128x128 icon
Write-Host "Creating 128x128 icon..." -ForegroundColor Cyan
$bmp128 = New-Object System.Drawing.Bitmap 128, 128
$gfx128 = [System.Drawing.Graphics]::FromImage($bmp128)
$gfx128.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$gfx128.Clear($color)
$font128 = New-Object System.Drawing.Font("Segoe UI", 72, [System.Drawing.FontStyle]::Bold)
$brush128 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$gfx128.DrawString("Q", $font128, $brush128, 22, 18)
$icon128Path = Join-Path $iconDir "icon128.png"
$bmp128.Save($icon128Path, [System.Drawing.Imaging.ImageFormat]::Png)
$gfx128.Dispose()
$bmp128.Dispose()
$font128.Dispose()
$brush128.Dispose()

Write-Host ""
Write-Host "✅ Icons created successfully!" -ForegroundColor Green
Write-Host "📁 Location: $iconDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to edge://extensions/" -ForegroundColor White
Write-Host "2. Enable Developer Mode" -ForegroundColor White
Write-Host "3. Click 'Load unpacked'" -ForegroundColor White
Write-Host "4. Select the edge-extension folder" -ForegroundColor White
Write-Host ""
