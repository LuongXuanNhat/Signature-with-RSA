# Modern CKFinder Theme - Images

## Sử Dụng Icons

Giao diện Modern sử dụng lại các icons từ skin Kama.
Bạn có thể copy toàn bộ thư mục `images` từ `skins/kama/images/` sang `skins/modern/images/`

## Hoặc Tạo Icons Mới

Nếu muốn tạo icons mới phù hợp với giao diện hiện đại:

### Yêu Cầu Icons

- Format: PNG với transparency
- Size: 16x16px cho toolbar icons
- Size: 32x32px cho file thumbnails
- Style: Flat design, 2 màu chính #667eea và #2c3e50

### Danh Sách Icons Cần Có

**Toolbar Icons (16x16):**

- add.gif - Upload file
- delete.gif - Delete file
- download.gif - Download file
- refresh.gif - Refresh
- settings.gif - Settings
- help.gif - Help
- view.gif - View file
- maximize.gif - Maximize window

**Folder Icons:**

- ckffolder.gif - Closed folder
- ckffolderopened.gif - Opened folder
- ckfplus.gif - Expand folder
- ckfminus.gif - Collapse folder

**Loading Spinners:**

- loaders/16x16.gif - Small loader
- loaders/32x32.gif - Large loader

## Lệnh Copy (Windows CMD)

```cmd
xcopy "d:\BTMONHOC\SĐH\MaHoa_ThamMa\Signature_with_RSA\Content\ckfinder\skins\kama\images" "d:\BTMONHOC\SĐH\MaHoa_ThamMa\Signature_with_RSA\Content\ckfinder\skins\modern\images" /E /I /Y
```

## Sử Dụng SVG (Khuyến Nghị)

Để có chất lượng tốt hơn, bạn có thể thay icons GIF bằng SVG:

### Ví Dụ SVG Icon

```svg
<!-- upload.svg -->
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 2L8 12M8 2L4 6M8 2L12 6" stroke="#667eea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 14H14" stroke="#667eea" stroke-width="2" stroke-linecap="round"/>
</svg>
```

Sau đó cập nhật CSS để sử dụng SVG thay vì GIF.
